import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-xs mb-8">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-extrabold text-gray-900 tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg">
            M
          </span>
          <span>MiniShop</span>
        </NavLink>
        
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/products" className={linkStyle}>Products</NavLink>
          <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
          <NavLink to="/admin/products" className={linkStyle}> Manage</NavLink>
        </nav>
      </div>
    </header>
  );
}