import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Define your menu links with their routes.
  const links = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/shop" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A1F3F]/80 backdrop-blur-lg border-b border-[#00C7FF] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-[#FAFAFA] text-2xl font-bold cursor-pointer">
          Gadgets Pakistan
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#FAFAFA] font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <Link
                to={link.to}
                className={`transition ${
                  location.pathname === link.to ? "text-[#00C7FF]" : "hover:text-[#00C7FF]"
                }`}
              >
                {link.name}
              </Link>
              {location.pathname === link.to && (
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
          <Link
            to="/shop"
            className="bg-[#00C7FF] text-[#0A1F3F] px-5 py-2 rounded-full font-semibold shadow-lg transition hover:shadow-[#00C7FF]/50"
          >
            Shop Now
          </Link>
          <Link to="/cart">
            <ShoppingCart className="text-[#FAFAFA] w-6 h-6 cursor-pointer hover:text-[#00C7FF]" />
          </Link>
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
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative cursor-pointer text-2xl"
              onClick={toggleMenu}
            >
              <span
                className={`transition ${
                  location.pathname === link.to ? "text-[#00C7FF]" : "hover:text-[#00C7FF]"
                }`}
              >
                {link.name}
              </span>
              {location.pathname === link.to && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-2 h-2 bg-[#00C7FF] rounded-full"
                />
              )}
            </Link>
          ))}
          <Link
            to="/shop"
            className="bg-[#00C7FF] text-[#0A1F3F] px-6 py-3 rounded-full font-semibold shadow-lg transition hover:shadow-[#00C7FF]/50"
            onClick={toggleMenu}
          >
            Shop Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
