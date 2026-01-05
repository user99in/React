import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

function HeroImages() {
  return (
    <section className="relative mt-0 md:-mt-40 lg:-mt-56 z-30 pt-4 sm:pt-6 lg:pt-0">
      <div className="max-w-1400px mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-end lg:px-20">

          {/* Image 1 */}
          <div className="group relative pt-0 md:pt-10 overflow-hidden">
            <img
              src={img3}
              alt=""
              className="w-full h-full sm:h-56 md:h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">
                View Look
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden pb-6 sm:pb-10 lg:pb-14">
            <img
              src={img2}
              alt=""
              className="w-full h-full sm:h-56 md:h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">
                Explore
              </span>
            </div>
          </div>

          {/* Image 3 (hidden on small) */}
          <div className="group relative hidden md:block overflow-hidden">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">
                Discover
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroImages;
