import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Move, Rocket, Star, Shield, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F3F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand Story */}
        <div>
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="text-gray-400 mt-2">
            “We don’t make gadgets. We forge tools for digital pioneers.”
          </p>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#00C7FF]">FAQ</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h2 className="text-xl font-bold">Legal</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#00C7FF]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Scrolling Lucide Icons */}
      <motion.div
        className="mt-8 border-t border-[#00C7FF] pt-6 flex flex-col sm:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden w-full max-w-lg">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Move className="h-6 w-6 text-[#00C7FF]" />
            <Rocket className="h-6 w-6 text-[#00C7FF]" />
            <Star className="h-6 w-6 text-[#00C7FF]" />
            <Shield className="h-6 w-6 text-[#00C7FF]" />
            <Code className="h-6 w-6 text-[#00C7FF]" />
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6 sm:mt-0">
          <FaFacebook className="text-xl hover:text-[#00C7FF] cursor-pointer" />
          <FaTwitter className="text-xl hover:text-[#00C7FF] cursor-pointer" />
          <FaInstagram className="text-xl hover:text-[#00C7FF] cursor-pointer" />
          <FaLinkedin className="text-xl hover:text-[#00C7FF] cursor-pointer" />
        </div>
      </motion.div>
    </footer>
  );
}
