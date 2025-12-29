import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default ClickCounter;


 