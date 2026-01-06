import React from "react";
import Heading from "../component/Heading";
import Image from "../component/Image";
import insta from "../assets/Image.png";
import insta1 from "../assets/Image-1-1.png";
import insta2 from "../assets/Image-2.png";
import insta3 from "../assets/Image-3.png";
import insta4 from "../assets/Image-4.png";
import insta5 from "../assets/Image-5.png";

function Post() {
  return (
    <>
      <section className="pb-10">
        <Heading
          Headings="Follow Me On Instagram"
          className="text-center mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-20">
          <Image src={insta} alt="Instagram Image" />
          <Image src={insta1} alt="Instagram Image" />
          <Image src={insta2} alt="Instagram Image" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   lg:px-20 pt-4 sm:pt-6 lg:pt-8">
          <Image src={insta3} alt="Instagram Image" />
          <Image src={insta4} alt="Instagram Image" />
          <Image
            src={insta5}
            alt="Instagram Image"
            classname="pb-6 sm:pb-10 lg:pb-0"
          />
        </div>
      </section>
    </>
  );
}

export default Post;
