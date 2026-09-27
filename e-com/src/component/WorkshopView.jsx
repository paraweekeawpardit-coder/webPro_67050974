import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';

export default function WorkshopView({ onAddToCartMultiple }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">React Workshop</h1>
        <p className="text-xs text-gray-500 mt-1">
          ลองใช้งาน React กับ Tailwind CSS <br />
          เพิ่มจำนวนสินค้าในตะกร้า และดูจำนวนสินค้าที่เลือกได้ที่ไอคอนตะกร้า
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center text-6xl">
            👟
          </div>

          <div className="flex flex-col justify-between py-2">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900">Sport Shoes</h2>
              <p className="text-2xl font-bold text-gray-900">฿1,590</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-medium text-gray-700">4.6</span>
                <span>(15)</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Quantity Counter */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDecrease}
                  className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-gray-800">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCartMultiple(quantity)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}