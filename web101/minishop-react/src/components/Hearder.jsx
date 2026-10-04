function Header({ cartCount, onOpenProfile }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          🛍️ MiniShop
        </h1>
        
        <div className="flex items-center gap-6">

          <span className="text-gray-600 font-medium">
            Products
          </span>


          <button 
            onClick={onOpenProfile}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer flex items-center gap-1"
          >
            👤 Profile
          </button>

          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
            🛒 Cart: <span className="text-blue-900 font-bold">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
