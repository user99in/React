import img1 from "../assets/Image-2-1.png";
import img2 from "../assets/Image-7-2.png";
import img3 from "../assets/Image-8-1.png";

function FeaturedPosts() {
  const posts = [
    {
      title: "Your Guide to Look Stunning in Winter Clothes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
      img: img3,
    },
    {
      title: "Best Looking Sunglasses of 2023 based on your type",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
      img: img2,
    },
    {
      title: "Fall Clothes to look for when shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
      img: img1,
    },
  ];

  return (
    <section className="py-20 bg-[#fff5f5]">
      <div className="max-w-6xl mx-auto p-4 ">
        <h2 className="text-4xl font-bold mb-12">Featured Posts</h2>

        <div className="grid md:grid-cols-3 gap-10 ">
          {posts.map((post, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="overflow-hidden  ">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-bold leading-snug">{post.title}</h3>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {post.desc}
                </p>

                <button className="mt-5 text-pink-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
