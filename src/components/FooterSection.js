"use client";

import { Mail, MapPin, Phone, Wifi } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#101844] text-white py-20 px-6 md:px-16">

      {/* Top Footer - Three Columns */}
      <div className="flex flex-col md:flex-row md:justify-between gap-12 border-b border-gray-700 pb-16">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-4">
          <h4 className="text-xl font-bold text-yellow-200">
            Lahore – Dharam Pure
          </h4>
          <div className="flex items-start gap-2">
            <MapPin className="text-yellow-200" />
            <p>1 Canal Point Near Euro Store Canal Road Lahore 54000</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-200" />
            <p>+92 309 1052430</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-yellow-200" />
            <p>info@picon.com.au</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="md:w-1/3 space-y-4">
          <h4 className="text-xl font-bold text-yellow-200">
            Austrailia – Melbourne
          </h4>
          <div className="flex items-start gap-2">
            <MapPin className="text-yellow-200" />
            <p>4/51 Denmen Avenue Wiley Park sydney NSW 2195 Australia</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-200" />
            <p>+92 309 1052430</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-yellow-200" />
            <p>info@picon.com.au</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 space-y-4">
          <h4 className="text-xl font-bold text-yellow-200">Islamabad – F7</h4>
          <div className="flex items-start gap-2">
            <MapPin className="text-yellow-200" />
            <p>Soon</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-yellow-200" />
            <p>+92 309 1052430</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-yellow-200" />
            <p>info@picon.com.au</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Four Columns */}
      <div className="mt-16 mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white">PICON</h2>
          <h3 className="text-xl font-semibold text-yellow-200">
            INTERNATIONAL
          </h3>
          <p className="text-gray-400 mt-4">
            We are pioneers in the field of international education, providing
            expert guidance to students for over a decade. Trust, excellence,
            and student satisfaction are the cornerstones of our service.
          </p>
        </div>

        {/* Column 2: Authorizations */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Authorized By</h4>
          <div className="mt-4">
            <span id="iasBadge" data-account-id="6498"></span>
            <Script
              strategy="afterInteractive"
              src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Column 3: More Links */}
        <div>
          <h4 className="text-xl font-bold text-white mb-2">More Links</h4>
          <div className="w-10 h-1 bg-yellow-200 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>Study in USA</li>
            <li>Study in Canada</li>
            <li>Study in UK</li>
            <li>Study in Australia</li>
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div>
          <h4 className="text-xl font-bold text-white mb-2">SUBSCRIBE</h4>
          <div className="flex items-center mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-100 text-gray-800"
            />
            <button className="bg-purple-600 p-3 rounded-r-lg">
              <Wifi className="text-white" />
            </button>
          </div>
          <p className="text-sm text-gray-400">GET latest updates and offers</p>
        </div>
      </div>

      {/* Footer Bottom Line and Social Icons */}
     {/* Footer Bottom Line and Social Icons */}
     <div className="h-[10px] border-t border-gray-700 flex flex-col md:flex-row justify-between items-center pt-6 px-4 text-sm text-gray-400 gap-4">
  <p className="text-sm leading-none">Design By MARB.</p>
  <div className="flex gap-3">
    <a
      href="https://www.facebook.com/share/r/1BiUbNN8ZF/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#101844] hover:bg-yellow-200 transition-colors text-2xl"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.linkedin.com/company/picon-premier-international-consultants/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#101844] hover:bg-yellow-200 transition-colors text-2xl"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://www.instagram.com/premierconsultants_?igsh=MXU2b2FyMTB2d2dlNg=="
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#101844] hover:bg-yellow-200 transition-colors text-2xl"
    >
      <FaInstagram />
    </a>
    <a
      href="https://youtube.com/@piconconsultant?si=7H0o85cqYmKpkmd2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#101844] hover:bg-yellow-200 transition-colors text-2xl"
    >
      <FaYoutube />
    </a>
  </div>
</div>




    </footer>
  );
}
