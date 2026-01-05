import React from "react";
import Heading from "../component/Heading";
import Button from "../component/Button";
import bg from "../assets/27.png";

function Collaborate() {
  return (
    <>
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#6b1d1d]/80"></div>

        <div className="relative z-10 max-w-xl sm:max-w-2xl md:max-w-3xl flex flex-col items-center">
          <Heading
            Headings="Let's Collaborate"
            className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:py-6"
          />

          <p className="text-white text-sm sm:text-base mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorum hic rem voluptas{" "}
            <br className="hidden md:block" />
            eaque qui aliquam, voluptate voluptatem.
          </p>

          <Button
            className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md"
            value="Contact Me"
          />
        </div>
      </section>
    </>
  );
}

export default Collaborate;
