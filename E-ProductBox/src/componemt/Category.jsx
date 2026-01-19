function Category({ setFilter }) {
  return (
    <div className="bg-white p-4 rounded shadow ">
      <h3 className="font-bold mb-3">Categories</h3>

      <select
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border   rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Home (All)</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Headphone">Headphone</option>
        <option value="Watch">Smart Watch</option>
      </select>
    </div>
  );
}

export default Category;
