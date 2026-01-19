import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
