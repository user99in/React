import Button from "../component/Button";
import img1 from "../assets/Rectangle-125.png";
import img2 from "../assets/Rectangle-124.png";
import img3 from "../assets/Image-10.png";

function AuthorIntro() {
  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {/* Image 1 (1 col) */}
            <div className="">
              <img src={img2} alt="" className="w-full h-full  object-cover" />
            </div>

            {/* Image 2 (1 col) */}
            <div className="lg:pt-10 ">
              <img src={img1} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Text Content (2 cols) */}
            <div className="md:col-span-2 lg:ps-10 lg:pt-10 ">
              <h2 className="text-xl md:text-5xl font-bold leading-snug text-gray-900">
                I’m Grace McKenzie, a Fashion Expert and a Professional Writer
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed py-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>

              <Button />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-950 py-10 ">
        <div className="grid grid-cols-2 px-25 py-20">
          <div className="span-1">
            <h1 className="text-xl md:text-5xl font-bold leading-snug text-white">
              Don't Miss Out on the Latest Fashion Trends!
            </h1>
            <p className="mt-3 text-white leading-relaxed py-2 lg:pe-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <input className="p-3 bg-white w-" type="email" /> <br />
            <Button className={'text-black'}/>
          </div>

          <div className="span-1">
            <img src={img3} alt="" className="w-full h-full  object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthorIntro;
