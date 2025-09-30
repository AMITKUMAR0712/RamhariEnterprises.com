"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/serves" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-transparent">
      <div className="max-w-10xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-26">
          {/* Logo */}
     <div className="flex items-center">
  <Link href="/" onClick={() => setIsOpen(false)}>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="inline-flex items-center justify-center w-24 h-23 rounded-full bg-white overflow-hidden shadow-md"
    >
      <Image
      className="w-78 h-108 object-contain"
        src="/images/RH_logo-removebg-preview.png"
        alt="Logo"
        width={200}   
        height={200}
        priority
      />
    </motion.div>
  </Link>
</div>



          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center ">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300  ${
                    pathname === item.href
                      ? "text-blue-400 font-extrabold"
                      : "text-amber-500 hover:text-blue-300 font-extrabold"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-gray-200/20 transition"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/90 backdrop-blur-sm border-t"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)} // ✅ close menu on click
                    className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-blue-400 font-semibold"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
