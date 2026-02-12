
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Maximize2, Minimize2 } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';
import { AnimeSeries } from '../types';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface ConciergeProps {
  currentCategory: AnimeSeries;
}

const Concierge: React.FC<ConciergeProps> = ({ currentCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'I am the Forge Keeper. Speak, traveler. What treasures are you seeking from the flames today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getConciergeResponse(userMsg, currentCategory);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-110 transition-all z-40 group"
      >
        <Bot className="w-8 h-8 text-white group-hover:animate-bounce" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col bg-zinc-950 border border-rose-900/40 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'h-14 w-64' : 'h-[500px] w-[350px] sm:w-[400px]'
    }`}>
      {/* Header */}
      <div className="bg-rose-900/20 px-4 py-3 border-b border-rose-900/40 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-rose-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-100">The Forge Keeper</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-zinc-500 hover:text-white transition-colors">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-rose-600 text-white rounded-l-lg rounded-tr-lg' 
                    : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-r-lg rounded-tl-lg'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-rose-900/20">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about a series or figurine..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-none px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-600 pr-10"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-500 hover:text-rose-400 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-zinc-500 italic text-center">
              AI Powered Concierge • Manga Forge UK
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Concierge;
