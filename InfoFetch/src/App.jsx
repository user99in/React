import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-600">
        Loading products...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
       Products
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="font-semibold text-lg leading-tight line-clamp-1">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {product.category}
              </p>

              <div className="flex items-center justify-between mt-3">
                <span className="text-xl font-bold text-green-600">
                  ₹{(product.price).toLocaleString()}
                </span>

                 
              </div>

              <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>
              <p className="text-blod text-red-500">Rating : <span className="text-yellow-800 font-extrablod "> {product.rating.rate}</span>
</p>

              <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 active:scale-95 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
