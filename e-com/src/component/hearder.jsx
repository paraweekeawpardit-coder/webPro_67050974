import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function Header({ cartCount }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-blue-600">MiniShop</span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
        
        {/* Cart Icon with Badge */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}