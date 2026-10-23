import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-100 shadow-lg p-8 space-y-6">
      <div className="flex flex-col items-center space-y-3 text-center border-b border-gray-100 pb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          JD
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
          <p className="text-xs text-gray-400">สมาชิกตั้งแต่ปี 2026</p>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
          <span className="text-gray-500">อีเมล</span>
          <span className="font-semibold text-gray-800">john.doe@example.com</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50">
          <span className="text-gray-500">สถานะผู้ใช้</span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">
            Customer
          </span>
        </div>
      </div>
    </div>
  );
}