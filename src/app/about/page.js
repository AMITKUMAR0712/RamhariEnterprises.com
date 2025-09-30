"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-28 pb-16 px-6 text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/MotionGraphics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-5"></div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-blue-100 text-lg">
          We are a leading software development company providing{" "}
          <span className="font-semibold">end-to-end digital solutions</span>{" "}
          for businesses across the globe. From web & mobile apps to AI and
          cloud integration, we deliver everything you need to grow.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-blue-100">
            To empower businesses with cutting-edge software solutions that
            transform ideas into reality, drive efficiency, and create
            long-lasting value.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-blue-100">
            To be recognized globally as a trusted technology partner,
            delivering innovation and excellence across all industries.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Web Development",
            "Mobile App Development",
            "UI/UX & Branding",
            "E-Commerce Solutions",
            "Cloud & DevOps",
            "Cyber Security",
            "AI & Machine Learning",
            "Digital Marketing",
            "Custom Software Development",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-md text-center"
            >
              <h3 className="font-semibold text-lg text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact / Address */}
      <div className="max-w-4xl mx-auto mt-20 bg-white/10 backdrop-blur-md rounded-2xl shadow p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Office</h2>
        <p className="text-blue-100 mb-2">
          📍 Galaxy Blue Sapphire Plaza, 17th Floor, Noida, UP, India
        </p>
        <p className="text-blue-100 mb-2">📞 +91 99921 96879</p>
        <p className="text-blue-100 mb-2">
          📧 ramharienterprises01@gmail.com
        </p>
        <p className="text-blue-100">🌐 www.RamhariWebSolution.com</p>
      </div>
    </section>
  );
};

export default About;
