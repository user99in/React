import bg from "../assets/Image-1.jpg";
import HeroImages from "./HeroImages";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="min-h-screen  lg:pb-40  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#6b1d1d]/80"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-screen px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unveiling All the Latest <br /> Fashion Trends
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna.
          </p>

          <button className="mt-10 px-10 py-4 bg-pink-500 font-semibold rounded hover:bg-pink-600 transition">
            Browse Posts
          </button>
        </div>
      </section>

      {/* OVERLAPPING IMAGE SECTION */}
      <HeroImages />
    </>
  );
}

export default Home;
