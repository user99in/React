import Button from "../component/Button";
import img1 from "../assets/Rectangle-125.png";
import img2 from "../assets/Rectangle-124.png";
import img3 from "../assets/Image-10.png";
import BgImg from "../assets/6.png";
import Card from "../component/Card";

function AuthorIntro() {
  return (
    <>
      {/* AUTHOR INTRO */}
      <section className="bg-white py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            <div>
              <img
                src={img2}
                alt=""
                className="w-full h-auto md:h-full object-cover"
              />
            </div>

            <div className="lg:pt-10">
              <img
                src={img1}
                alt=""
                className="w-full h-auto md:h-full object-cover"
              />
            </div>

            <div className="md:col-span-2 lg:ps-10 lg:pt-10">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-gray-900">
                I’m Grace McKenzie, a Fashion Expert and a Professional Writer
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed py-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>

              <Button value="Learn More" />
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="bg-red-950 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug text-white">
                Don't Miss Out on the Latest Fashion Trends!
              </h1>

              <p className="mt-4 text-sm sm:text-base text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-3 rounded-md w-full sm:w-80 focus:outline-none"
                />
              </div>

              <Button
                className="mt-4 sm:mt-0 bg-white text-black px-6 py-3 rounded-md"
                value="Subscribe"
              />
            </div>

            <div>
              <img
                src={img3}
                alt="Fashion"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND IMAGE SECTION */}
      <section
        className="py-32 sm:py-40 md:py-56 lg:py-80 bg-cover bg-center object-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></section>
    </>
  );
}

export default AuthorIntro;
