import React from 'react';
import { Search, Star } from 'lucide-react';

export default function ProductsView({ onAddToCart }) {
  const products = [
    { id: 1, name: 'Laptop', price: '฿12,900', rating: 4.3, reviews: 24, image: '💻' },
    { id: 2, name: 'Headphones', price: '฿1,290', rating: 4.3, reviews: 18, image: '🎧' },
    { id: 3, name: 'Backpack', price: '฿890', rating: 4.7, reviews: 32, image: '🎒' },
    { id: 4, name: 'Smart Watch', price: '฿2,990', rating: 4.4, reviews: 20, image: '⌚' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Products</h1>

      {/* Filter and Search Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
        <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>All Categories</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="bg-slate-50 h-40 rounded-xl flex items-center justify-center text-5xl mb-4">
                {product.image}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
              <p className="text-base font-bold text-gray-900 mt-1">{product.price}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-medium text-gray-700">{product.rating}</span>
                <span>({product.reviews})</span>
              </div>
            </div>
            <button
              onClick={onAddToCart}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl text-xs transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}