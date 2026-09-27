import React from 'react';
import { Mail, CreditCard, Edit3, ShoppingBag, Bitcoin, Bookmark, Star, User } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
            <User className="w-12 h-12" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Alex Student</h2>
          
          <div className="mt-4 space-y-2 text-xs text-gray-500 w-full">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>alex@email.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Student ID: 6501234567</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors">
            <Edit3 className="w-3.5 h-3.5" />
            Edit Profile
          </button>
        </div>

        {/* Account Summary */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Account Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-500 font-medium">Total Orders</p>
              <h3 className="text-xl font-bold text-gray-900">128</h3>
            </div>

            <div className="bg-purple-50/50 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <Bitcoin className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-500 font-medium">Total Spent</p>
              <h3 className="text-xl font-bold text-purple-800">฿48,500</h3>
            </div>

            <div className="bg-emerald-50/50 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                <Bookmark className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-500 font-medium">Wishlist Items</p>
              <h3 className="text-xl font-bold text-gray-900">6</h3>
            </div>

            <div className="bg-amber-50/50 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                <Star className="w-4 h-4" />
              </div>
              <p className="text-xs text-gray-500 font-medium">Loyalty Points</p>
              <h3 className="text-xl font-bold text-gray-900">320</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}