import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      
      {/* Navbar */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            🛍️ MyStore
          </h1>

          <div className="relative">
            <span className="text-lg font-semibold">🛒</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>
      </header>

      {/* Cart Summary */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <p className="font-semibold">
            Total Items: {cart.length}
          </p>
          <p className="font-bold text-indigo-600">
            Total: ₹{total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="bg-gray-50 p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-44 mx-auto object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col">
                <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-lg font-bold text-gray-800 mb-1">
                  ₹{product.price}
                </p>

                <p className="text-xs text-gray-500 mb-4 capitalize">
                  {product.category}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-indigo-600 text-white py-2 rounded-lg 
                             hover:bg-indigo-700 active:scale-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="text-center text-sm">
          © 2026 Surya MyStore | Built with React & Tailwind
        </div>
      </footer>

    </div>
  );
}

export default App;
