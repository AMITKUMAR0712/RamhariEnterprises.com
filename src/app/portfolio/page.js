"use client";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "E-Mart Project",
    description: "A B2C e-commerce platform built with ReactJS, Spring, JWT, Doker, git, github and MySQL.",
    image: "/images/EM.png",
  },

  {
    id: 2,
    title: "One Touch Web News App",
    description: "ReactJS-based UI news app delivering real-time news updates.",
    image: "/images/OT.png",
  },
  {
    id: 3,
    title: "JARV Franchise Website",
    description: "A MERN stack based franchise business website with full admin control.",
    image: "/images/JF.png",
  },
  {
    id: 4,
    title: "Aim Ascend",
    description: "Business growth and management solutions with modern UI/UX . Build with Reactjs, Nodejs, JWT and MySQL.",
    image: "/images/AA.png",
  },
  {
    id: 5,
    title: "YogSatthi",
    description: "A yoga and wellness platform connecting users with instructors.Build with Reactjs, Nodejs, JWT and MySQL.",
    image: "/images/YS.png",
  },
  {
    id: 6,
    title: "Rambatting",
    description: "Sports and fitness website for training and community building. Build with Reactjs, Nodejs, JWT, Doker, git, github and MySQL",
    image: "/images/RB.png",
  },
  {
    id: 7,
    title: "LOANIT2ME",
    description: "A lending and borrowing financial platform with admin controls. Build with Reactjs, Nodejs, JWT, Doker, git, github and MySQL",
    image: "/images/LIT.png",
  },
  {
    id: 8,
    title: "Kaira Jewellers",
    description: "Jewellery e-commerce website with catalog and secure checkout.Build with Reactjs, Nodejs, JWT and MySQL",
    image: "/images/KJ.png",
  },
  {
    id: 9,
    title: "Smart Parking",
    description: "IoT-based parking management system with real-time availability. Build with Reactjs, Nodejs, JWT and MySQL",
    image: "/images/SP.png",
  },
  {
  id: 10,
    title: "Trippyjiffy Project",
    description: "A B2C Traveling platform built with ReactJS, Nodejs, JWT and MySQL.",
    image: "/images/TJ.png",
  },
  {
    id: 11,
    title: "ChatBot Application",
    description: "A B2C e-commerce platform built with ReactJS, Python, and MySQL.",
    image: "/images/CB.png",
  },
];

const Portfolio = () => {
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
        <source src="/videos/LightSpeed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-5"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
