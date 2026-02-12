
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/anime-bg/1920/1080" 
          alt="Featured Anime" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/50 text-rose-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            New Arrival: Sun God Nika
          </div>
          <h2 className="text-6xl md:text-8xl font-display leading-[0.9] mb-6 drop-shadow-2xl">
            FORGED IN <br />
            <span className="text-rose-600">SPIRIT</span>
          </h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-lg leading-relaxed font-light">
            Premium figurines and exclusive manga merchandise. Sourced directly, shipped from the UK. Your collection deserves the absolute best.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-none flex items-center justify-center transition-all group">
              EXPLORE ARMORY
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-700 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-none transition-all">
              VIEW EXCLUSIVES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
