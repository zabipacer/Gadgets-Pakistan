import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F3F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
            <li><a href="#" className="hover:text-[#00C7FF]">Order Tracking</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Bulk Orders</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Custom Mods</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h2 className="text-xl font-bold">Legal</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#00C7FF]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#00C7FF]">Compliance</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold">Join the Inner Circle</h2>
          <p className="text-gray-400 text-sm mt-1">
            Get exclusive updates & deals.
          </p>
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-[#00C7FF] px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#00C7FF]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00C7FF] text-[#0A1F3F] px-4 py-1 rounded-full font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <motion.div
        className="mt-8 border-t border-[#00C7FF] pt-6 flex flex-col sm:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scrolling Press Logos */}
        <div className="overflow-hidden w-full max-w-lg">
          <motion.div
            className="flex space-x-8 animate-marquee"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <img src="/" alt="Wired" className="h-6" />
            <img src="/techcrunch-logo.png" alt="TechCrunch" className="h-6" />
            <img src="/verge-logo.png" alt="The Verge" className="h-6" />
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
