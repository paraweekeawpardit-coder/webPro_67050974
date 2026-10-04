import ProductCard from '../component/ProductCard'

function ProductList({ products, onAddToCart, onViewDetail }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.title || product.name}
          price={product.price}
          image={product.image || product.icon}
          category={product.category}
          rating={product.rating}
          onAddToCart={onAddToCart}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  )
}

export default ProductList