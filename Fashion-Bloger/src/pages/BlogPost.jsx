import React from "react";
import Card from "../component/Card";
import img1 from "../assets/Image-2-1.png";
import img2 from "../assets/Image-7-2.png";
import img3 from "../assets/Image-8-1.png";
import Button from "../component/Button";
import Heading from "../component/Heading";

function BlogPost() {
  return (
    <>
      <Heading
        Headings="Latest Blog Posts"
        className="text-center mb-8 sm:mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-10 px-4 sm:px-5 lg:px-20">
        <Card
          img={img1}
          title="Your Guide to Look Stunning in Winter Clothes"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
        <Card
          img={img2}
          title="Best Looking Sunglasses of 2023 based on your type"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
        <Card
          img={img3}
          title="Fall Clothes to look for when shopping"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-10 px-4 sm:px-5 lg:px-20 py-5">
        <Card
          img={img1}
          title="Your Guide to Look Stunning in Winter Clothes"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
        <Card
          img={img2}
          title="Best Looking Sunglasses of 2023 based on your type"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
        <Card
          img={img3}
          title="Fall Clothes to look for when shopping"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ..."
        />
      </div>

      <div className="flex items-center justify-center pt-5 pb-10 lg:pb-0">
        <Button
          value="Veiw All"
          className="bg-pink-500 text-gray-800 py-3 px-8 sm:px-12 text-sm sm:text-md font-semibold hover:bg-pink-600 transition"
        />
      </div>
    </>
  );
}

export default BlogPost;
