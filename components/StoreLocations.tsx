import Link from "next/link";

const StoreLocations = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Find a Store</h3>
            <p className="mb-4">
              Visit us at one of our locations to try on frames, get styled, and
              more.
            </p>
            <Link
              href="/locations"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              View All Locations
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Book an Eye Exam</h3>
            <p className="mb-4">
              Schedule an appointment with one of our experienced optometrists.
            </p>
            <Link
              href="/book-exam"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;
