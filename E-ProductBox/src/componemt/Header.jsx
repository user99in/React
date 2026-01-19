function Header({ cartCount }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ShopWithSurya</h1>
      <p> {cartCount} items</p>
    </div>
  );
}

export default Header;
