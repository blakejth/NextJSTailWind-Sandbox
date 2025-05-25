import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-8">
        <div>
          <h1 className="text-4xl font-bold text-brand mb-4">
            Compassionate Doula Support & Education
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Holistic, evidence-based care for pregnancy, birth, and beyond. Whether you're preparing for your first baby or seeking guidance again, we’re here for every step of your journey.
          </p>
          <div className="flex gap-4">
            <a href="/classes" className="bg-brand text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand/90 transition">
              Explore Classes
            </a>
            <a href="/services" className="border-2 border-brand text-brand px-6 py-2 rounded-lg font-semibold hover:bg-brand hover:text-white transition">
              View Services
            </a>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/images/hero-birth.jpg"
            alt="Mother holding her baby"
            fill
            className="object-cover rounded-lg shadow-md"
            priority
          />
        </div>
      </section>

      {/* About Preview */}
      <section className="text-center max-w-3xl mx-auto my-16 px-4">
        <h2 className="text-2xl font-bold text-brand mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg">
          We’re a team of experienced doulas committed to informed, empathetic care. Our mission is to support families through pregnancy, childbirth, and the early days of parenting — with respect, presence, and professionalism.
        </p>
        <div className="mt-6">
          <a href="/about" className="text-brand font-semibold hover:underline">Learn more about us →</a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="grid md:grid-cols-3 gap-8 my-16 px-4">
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition text-center">
            <div className="relative w-full h-40 mb-4">
                <Image
                src="/images/birth-doula-support.PNG" // Replace with your preferred image
                alt="Pregnant mother illustration"
                fill
                className="object-contain"
                />
            </div>
        <h3 className="text-xl font-semibold text-brand mb-2">Birth Doula Support</h3>
        <p className="text-gray-700">
            In-person and virtual support throughout labor and birth, tailored to your birth plan and needs.
        </p>
    </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <div className="relative w-full h-40 mb-4">
                <Image
                src="/images/postpartum-services.PNG" // Replace with your preferred image
                alt="Postpartum Services illustration"
                fill
                className="object-contain"
                />
            </div>
          <h3 className="text-xl font-semibold text-brand mb-2">Postpartum Doula Services</h3>
          <p className="text-gray-700">Helping you navigate the fourth trimester with confidence, care, and practical support.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <div className="relative w-full h-40 mb-4">
                <Image
                src="/images/childbirth-classes.PNG" // Replace with your preferred image
                alt="Pregnant mother illustration"
                fill
                className="object-contain"
                />
            </div>
          <h3 className="text-xl font-semibold text-brand mb-2">Childbirth Classes</h3>
          <p className="text-gray-700">In-person and online sessions covering everything from labor prep to newborn care.</p>
        </div>
      </section>

      {/* Class Preview */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand mb-2">Upcoming Classes</h2>
          <p className="text-gray-600">Browse our class offerings — available online and in-person.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Replace these with dynamic class data later */}
          <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-brand mb-1">Birth Preparation 101</h4>
            <p className="text-gray-700 mb-2">A beginner-friendly overview of the labor process, comfort measures, and birth planning.</p>
            <a href="/classes" className="text-sm text-brand font-medium hover:underline">Reserve your spot →</a>
          </div>
          <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-brand mb-1">Postpartum & Newborn Basics</h4>
            <p className="text-gray-700 mb-2">Learn what to expect after birth and how to care for your newborn with confidence.</p>
            <a href="/classes" className="text-sm text-brand font-medium hover:underline">Reserve your spot →</a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-brand text-white text-center py-16 mt-16">
        <h2 className="text-2xl font-bold mb-4">Let’s walk this journey together.</h2>
        <p className="mb-6 text-lg">Reach out today or book a class to begin receiving support tailored to you.</p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="bg-white text-brand px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Contact Us</a>
          <a href="/classes" className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-brand transition">Book a Class</a>
        </div>
      </section>
    </Layout>
  );
}
