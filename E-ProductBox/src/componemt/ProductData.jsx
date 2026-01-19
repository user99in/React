import { useState } from "react";
import Header from "../componemt/Header";
import Category from "../componemt/Category";
import ProductList from "../componemt/ProductList";
import Cart from "./Card";

import img1 from "../assets/Laptop.jpg";
import img11 from "../assets/Laptop1.jpg";
import img111 from "../assets/Laptop111.jpg";
import img114 from "../assets/Laptop4.jpg";
import img2 from "../assets/mobile.jpg";
import img22 from "../assets/mobile1.jpg";
import img222 from "../assets/mobile3.jpg";
import img223 from "../assets/mobile4.jpg"
import img3 from "../assets/headPhone.jpg";
import img33 from "../assets/headPhone1.jpg";
import img4 from "../assets/smartWatch.jpg";
import img44 from "../assets/smartWatch1.jpg";

function ProductData() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 50000,
      description: "High performance",
      category: "Laptop",
      image: img1,
    },
    {
      id: 2,
      name: "Office Laptop",
      price: 42000,
      description: "For office work",
      category: "Laptop",
      image: img11,
    },
    {
      id: 3,
      name: "Smart Phone",
      price: 20000,
      description: "Great camera",
      category: "Mobile",
      image: img2,
    },
    {
      id: 4,
      name: "Android Phone",
      price: 18000,
      description: "Fast and smooth",
      category: "Mobile",
      image: img22,
    },
    {
      id: 5,
      name: "Wireless Headphone",
      price: 2000,
      description: "Noise cancel",
      category: "Headphone",
      image: img3,
    },
    {
      id: 6,
      name: "Gaming Headphone",
      price: 2500,
      description: "Best for gaming",
      category: "Headphone",
      image: img33,
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 3000,
      description: "Fitness & alerts",
      category: "Watch",
      image: img4,
    },
    {
      id: 8,
      name: "Sport Watch",
      price: 3500,
      description: "For sports",
      category: "Watch",
      image: img44,
    },
    {
      id: 9,
      name: "Gaming Laptop",
      price: 50000,
      description: "High performance",
      category: "Laptop",
      image: img111,
    },
    {
      id: 10,
      name: "Office Laptop",
      price: 42000,
      description: "For office work",
      category: "Laptop",
      image: img114,
    },
    {
      id: 11,
      name: "Smart Phone",
      price: 20000,
      description: "Great camera",
      category: "Mobile",
      image: img222,
    },
    {
      id: 12,
      name: "Android Phone",
      price: 18000,
      description: "Fast and smooth",
      category: "Mobile",
      image: img223,
    },
    {
      id: 13,
      name: "Wireless Headphone",
      price: 2000,
      description: "Noise cancel",
      category: "Headphone",
      image: img3,
    },
    {
      id: 14,
      name: "Gaming Headphone",
      price: 2500,
      description: "Best for gaming",
      category: "Headphone",
      image: img33,
    },
    {
      id: 15,
      name: "Smart Watch",
      price: 3000,
      description: "Fitness & alerts",
      category: "Watch",
      image: img4,
    },
    {
      id: 16,
      name: "Sport Watch",
      price: 3500,
      description: "For sports",
      category: "Watch",
      image: img44,
    },
  ];

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");

  const addToCart = (product) => {
    const exist = cart.find((i) => i.id === product.id);
    if (exist) {
      setCart(
        cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let filteredProducts = [];
  if (filter === "") {
    const cats = ["Laptop", "Mobile", "Watch", "Headphone"];
    filteredProducts = cats.map((c) => products.find((p) => p.category === c));
  } else {
    filteredProducts = products.filter((p) => p.category === filter);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cart.reduce((s, i) => s + i.qty, 0)} />

      <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        <Category setFilter={setFilter} />
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>

      {cart.length > 0 && (
        <Cart
          cart={cart}
          increase={increase}
          decrease={decrease}
          total={total}
        />
      )}
    </div>
  );
}

export default ProductData;
