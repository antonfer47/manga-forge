
import React from 'react';
import { ShoppingCart, Menu, Search, Zap } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-rose-900/30 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Menu className="w-6 h-6 md:hidden text-rose-500" />
          <div 
            className="flex items-center space-x-1 group cursor-pointer"
            onClick={() => onNavigate({ type: 'home' })}
          >
            <Zap className="w-8 h-8 text-rose-600 group-hover:animate-pulse" fill="currentColor" />
            <h1 className="text-2xl font-display tracking-tighter text-white">
              MANGA<span className="text-rose-600">FORGE</span>
            </h1>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-zinc-400">
          <button 
            onClick={() => onNavigate({ type: 'shop' })}
            className="hover:text-rose-500 transition-colors uppercase"
          >
            Shop All
          </button>
          <button className="hover:text-rose-500 transition-colors uppercase cursor-not-allowed opacity-50">Pre-Orders</button>
          <button className="hover:text-rose-500 transition-colors uppercase cursor-not-allowed opacity-50">Exclusives</button>
          <button className="hover:text-rose-500 transition-colors uppercase">About the Forge</button>
        </div>

        <div className="flex items-center space-x-5">
          <button className="hidden sm:block text-zinc-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={onCartClick}
            className="relative flex items-center text-zinc-400 hover:text-rose-500 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
