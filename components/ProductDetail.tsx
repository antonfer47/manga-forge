
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, ArrowLeft, Truck, Package, ShieldCheck, Tag } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-zinc-500 hover:text-rose-500 transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">Return to Armory</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-zinc-950 border border-zinc-900 overflow-hidden group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {/* Mock thumbs since we only have one image per product in mock data */}
             {[...Array(4)].map((_, i) => (
               <div key={i} className={`aspect-square bg-zinc-900 border ${i === 0 ? 'border-rose-600' : 'border-zinc-800'} overflow-hidden opacity-50 hover:opacity-100 cursor-pointer`}>
                 <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
               </div>
             ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <span>{product.series}</span>
              <span className="text-zinc-700">/</span>
              <span>{product.scale}</span>
            </div>
            <h1 className="text-5xl font-display leading-[0.9] mb-4 uppercase tracking-tighter">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-display text-white">£{product.price.toFixed(2)}</span>
              <span className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                product.rarity === 'Limited Edition' ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {product.rarity}
              </span>
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-8 border-l-2 border-rose-900/40 pl-6 italic">
            {product.description}
          </p>

          <div className="space-y-6 mb-12">
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-5 rounded-none flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="tracking-[0.2em] uppercase">Add to My Armory</span>
            </button>
            <p className="text-center text-[10px] text-zinc-500 uppercase tracking-widest">
              Only {product.stock} units remaining in the forge
            </p>
          </div>

          {/* Perks */}
          <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-8 mb-12">
            <div className="text-center">
              <Truck className="w-6 h-6 text-rose-600 mx-auto mb-2" />
              <span className="block text-[8px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Free UK Shipping</span>
            </div>
            <div className="text-center">
              <Package className="w-6 h-6 text-rose-600 mx-auto mb-2" />
              <span className="block text-[8px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Collector Packaging</span>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-6 h-6 text-rose-600 mx-auto mb-2" />
              <span className="block text-[8px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">Official License</span>
            </div>
          </div>

          {/* Keywords */}
          <div>
            <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center">
              <Tag className="w-3 h-3 mr-2" /> Keywords & Lore
            </h5>
            <div className="flex flex-wrap gap-2">
              {product.keywords.map(keyword => (
                <span key={keyword} className="bg-zinc-950 border border-zinc-900 px-3 py-1 text-[10px] text-zinc-500 uppercase">
                  #{keyword.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
