export default function Home() {
  return (
    <main className="flex flex-col gap-16 py-12 px-4 max-w-5xl mx-auto">
      {/* Hero */}
      <section className="text-center text-white bg-brand p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Doula & Birth Education Hub
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Holistic and evidence-based care for every birth journey. Whether you&apos;re looking for one-on-one doula support or preparing through our classes, we&apos;re here to guide you.
        </p>
      </section>

      {/* Services Preview */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Doula Support</h2>
          <p className="text-gray-700 mb-4">
            Personalized, compassionate support before, during, and after your birth.
          </p>
          <a href="/services" className="text-brand font-medium hover:underline">
            Learn more →
          </a>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Educational Classes</h2>
          <p className="text-gray-700 mb-4">
            Prepare for birth and parenthood with our in-person and online classes.
          </p>
          <a href="/classes" className="text-brand font-medium hover:underline">
            Explore classes →
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to start your journey?</h2>
        <p className="text-gray-700 mb-4">Get in touch or book your first class today.</p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-brand text-white px-6 py-2 rounded-full font-semibold hover:bg-brand/90 transition"
          >
            Contact Us
          </a>
          <a
            href="/classes"
            className="border-2 border-brand text-brand px-6 py-2 rounded-full font-semibold hover:bg-brand hover:text-white transition"
          >
            Book a Class
          </a>
        </div>
      </section>
    </main>
  );
}
