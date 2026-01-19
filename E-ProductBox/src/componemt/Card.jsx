function Cart({ cart, increase, decrease, total }) {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded items-center shadow mt-6">
      <h2 className="font-bold text-lg mb-3">Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name}</span>

          <div className="flex gap-2 items-center">
            <button onClick={() => decrease(item.id)} className="px-2 bg-gray-300">-</button>
            <span>{item.qty}</span>
            <button onClick={() => increase(item.id)} className="px-2 bg-gray-300">+</button>
          </div>

          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <div className="text-right font-bold mt-3 text-green-600">
        Total: ₹{total}
      </div>
    </div>
  );
}

export default Cart;
