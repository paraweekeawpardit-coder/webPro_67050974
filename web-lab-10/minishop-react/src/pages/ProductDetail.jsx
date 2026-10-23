import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../models/productModel';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="max-w-md mx-auto text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-4">
        <div className="text-5xl">🔍</div>
        <h2 className="text-2xl font-bold text-gray-900">ไม่พบสินค้า</h2>
        <p className="text-gray-500 text-sm">รหัสสินค้าที่คุณค้นหาไม่มีในระบบ</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-64 bg-slate-100 rounded-2xl flex items-center justify-center text-6xl text-slate-300">
          📱
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Product Detail
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-2">{product.name}</h1>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs text-gray-400 block">ราคาโปรโมชัน</span>
            <span className="text-3xl font-black text-emerald-600">
              ฿{product.price.toLocaleString()}
            </span>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => navigate('/products')}
              className="flex-1 bg-gray-100 text-gray-700 font-semibold px-5 py-3 rounded-xl hover:bg-gray-200 transition active:scale-95"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}