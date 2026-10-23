import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-6">
      <div className="relative inline-block">
        <span className="text-8xl font-black text-slate-200">404</span>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-red-500">
          Page Not Found
        </span>
      </div>
      <p className="text-gray-500 text-sm max-w-xs mx-auto">
        ขออภัย ไม่พบหน้าที่คุณต้องการ หน้าที่คุณกำลังตามหาอาจถูกลบหรือเปลี่ยน URL
      </p>
      <div>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
        >
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </div>
  );
}