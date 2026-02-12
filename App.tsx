
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Concierge from './components/Concierge';
import CartDrawer from './components/CartDrawer';
import ProductDetail from './components/ProductDetail';
import ShopAll from './components/ShopAll';
import { PRODUCTS } from './constants';
import { Product, CartItem, AnimeSeries, View } from './types';
import { Flame, ShieldCheck, Truck, Package } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>({ type: 'home' });
  const [activeCategory, setActiveCategory] = useState<AnimeSeries>(AnimeSeries.ALL);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === AnimeSeries.ALL) return PRODUCTS;
    return PRODUCTS.filter(p => p.series === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const navigateToProduct = (id: string) => {
    setCurrentView({ type: 'product', id });
    window.scrollTo(0, 0);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    switch (currentView.type) {
      case 'shop':
        return (
          <ShopAll 
            products={PRODUCTS} 
            onAddToCart={addToCart} 
            onProductClick={navigateToProduct}
          />
        );
      case 'product':
        const product = PRODUCTS.find(p => p.id === currentView.id);
        if (!product) return <div>Product not found</div>;
        return (
          <ProductDetail 
            product={product} 
            onBack={() => setCurrentView({ type: 'home' })} 
            onAddToCart={addToCart}
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            
            {/* Feature Highlights - Removed 100% Authentic Reference */}
            <section className="bg-zinc-950 py-12 border-y border-rose-900/10">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center space-x-3">
                  <Package className="w-8 h-8 text-rose-600" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">UK Fulfillment</h4>
                    <p className="text-[10px] text-zinc-500">Fast local dispatch</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 opacity-50 grayscale">
                  <ShieldCheck className="w-8 h-8 text-rose-600" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Secure Portal</h4>
                    <p className="text-[10px] text-zinc-500">Encrypted checkout</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-8 h-8 text-rose-600" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Free UK Delivery</h4>
                    <p className="text-[10px] text-zinc-500">On all figurine orders</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Flame className="w-8 h-8 text-rose-600" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">Collector Owned</h4>
                    <p className="text-[10px] text-zinc-500">Curated with passion</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 overflow-hidden">
                <div className="shrink-0">
                  <h2 className="text-4xl font-display tracking-tighter mb-2">THE ARMORY</h2>
                  <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">High-grade collectibles from the most legendary series. Filter your path.</p>
                </div>
                
                <div className="w-full lg:max-w-3xl">
                  <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap gap-2 pb-4 px-1 -mx-1">
                    {Object.values(AnimeSeries).map(series => (
                      <button
                        key={series}
                        onClick={() => setActiveCategory(series)}
                        className={`shrink-0 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${
                          activeCategory === series 
                          ? 'bg-rose-600 text-white border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.3)]' 
                          : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-white hover:border-zinc-700'
                        }`}
                      >
                        {series}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                    onClick={() => navigateToProduct(product.id)}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="py-40 text-center">
                  <p className="text-zinc-500 text-lg italic">The scrolls are empty for this series. Check back after the next forge cycle.</p>
                </div>
              )}
            </section>

            {/* Newsletter / CTA */}
            <section className="relative overflow-hidden bg-rose-950/20 py-24 border-t border-rose-900/20">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-display mb-6 tracking-tighter">JOIN THE FORGE ELITE</h2>
                <p className="text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                  Be the first to know about exclusive limited drops, pre-orders, and secret warehouse restocks. 
                  Only for the true egoists.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL ADRESS" 
                    className="flex-grow bg-black border border-zinc-800 px-6 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-rose-600 uppercase"
                  />
                  <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-xs font-bold tracking-widest transition-colors uppercase">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-rose-600 selection:text-white">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={setCurrentView}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-black border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <div 
               className="flex items-center space-x-1 mb-6 cursor-pointer"
               onClick={() => setCurrentView({ type: 'home' })}
             >
              <h1 className="text-3xl font-display tracking-tighter text-white">
                MANGA<span className="text-rose-600">FORGE</span>
              </h1>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8">
              Based in the United Kingdom, Manga Forge is a specialist retailer of premium anime figurines and high-end manga merchandise. We fulfil all orders from our dedicated workshop in the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:border-rose-900/50 transition-all">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:border-rose-900/50 transition-all">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><button onClick={() => setCurrentView({ type: 'shop' })} className="hover:text-rose-500 transition-colors">Shop All</button></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-rose-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>Manga Forge UK Ltd.</li>
              <li>United Kingdom</li>
              <li>support@mangaforge.co.uk</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Manga Forge. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center">Secure Payment</span>
            <span>UK Fulfillment Specialists</span>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
      <Concierge currentCategory={activeCategory} />
    </div>
  );
};

export default App;
