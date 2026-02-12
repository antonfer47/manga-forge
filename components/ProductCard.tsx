
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800/50 hover:border-rose-900/50 transition-all duration-300 flex flex-col overflow-hidden relative">
      <div 
        className="relative aspect-[3/4] overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-tighter ${
            product.rarity === 'Limited Edition' ? 'bg-amber-500 text-black' : 
            product.rarity === 'Rare' ? 'bg-indigo-600 text-white' : 'bg-zinc-700 text-zinc-300'
          }`}>
            {product.rarity}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            View Details <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center text-[10px] text-rose-500 font-bold uppercase tracking-widest mb-1">
          <Star className="w-3 h-3 mr-1 fill-rose-500" />
          {product.series}
        </div>
        <h3 
          className="text-sm font-semibold text-zinc-100 mb-2 line-clamp-2 min-h-[40px] leading-tight cursor-pointer hover:text-rose-500 transition-colors"
          onClick={onClick}
        >
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-display text-white">£{product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-rose-600 hover:bg-rose-700 text-white p-2 transition-colors"
            title="Add to Armory"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
