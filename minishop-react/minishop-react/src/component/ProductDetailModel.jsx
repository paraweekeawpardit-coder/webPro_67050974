function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>
        <div className="h-56 flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4">
          <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
        </div>
        <span className="text-xs font-semibold uppercase px-2.5 py-0.5 rounded bg-blue-50 text-blue-600">
          {product.category}
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h2>
        {product.rating && (
          <p className="text-sm text-yellow-500 mt-1">
            ⭐ {product.rating.rate} / 5.0 <span className="text-gray-400">({product.rating.count} reviews)</span>
          </p>
        )}
        <p className="text-2xl font-bold text-blue-600 mt-3">${product.price.toLocaleString()}</p>
        
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              onAddToCart()
              onClose()
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium cursor-pointer"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={onClose}
            className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal