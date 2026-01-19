function ProductCard({ item, addToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg">
      <img src={item.image} alt={item.name} className="h-40 w-full object-contain" />
      <h3 className="font-semibold mt-2">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.description}</p>
      <p className="font-bold mt-1">₹{item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
