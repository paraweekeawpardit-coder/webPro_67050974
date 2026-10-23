import React from 'react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg p-8 space-y-6">
      <div className="text-center space-y-2 border-b border-gray-100 pb-6">
        <span className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
          ℹ️
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900">เกี่ยวกับ MiniShop</h1>
        <p className="text-sm text-gray-500">ร้านค้าออนไลน์จำลองเพื่อการศึกษา</p>
      </div>

      <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
        <p>
          MiniShop เป็นโปรเจกต์เว็บแอปพลิเคชันที่สร้างด้วย React, React Router v6 และ Tailwind CSS v4 
          ถูกออกแบบมาเพื่อศึกษาโครงสร้างแบบ Multi-Page Application และการจัดสรร Component Architecture ให้เป็นระเบียบ
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-100">
          <h2 className="font-bold text-gray-900 text-base">วัตถุประสงค์ของการเรียนรู้</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> การสร้างระบบ Routing ด้วย React Router v6
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> แนวคิด MVC Thinking (Model, View, Controller)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> การส่งและดึงข้อมูลระหว่างหน้าด้วย Params และ Navigation Hooks
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}