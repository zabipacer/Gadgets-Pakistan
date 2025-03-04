import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, User, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Gadgets Pakistan
        </motion.h1>
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to Gadgets Pakistan, your ultimate destination for the latest in technology, innovation, and consumer electronics. We are passionate about bringing you high-quality gadgets, insightful reviews, and up-to-date tech news. Our mission is to empower tech enthusiasts and everyday consumers alike, ensuring you have the tools and knowledge to step confidently into the future.
        </motion.p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality & Innovation Card */}
          <motion.div
            className="bg-[#162033] rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="w-12 h-12 text-[#00C7FF] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Quality & Innovation</h2>
            <p className="text-gray-300">
              We constantly push boundaries to deliver innovative products and services that meet the highest quality standards.
            </p>
          </motion.div>

          {/* Customer Focus Card */}
          <motion.div
            className="bg-[#162033] rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <User className="w-12 h-12 text-[#00C7FF] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Customer Focus</h2>
            <p className="text-gray-300">
              Our customers are our priority. We strive to deliver personalized, seamless experiences that keep you at the heart of everything we do.
            </p>
          </motion.div>

          {/* Trust & Reliability Card */}
          <motion.div
            className="bg-[#162033] rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <ShieldCheck className="w-12 h-12 text-[#00C7FF] mb-4" />
            <h2 className="text-2xl font-bold mb-2">Trust & Reliability</h2>
            <p className="text-gray-300">
              We are committed to transparency and excellence, building trust with every interaction and ensuring a reliable experience for our community.
            </p>
          </motion.div>
        </div>

        {/* Closing Copy */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400">
            Join us on our journey as we explore the latest trends and innovations in technology. At Gadgets Pakistan, the future is now, and we're here to guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
