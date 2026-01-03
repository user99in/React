import React from "react";

function Button({className}) {
  return (
    <>
      <button className={`${className} mt-5 bg-pink-500 text-white  py-3 px-12 text-md font-semibold hover:bg-pink-600 transition`}>
        Learn More
      </button>
    </>
  );
}

export default Button;
