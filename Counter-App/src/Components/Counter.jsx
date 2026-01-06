import { useState } from 'react';

export default function Counter() {
  // Declare a state variable called 'count' with initial value 0
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Counter App
        </h1>
        
        {/* Display the current count */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl p-8 mb-6">
          <p className="text-center text-white text-6xl font-bold">
            {count}
          </p>
        </div>

        {/* Control buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={decrement}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            - Decrease
          </button>
          <button
            onClick={increment}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            + Increase
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Reset to 0
        </button>

        {/* Status message */}
        <div className="mt-6 text-center">
          {count > 0 && (
            <p className="text-green-600 font-semibold">
              Count is positive! 🎉
            </p>
          )}
          {count < 0 && (
            <p className="text-red-600 font-semibold">
              Count is negative! ⚠️
            </p>
          )}
          {count === 0 && (
            <p className="text-gray-600 font-semibold">
              Count is at zero
            </p>
          )}
        </div>
      </div>
    </div>
  );
}