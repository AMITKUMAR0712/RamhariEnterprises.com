"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import RingRight from "@/assets/FloatingAssets/RingRight.png";
import RingLeft from "@/assets/FloatingAssets/RingLeft.png";
import Dots from "@/assets/FloatingAssets/Dots.png";
import Circles from "@/assets/FloatingAssets/Circles.png";
import Star from "@/assets/FloatingAssets/Star.png";

import CalendlyPopupButton from "./CalendlyPopupButton";
import LogoSlider from "@/components/ui/LogosSliderBar";

const Hero = () => {
  const lines = [
    "The Digital World Shifts",
    "Our Dedication Doesn't.",
  ];

  const videoRef = useRef(null);
  const headingRef = useRef(null);

  // Ab 3 videos hain
  const videos = [
    "/videos/Tech.mp4",
    "/videos/AbstractNebula.mp4",
    "/videos/TechnologyCircuit.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Video change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow speed
    }
  }, [currentIndex]);

  useEffect(() => {
    const chars = headingRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.035,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden gap-10 px-6">
      {/* Background Video */}
      <video
        ref={videoRef}
        key={videos[currentIndex]} // Important: forces re-render when video changes
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-1000"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 bg-black opacity-30 left-0 w-full h-full object-cover z-0"></div>

      {/* Floating assets */}
      <Image
        className="absolute select-none -z-10 top-[170px] right-[-80px] w-14 md:w-16 lg:w-20 xl:w-40"
        src={RingRight}
        alt="RingRight"
      />
      <Image
        className="absolute select-none -z-10 top-1/2 left-[-80px] w-14 md:w-16 lg:w-20 xl:w-40"
        src={RingLeft}
        alt="RingLeft"
      />
      <Image
        className="absolute select-none top-4/6 right-[-80px] -z-10"
        src={Star}
        alt="Star"
        width={150}
        height={150}
      />

      {/* Content */}
      <div className="w-[95%] relative h-auto z-10 md:w-5/6 lg:w-4xl xl:w-5xl 2xl:w-7xl flex flex-col items-center gap-12">
        <Image
          className="absolute select-none top-[-10px] right-60 -z-10"
          src={Dots}
          alt="Dots"
          width={100}
          height={100}
        />
        <Image
          className="absolute select-none top-20 left-64 -z-10"
          src={Circles}
          alt="Circles"
          width={40}
          height={40}
        />

        <h1
          ref={headingRef}
          className="text-white mt-10 md:mt-0 text-center text-3xl md:text-[44px] lg:text-5xl 2xl:text-6xl font-black font-['SatoshiVariable']"
        >
          <span className="inline-block">
            {lines.map((line, lineIdx) => (
              <div key={lineIdx} className="block">
                {line.split("").map((char, i) => (
                  <span key={`${lineIdx}-${i}`} className="char inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            ))}
          </span>
        </h1>

        <p className="w-5/6 text-base xl:text-base 2xl:text-xl mt-2 2xl:mt-10 text-white text-center">
          We shape great ideas into reality with the force of digital
          technology and future-proof IT solutions.
        </p>

        <CalendlyPopupButton />
      </div>

      <LogoSlider />
    </div>
  );
};

export default Hero;
