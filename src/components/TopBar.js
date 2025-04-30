import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div className="bg-gray-800 text-white px-6 py-3 text-sm flex justify-between items-center">
      {/* Left side - Social icons */}
      <div className="flex space-x-6 text-red-500 text-xl">
        <FaFacebookF className="cursor-pointer hover:text-white transition-colors duration-200" />
        <FaInstagram className="cursor-pointer hover:text-white transition-colors duration-200" />
        <FaLinkedinIn className="cursor-pointer hover:text-white transition-colors duration-200" />
        <FaYoutube className="cursor-pointer hover:text-white transition-colors duration-200" />
      </div>

      {/* Right side - Links */}
      <div className="flex space-x-6">
        <span className="cursor-pointer hover:underline transition">Request Quote</span>
        <span className="cursor-pointer hover:underline transition">ADMIN LOGIN</span>
      </div>
    </div>
  )
}
