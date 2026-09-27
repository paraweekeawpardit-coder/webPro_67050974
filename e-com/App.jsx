import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ProductsView from './components/ProductsView';
import ProfileView from './components/ProfileView';
import WorkshopView from './components/WorkshopView';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [cartCount, setCartCount] = useState(2);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleAddToCartMultiple = (amount) => {
    setCartCount((prev) => prev + amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      <Header cartCount={cartCount} />

      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 p-8">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'products' && (
            <ProductsView onAddToCart={handleAddToCart} />
          )}
          {activeTab === 'profile' && <ProfileView />}
          {activeTab === 'workshop' && (
            <WorkshopView onAddToCartMultiple={handleAddToCartMultiple} />
          )}
        </main>
      </div>
    </div>
  );
}