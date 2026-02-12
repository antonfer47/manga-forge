
import React from 'react';
import { X, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-zinc-950 shadow-2xl z-[70] flex flex-col border-l border-rose-900/30">
        <div className="p-6 border-b border-rose-900/20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-rose-600" />
            <h2 className="text-xl font-display uppercase tracking-widest">Your Armory</h2>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <ShoppingBag className="w-16 h-16 mb-4 text-zinc-700" />
              <p className="text-sm">The forge is empty. Find some treasure.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 group">
                <div className="w-20 h-28 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover border border-zinc-800" />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-sm font-semibold text-zinc-100 line-clamp-1">{item.name}</h3>
                  <span className="text-[10px] text-rose-500 font-bold uppercase mb-2">{item.series}</span>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-zinc-800">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="px-2 py-1 text-zinc-400 hover:text-rose-500"
                      >-</button>
                      <span className="px-3 py-1 text-xs text-zinc-100 border-x border-zinc-800">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="px-2 py-1 text-zinc-400 hover:text-rose-500"
                      >+</button>
                    </div>
                    <span className="text-lg font-display text-white">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-zinc-700 hover:text-rose-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-rose-900/20 bg-zinc-900/40">
            <div className="flex justify-between mb-4">
              <span className="text-zinc-400 text-sm">Subtotal</span>
              <span className="text-xl font-display text-white">£{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-zinc-500 mb-6 text-center italic uppercase tracking-wider">
              Free Shipping Across the United Kingdom
            </p>
            <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-none flex items-center justify-center space-x-2 transition-all group">
              <CreditCard className="w-5 h-5" />
              <span>STRIKE THE DEAL (CHECKOUT)</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
