import './style.css';

const state = {
  activeTab: 'dashboard',
  cartCount: 2,
  workshopQty: 1
};


function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <!-- Header -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2 cursor-pointer" id="btn-logo">
            <span class="text-2xl font-extrabold text-blue-600 tracking-tight">MiniShop</span>
          </div>
          <div class="flex items-center gap-5 text-slate-600">
            <button class="p-2 hover:bg-slate-100 rounded-full transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
            <div class="relative cursor-pointer" id="btn-cart">
              <div class="p-2 hover:bg-slate-100 rounded-full transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
              </div>
              <span class="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">${state.cartCount}</span>
            </div>
            <button class="p-1 hover:bg-slate-100 rounded-full transition border border-slate-200">
              <div class="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Layout -->
      <div class="max-w-7xl mx-auto w-full px-6 py-6 flex-1 flex gap-8">
        <!-- Sidebar -->
        <aside class="w-56 shrink-0">
          <nav class="space-y-1">
            <button id="nav-dashboard" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${state.activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              Dashboard
            </button>
            <button id="nav-products" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${state.activeTab === 'products' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              Products
            </button>
            <button id="nav-profile" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${state.activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              Profile
            </button>
            <button id="nav-workshop" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition mt-4 ${state.activeTab === 'workshop' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              React Workshop
            </button>
          </nav>
        </aside>

        <!-- Dynamic Content Area -->
        <main class="flex-1">
          ${renderContent()}
        </main>
      </div>
    </div>
  `;

  bindEvents();
}

function renderContent() {
  switch (state.activeTab) {
    case 'dashboard':
      return renderDashboardScreen();
    case 'products':
      return renderProductsScreen(); 
    case 'profile':
      return renderProfileScreen();
    case 'workshop':
      return renderWorkshopScreen(); 
    default:
      return renderDashboardScreen();
  }
}

// Screen 1: Dashboard
function renderDashboardScreen() {
  return `
    <div>
      <h1 class="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>
      
      <!-- Stat Cards -->
      <div class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Products</p>
            <h3 class="text-2xl font-extrabold text-blue-600 mt-1">24</h3>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
          </div>
          <div>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Orders</p>
            <h3 class="text-2xl font-extrabold text-emerald-600 mt-1">128</h3>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
            <span class="font-bold text-lg">฿</span>
          </div>
          <div>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Revenue</p>
            <h3 class="text-2xl font-extrabold text-purple-600 mt-1">฿48,500</h3>
          </div>
        </div>
      </div>

      <!-- Recent Orders Table -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h2 class="text-lg font-bold text-slate-800 mb-4">Recent Orders</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-semibold">
                <th class="py-3 px-2">#</th>
                <th class="py-3 px-2">Date</th>
                <th class="py-3 px-2">Customer</th>
                <th class="py-3 px-2">Items</th>
                <th class="py-3 px-2">Total</th>
                <th class="py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50 text-slate-600">
              <tr>
                <td class="py-3 px-2">1</td>
                <td class="py-3 px-2">2025-09-15</td>
                <td class="py-3 px-2 font-medium text-slate-800">Somchai J.</td>
                <td class="py-3 px-2">3</td>
                <td class="py-3 px-2 font-medium">฿1,260</td>
                <td class="py-3 px-2"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">Completed</span></td>
              </tr>
              <tr>
                <td class="py-3 px-2">2</td>
                <td class="py-3 px-2">2025-09-14</td>
                <td class="py-3 px-2 font-medium text-slate-800">Nattaya K.</td>
                <td class="py-3 px-2">1</td>
                <td class="py-3 px-2 font-medium">฿520</td>
                <td class="py-3 px-2"><span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">Processing</span></td>
              </tr>
              <tr>
                <td class="py-3 px-2">3</td>
                <td class="py-3 px-2">2025-09-13</td>
                <td class="py-3 px-2 font-medium text-slate-800">Kritsada P.</td>
                <td class="py-3 px-2">2</td>
                <td class="py-3 px-2 font-medium">฿980</td>
                <td class="py-3 px-2"><span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Shipped</span></td>
              </tr>
              <tr>
                <td class="py-3 px-2">4</td>
                <td class="py-3 px-2">2025-09-12</td>
                <td class="py-3 px-2 font-medium text-slate-800">Piyaporn S.</td>
                <td class="py-3 px-2">1</td>
                <td class="py-3 px-2 font-medium">฿450</td>
                <td class="py-3 px-2"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">Completed</span></td>
              </tr>
              <tr>
                <td class="py-3 px-2">5</td>
                <td class="py-3 px-2">2025-09-11</td>
                <td class="py-3 px-2 font-medium text-slate-800">Thanawat C.</td>
                <td class="py-3 px-2">4</td>
                <td class="py-3 px-2 font-medium">฿1,800</td>
                <td class="py-3 px-2"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Screen 2: Products
function renderProductsScreen() {
  const products = [
    { title: 'Laptop', price: '฿12,900', rating: '4.3', reviews: 24, icon: '💻' },
    { title: 'Headphones', price: '฿1,290', rating: '4.3', reviews: 18, icon: '🎧' },
    { title: 'Backpack', price: '฿890', rating: '4.7', reviews: 32, icon: '🎒' },
    { title: 'Smart Watch', price: '฿2,990', rating: '4.4', reviews: 20, icon: '⌚' },
  ];

  return `
    <div>
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-slate-800">Products</h1>
        <div class="flex items-center gap-3">
          <div class="relative">
            <input type="text" placeholder="Search products..." class="pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <select class="px-4 py-2 border border-slate-200 rounded-xl text-sm bg-white text-slate-600 focus:outline-none">
            <option>All Categories</option>
          </select>
        </div>
      </div>

      <!-- Product Cards Grid -->[cite: 3]
      <div class="grid grid-cols-4 gap-6">
        ${products.map(p => `
          <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between">
            <div>
              <div class="bg-slate-100 rounded-xl h-40 flex items-center justify-center text-5xl mb-4">
                ${p.icon}
              </div>
              <h3 class="font-bold text-slate-800">${p.title}</h3>
              <p class="text-blue-600 font-extrabold text-lg mt-1">${p.price}</p>
              <div class="flex items-center gap-1 text-xs text-slate-500 mt-2">
                <span class="text-amber-400">★</span>
                <span class="font-semibold text-slate-700">${p.rating}</span>
                <span>(${p.reviews})</span>
              </div>
            </div>
            <button class="btn-add-cart w-full bg-blue-600 text-white font-semibold py-2 rounded-xl text-sm mt-4 hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Screen 3: Profile 
function renderProfileScreen() {
  return `
    <div>
      <h1 class="text-2xl font-bold text-slate-800 mb-6">Profile</h1>

      <div class="grid grid-cols-12 gap-8">
        <!-- User Information Card -->
        <div class="col-span-5 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center text-center">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
          </div>
          <h2 class="text-xl font-bold text-slate-800">Alex Student</h2>
          
          <div class="mt-4 space-y-2 text-sm text-slate-500">
            <p class="flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              alex@email.com
            </p>
            <p class="flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"/></svg>
              Student ID: 6501234567
            </p>
          </div>

          <button class="w-full mt-6 bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            Edit Profile
          </button>
        </div>

        <!-- Account Summary -->
        <div class="col-span-7">
          <h2 class="text-lg font-bold text-slate-800 mb-4">Account Summary</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-sky-50/50 p-5 rounded-2xl border border-sky-100">
              <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
              </div>
              <p class="text-xs font-semibold text-slate-500">Total Orders</p>
              <h3 class="text-2xl font-extrabold text-slate-800 mt-1">128</h3>
            </div>

            <div class="bg-purple-50/50 p-5 rounded-2xl border border-purple-100">
              <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-3 font-bold">
                ฿
              </div>
              <p class="text-xs font-semibold text-slate-500">Total Spent</p>
              <h3 class="text-2xl font-extrabold text-slate-800 mt-1">฿48,500</h3>
            </div>

            <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
              <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <p class="text-xs font-semibold text-slate-500">Wishlist Items</p>
              <h3 class="text-2xl font-extrabold text-slate-800 mt-1">6</h3>
            </div>

            <div class="bg-amber-50/50 p-5 rounded-2xl border border-amber-100">
              <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <p class="text-xs font-semibold text-slate-500">Loyalty Points</p>
              <h3 class="text-2xl font-extrabold text-slate-800 mt-1">320</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Screen 4: React Workshop
function renderWorkshopScreen() {
  return `
    <div>
      <div class="flex items-center justify-between mb-2">
        <h1 class="text-2xl font-bold text-slate-800">React Workshop</h1>
        <div class="relative">
          <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
          </div>
          <span class="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">${state.cartCount}</span>
        </div>
      </div>
      <p class="text-slate-500 text-sm mb-6">ลองใช้งาน React กับ Tailwind CSS<br>เพิ่มจำนวนสินค้าในตะกร้า และดูจำนวนสินค้าที่เลือกได้ที่ไอคอนตะกร้า</p>

      <!-- Product Interactive Card -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 max-w-2xl flex gap-8 items-center">
        <div class="w-1/2 bg-slate-100 rounded-2xl h-64 flex items-center justify-center text-7xl">
          👟
        </div>
        <div class="w-1/2">
          <h2 class="text-xl font-bold text-slate-800">Sport Shoes</h2>
          <p class="text-2xl font-extrabold text-slate-900 mt-2">฿1,590</p>
          <div class="flex items-center gap-1 text-sm text-slate-500 mt-2">
            <span class="text-amber-400">★</span>
            <span class="font-semibold text-slate-700">4.6</span>
            <span>(15)</span>
          </div>

          <!-- Quantity Selector -->
          <div class="flex items-center gap-3 mt-6">
            <button id="btn-dec" class="w-10 h-10 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition">-</button>
            <span class="w-12 text-center font-bold text-slate-800 text-lg">${state.workshopQty}</span>
            <button id="btn-inc" class="w-10 h-10 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition">+</button>
          </div>

          <!-- Add to Cart Button -->
          <button id="btn-add-workshop" class="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// ผูก Event Listeners สำหรับเปลี่ยนหน้าและการทำงาน Interactive
function bindEvents() {
  document.querySelector('#btn-logo')?.addEventListener('click', () => {
    state.activeTab = 'dashboard';
    render();
  });

  document.querySelector('#nav-dashboard')?.addEventListener('click', () => {
    state.activeTab = 'dashboard';
    render();
  });

  document.querySelector('#nav-products')?.addEventListener('click', () => {
    state.activeTab = 'products';
    render();
  });

  document.querySelector('#nav-profile')?.addEventListener('click', () => {
    state.activeTab = 'profile';
    render();
  });

  document.querySelector('#nav-workshop')?.addEventListener('click', () => {
    state.activeTab = 'workshop';
    render();
  });

  // Event เพิ่ม/ลด จำนวนสินค้าใน Screen 4
  document.querySelector('#btn-inc')?.addEventListener('click', () => {
    state.workshopQty++;
    render();
  });

  document.querySelector('#btn-dec')?.addEventListener('click', () => {
    if (state.workshopQty > 1) {
      state.workshopQty--;
      render();
    }
  });

  document.querySelector('#btn-add-workshop')?.addEventListener('click', () => {
    state.cartCount += state.workshopQty;
    render();
  });


  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      state.cartCount++;
      render();
    });
  });
}

render();