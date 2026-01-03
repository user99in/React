import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

function HeroImages() {
  return (
    <section className="relative mt-0 md:-mt-56 z-30 lg:pt-0  pt-6">
      <div className="max-w-1400px mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-end lg:px-20">

          {/* Image 1 */}
          <div className="group relative pt-0 md:pt-10 overflow-hidden">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">View Look</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden lg:pb-15">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">Explore</span>
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
              <span className="text-white font-semibold">Discover</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroImages;
