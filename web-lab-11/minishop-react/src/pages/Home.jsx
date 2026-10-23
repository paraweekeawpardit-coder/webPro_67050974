import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../models/productModel';

export default function Home() {
  const featuredProducts = getProducts().slice(0, 2);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 sm:p-12 shadow-xl shadow-blue-500/10">
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white tracking-wide uppercase">
            New Arrival
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
            ยินดีต้อนรับสู่ MiniShop
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            สัมผัสประสบการณ์การช้อปสินค้าคุณภาพ คัดสรรมาเพื่อคุณโดยเฉพาะ พร้อมโปรโมชันสุดพิเศษ
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>ช้อปเลยตอนนี้</span>
              <span>→</span>
            </Link>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </section>

      {/* Featured Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">สินค้าแนะนำ</h2>
            <p className="text-sm text-gray-500">สินค้ายอดนิยมที่ขายดีที่สุดในสัปดาห์นี้</p>
          </div>
          <Link to="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            ดูทั้งหมด →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  📦
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
              </div>

              <div className="pt-6 border-t border-gray-50 mt-6 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-400 block">ราคา</span>
                  <span className="text-2xl font-black text-emerald-600">
                    ฿{product.price.toLocaleString()}
                  </span>
                </div>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-gray-900 text-white px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-blue-600 transition-colors duration-200"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}