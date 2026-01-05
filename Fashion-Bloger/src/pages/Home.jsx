import bg from "../assets/Image-1.jpg";
import HeroImages from "./HeroImages";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="min-h-screen lg:pb-40 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#6b1d1d]/80"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-screen px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Unveiling All the Latest <br className="hidden sm:block" /> Fashion Trends
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna.
          </p>

          <button className="mt-8 sm:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-pink-500 font-semibold rounded hover:bg-pink-600 transition">
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
