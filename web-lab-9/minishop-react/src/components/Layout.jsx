import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="grow max-w-6xl w-full mx-auto px-4 pb-12">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200/60 py-6 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 MiniShop. All rights reserved.</p>
          <p className="text-gray-400">React & Tailwind CSS v4 Architecture</p>
        </div>
      </footer>
    </div>
  );
}