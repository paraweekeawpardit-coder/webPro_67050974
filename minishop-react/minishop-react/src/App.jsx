import { useState, useEffect } from 'react'
import Header from '../src/component/header'
import ProductList from '../src/component/ProducList'
import Profile from '../src/component/Profile'
import ProductDetailModal from '../src/component/ProductDetailModel'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cartCount, setCartCount] = useState(0) // Requirement 3 & Challenge 4
  const [search, setSearch] = useState('') // Requirement 3 & Requirement 5
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')
  
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // ดึงข้อมูลจาก REST API จริง (DummyJSON API)
  useEffect(() => {
    setLoading(true)
    setError('')
    
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('ไม่สามารถเชื่อมต่อ API ได้')
        return res.json()
      })
      .then((data) => {
        // แปลงฟิลด์ข้อมูลให้ตรงกับโครงสร้าง Component ของเรา
        const formattedProducts = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          image: item.thumbnail,
          description: item.description,
          rating: { rate: item.rating, count: item.stock }
        }))
        setProducts(formattedProducts)
        setLoading(false)
      })
      .catch((err) => {
        console.error('API Error:', err)
        setError('ไม่สามารถโหลดข้อมูลได้') // Requirement 8
        setLoading(false)
      })
  }, [])

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  // รายการหมวดหมู่ทั้งหมดจาก API
  const categories = ['All', ...new Set(products.map((p) => p.category))]

  // ระบบค้นหาและตัวกรอง (Requirement 5 & Challenge 1, 2)
  const filteredProducts = products
    .filter((product) => {
      const title = product.title || ''
      const matchesSearch = title.toLowerCase().includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || 
        product.category.toLowerCase() === selectedCategory.toLowerCase()

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortOrder === 'low-to-high') return a.price - b.price
      if (sortOrder === 'high-to-low') return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header 
        cartCount={cartCount} 
        onOpenProfile={() => setIsProfileOpen(true)} 
      />

      <main className="max-w-7xl mx-auto p-6 flex-grow w-full">
        {/* ค้นหา / หมวดหมู่ / เรียงลำดับ */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Search Products</label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full md:w-48">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:w-48">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Sort Price</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price: Low → High</option>
                <option value="high-to-low">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 1. Loading State */}
        {loading && (
          <div className="p-20 text-center">
            <div className="animate-spin inline-block w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Loading products...</p>
          </div>
        )}

        {/* 2. Error State */}
        {error && !loading && (
          <div className="p-10 text-center text-red-600 bg-red-50 rounded-xl border border-red-200">
            <p className="text-xl font-bold">⚠️ {error}</p>
          </div>
        )}

        {/* 3. Empty State */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="p-16 text-center bg-white rounded-xl shadow-sm">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-xl font-semibold text-gray-700">ไม่พบสินค้าที่ค้นหา</p>
            <p className="text-gray-500 text-sm mt-1">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่เป็น All</p>
          </div>
        )}

        {/* Display Products */}
        {!loading && !error && filteredProducts.length > 0 && (
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onViewDetail={(product) => setSelectedProduct(product)}
          />
        )}
      </main>

      <Profile 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
      
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default App