'use client'; // This file is now a Client Component!

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  return (
    <>
      {/* WhatsApp Floating Button with Text on Right and Animation */}
      <div className="fixed bottom-6 left-6 flex items-center gap-3 z-50 animate-float">
        {/* Circle Button */}
        <a
          href="https://wa.me/923091052430"
          className="w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl text-white" />
        </a>

        {/* Text on Right */}
        <span className="text-base text-green-700 font-semibold animate-float">Chat with Us!</span>
      </div>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
