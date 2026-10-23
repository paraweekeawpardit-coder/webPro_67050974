import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../models/productModel';

export default function Products() {
  const products = getProducts();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">สินค้าทั้งหมด</h1>
        <p className="text-gray-500 text-sm mt-1">เลือกซื้อสินค้าไอทีและอุปกรณ์ไอทีคุณภาพสูง</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="p-5 space-y-3">
              <div className="w-full h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl text-slate-400 group-hover:scale-105 transition-transform duration-300">
                🛍️
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h2>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="p-5 pt-0 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xl font-black text-emerald-600">
                  ฿{product.price.toLocaleString()}
                </span>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="block text-center w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl hover:bg-blue-700 active:scale-98 transition-all duration-200 shadow-md shadow-blue-500/10"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}