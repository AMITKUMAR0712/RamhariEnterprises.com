import "@/styles/globals.css";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full font-['SatoshiVariable'] flex flex-col items-center justify-center bg-black z-10 pt-16 pb-12 px-6 overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/CircuitBoard.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Footer Content */}
      <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto grid grid-cols-1 gap-8 items-center text-white">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col items-left">
            <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-amber-500 overflow-hidden">
              <Image
                className="w-68 h-98 object-contain"
                src="/images/RH_logo-removebg-preview.png"
                alt="Ramhari Web-Solution Fusion"
                width={200}
                height={100}
              />
            </div>

            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Where Development Meets Technology for Tomorrow’s Solutions.
            </p>
          </div>

          <nav className="flex flex-wrap justify-start sm:justify-center md:justify-start gap-4 sm:gap-6 text-sm md:text-base text-gray-300 font-medium">
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/portfolio" className="hover:text-white">Portfolio</a>
          </nav>

          {/* ✅ Address & Contact Section */}
          <div className="mt-6 space-y-2 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-amber-500" />
              <span>NOIDA, UP, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-500" />
              <a
                href="tel:+919992196879"
                className="hover:text-white font-semibold"
              >
                Call Now: +91 99921 96879
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl flex flex-col md:flex-row items-center justify-between pt-10 border-t-[1px] border-gray-200 text-sm mt-8 px-2">
        <span className="text-center md:text-left text-gray-300">
          © 2025 DTF. All rights reserved.
        </span>
       <div className="flex justify-center space-x-4 mt-4 md:mt-0">
  <a
    href="https://x.com" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white text-xl"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.linkedin.com/in/amittech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white text-xl"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://github.com/AMITKUMAR0712"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white text-xl"
  >
    <FaGithub />
  </a>
</div>

      </div>
    </footer>
  );
}
