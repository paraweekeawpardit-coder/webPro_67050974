function ProductCard({ id, name, price, image, category, rating, onAddToCart, onViewDetail }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between p-5 border border-gray-100">
      <div>
        <div className="h-48 flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4">
          <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
        <span className="text-xs font-semibold uppercase px-2.5 py-0.5 rounded bg-blue-50 text-blue-600">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-800 line-clamp-1" title={name}>
          {name}
        </h3>
        {rating && (
          <p className="text-sm text-yellow-500 mt-1">
            ⭐ {rating.rate} <span className="text-gray-400">({rating.count})</span>
          </p>
        )}
        <p className="mt-2 text-xl font-bold text-blue-600">
          ${price.toLocaleString()}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => onViewDetail({ id, name, price, image, category, rating })}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition-colors text-sm cursor-pointer"
        >
          🔍 View Detail
        </button>
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors text-sm cursor-pointer"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard