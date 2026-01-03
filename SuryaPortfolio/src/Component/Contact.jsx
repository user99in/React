function Contact() {
  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT – CONTACT INFO */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let’s work together
            </h3>

            <p className="text-gray-600 mb-6">
              I’m open to internships, freelance opportunities, and
              collaboration on exciting projects. Feel free to reach out.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:suryabhanupandey08@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  suryabhanupandey08@gmail.com
                </a>
              </p>
               <p>
                <strong>Call:</strong>{" "}
                <a
                  href="tell:+916306108451"
                  className="text-blue-500 hover:underline"
                >
                  6306108451
                </a>
              </p>

              <p>
                <strong>Location:</strong> India
              </p>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <form className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
