"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scrolling function
  const handleScroll = (id: string) => {
    setIsOpen(false); // Close menu on mobile
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed w-full pt-4 z-30">
      <div className="w-[95%] bg-gray-700 bg-opacity-50 px-6 py-4 mx-auto flex justify-between rounded-xl md:rounded-full text-white shadow-inner shadow-gray-300/10">
        <div className="font-bold text-xl">
          <Link href="#hero" scroll={false} onClick={() => handleScroll("hero")}>
            CORE-FIT
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 text-sm">
          <li><Link href="#hero" scroll={false} onClick={() => handleScroll("hero")}>Home</Link></li>
          <li><Link href="#service" scroll={false} onClick={() => handleScroll("service")}>Service</Link></li>
          <li><Link href="#goal" scroll={false} onClick={() => handleScroll("goal")}>Goals</Link></li>
          <li><Link href="#classes" scroll={false} onClick={() => handleScroll("classes")}>Class Schedules</Link></li>
          <li><Link href="#contact" scroll={false} onClick={() => handleScroll("contact")}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-24 left-1/2 -translate-x-1/2 w-[95%] bg-gray-700 bg-opacity-50 text-white p-6 flex flex-col items-center space-y-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:hidden rounded-xl transition-all duration-300`}
      >
        <button onClick={() => handleScroll("hero")}>Home</button>
        <button onClick={() => handleScroll("service")}>Service</button>
        <button onClick={() => handleScroll("goal")}>Goals</button>
        <button onClick={() => handleScroll("classes")}>Class Schedules</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>
      </div>
    </nav>
  );
}
