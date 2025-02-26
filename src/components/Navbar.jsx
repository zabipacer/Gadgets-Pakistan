import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A1F3F]/80 backdrop-blur-lg border-b border-[#00C7FF] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-[#FAFAFA] text-2xl font-bold cursor-pointer">Gadgets pakistan</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#FAFAFA] font-medium">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer"
              onClick={() => setActive(item)}
            >
              <span
                className={`${
                  active === item ? "text-[#00C7FF]" : "hover:text-[#00C7FF]"
                } transition`}
              >
                {item}
              </span>
              {/* Glowing dot for active state */}
              {active === item && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-2 h-2 bg-[#00C7FF] rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right side (CTA + Cart) */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.button
            className="bg-[#00C7FF] text-[#0A1F3F] px-5 py-2 rounded-full font-semibold shadow-lg transition hover:shadow-[#00C7FF]/50"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            Shop Now
          </motion.button>
          <ShoppingCart className="text-[#FAFAFA] w-6 h-6 cursor-pointer hover:text-[#00C7FF]" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#FAFAFA]" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#0A1F3F]/90 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 text-[#FAFAFA] text-lg font-medium z-40"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "100%" }}
        >
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <div
              key={item}
              className="relative cursor-pointer text-2xl"
              onClick={() => {
                setActive(item);
                toggleMenu();
              }}
            >
              <span className={`${
                active === item ? "text-[#00C7FF]" : "hover:text-[#00C7FF]"
              } transition`}>
                {item}
              </span>
              {active === item && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-2 h-2 bg-[#00C7FF] rounded-full"
                />
              )}
            </div>
          ))}
          <button
            className="bg-[#00C7FF] text-[#0A1F3F] px-6 py-3 rounded-full font-semibold shadow-lg transition hover:shadow-[#00C7FF]/50"
          >
            Shop Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
