
import React, { useState, useMemo } from 'react';
import { Product, AnimeSeries } from '../types';
import ProductCard from './ProductCard';
import { Filter, X, ChevronDown } from 'lucide-react';

interface ShopAllProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (id: string) => void;
}

const ShopAll: React.FC<ShopAllProps> = ({ products, onAddToCart, onProductClick }) => {
  const [selectedSeries, setSelectedSeries] = useState<AnimeSeries>(AnimeSeries.ALL);
  const [selectedScale, setSelectedScale] = useState<string>('All Scales');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const scales = ['All Scales', '1/7', '1/8', '1/4', 'Non-scale'];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSeries = selectedSeries === AnimeSeries.ALL || p.series === selectedSeries;
      const matchScale = selectedScale === 'All Scales' || p.scale === selectedScale;
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchSeries && matchScale && matchPrice;
    });
  }, [products, selectedSeries, selectedScale, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="w-4 h-4 text-rose-600" />
              <h2 className="text-lg font-display uppercase tracking-wider">Refine Armory</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">By Series</h3>
                <div className="space-y-2">
                  {Object.values(AnimeSeries).map(series => (
                    <button
                      key={series}
                      onClick={() => setSelectedSeries(series)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedSeries === series ? 'text-rose-500 font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {series}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">By Scale</h3>
                <div className="flex flex-wrap gap-2">
                  {scales.map(scale => (
                    <button
                      key={scale}
                      onClick={() => setSelectedScale(scale)}
                      className={`px-3 py-1 text-[10px] border transition-all ${
                        selectedScale === scale 
                        ? 'bg-rose-600 text-white border-rose-600' 
                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Price Range</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-rose-600"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-2 font-mono">
                  <span>£0</span>
                  <span>£{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-zinc-500 font-mono">
              Displaying <span className="text-white">{filteredProducts.length}</span> relics
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>Sort: Featured</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onClick={() => onProductClick(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-zinc-950 border border-zinc-900">
              <p className="text-zinc-500 text-sm italic">No treasures matched your filters in this forge cycle.</p>
              <button 
                onClick={() => {
                  setSelectedSeries(AnimeSeries.ALL);
                  setSelectedScale('All Scales');
                  setPriceRange([0, 500]);
                }}
                className="mt-4 text-rose-500 text-[10px] font-bold uppercase tracking-widest hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopAll;
