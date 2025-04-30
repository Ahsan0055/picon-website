"use client";
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo-nav.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md text-white">
      <div className="flex justify-between items-center px-4 py-2 h-20">
        {/* Logo (larger) */}
        <div className="flex-shrink-0 h-full flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={150}
            className="h-auto w-60 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-md font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <div className="group relative">
            <button className="hover:text-blue-600 transition">Study Abroad</button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
              <Link href="/study/australia" className="block px-4 py-2 hover:bg-blue-100 transition">Study in Australia</Link>
              <Link href="/study/uk" className="block px-4 py-2 hover:bg-blue-100 transition">Study in UK</Link>
              <Link href="/study/canada" className="block px-4 py-2 hover:bg-blue-100 transition">Study in Canada</Link>
              <Link href="/study/usa" className="block px-4 py-2 hover:bg-blue-100 transition">Study in USA</Link>
            </div>
          </div>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/aboutus" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/contactus" className="hover:text-blue-600 transition">Contact Us</Link>
          <Link href="/team" className="hover:text-blue-600 transition">Team</Link>
        </div>

        {/* Call Info */}
        <div className="hidden md:flex flex-col text-right text-sm ">
          <p className="text-blue-600 animate-pulse font-semibold mr-7">Call Now</p>
          <div className="flex items-center gap-2 text-white mt-1 text-lg mr-7">
            <FaPhoneAlt className="text-blue-500" />
            <span>+92 309 1052430</span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 h-full w-3/4 bg-white z-40 flex flex-col items-center px-6 pt-6 space-y-8 text-2xl font-semibold text-black"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <div className="w-full flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FaTimes className="text-3xl" />
              </button>
            </div>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/study/australia" onClick={() => setIsMobileMenuOpen(false)}>Study in Australia</Link>
            <Link href="/study/uk" onClick={() => setIsMobileMenuOpen(false)}>Study in UK</Link>
            <Link href="/study/canada" onClick={() => setIsMobileMenuOpen(false)}>Study in Canada</Link>
            <Link href="/study/usa" onClick={() => setIsMobileMenuOpen(false)}>Study in USA</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contactus" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
