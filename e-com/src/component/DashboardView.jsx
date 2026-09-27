import React from 'react';
import { Package, ShoppingBag, Bitcoin } from 'lucide-react';

export default function DashboardView() {
  const recentOrders = [
    { id: 1, date: '2025-09-15', customer: 'Somchai J.', items: 3, total: '฿1,260', status: 'Completed', statusBg: 'bg-green-100 text-green-700' },
    { id: 2, date: '2025-09-14', customer: 'Nattaya K.', items: 1, total: '฿520', status: 'Processing', statusBg: 'bg-blue-100 text-blue-700' },
    { id: 3, date: '2025-09-13', customer: 'Kritsada P.', items: 2, total: '฿980', status: 'Shipped', statusBg: 'bg-purple-100 text-purple-700' },
    { id: 4, date: '2025-09-12', customer: 'Piyaporn S.', items: 1, total: '฿450', status: 'Completed', statusBg: 'bg-green-100 text-green-700' },
    { id: 5, date: '2025-09-11', customer: 'Thanawat C.', items: 4, total: '฿1,800', status: 'Pending', statusBg: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Total Products</p>
            <h2 className="text-2xl font-bold text-blue-600">24</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Orders</p>
            <h2 className="text-2xl font-bold text-emerald-600">128</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
            <Bitcoin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Revenue</p>
            <h2 className="text-2xl font-bold text-purple-700">฿48,500</h2>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-base font-semibold text-gray-900">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-medium">
                <th className="pb-3">#</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Items</th>
                <th className="pb-3">Total</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50">
                  <td className="py-3.5 font-medium text-gray-400">{order.id}</td>
                  <td className="py-3.5">{order.date}</td>
                  <td className="py-3.5 font-medium text-gray-800">{order.customer}</td>
                  <td className="py-3.5">{order.items}</td>
                  <td className="py-3.5 font-medium text-gray-800">{order.total}</td>
                  <td className="py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${order.statusBg}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}