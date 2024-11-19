import Head from "next/head";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About Us - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Learn about Matsukura Eyewear and our mission"
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">About Matsukura Eyewear</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Matsukura Eyewear has been serving the Osaka community since
            [founding year]. We are committed to providing affordable,
            high-quality eyewear solutions to our customers.
          </p>
          <p>
            Our mission is to make stylish and functional eyewear accessible to
            everyone, while offering exceptional customer service and expert eye
            care.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border rounded px-3 py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
