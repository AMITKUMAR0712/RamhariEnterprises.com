"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919992196879"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      className="fixed left-4 bottom-6 z-50 flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl animate-pulse" />
      <span className="hidden sm:block font-medium">Chat on WhatsApp</span>
    </motion.a>
  );
}
