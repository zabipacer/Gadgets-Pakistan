import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message
    alert("Your message has been sent. We will connect with you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-[#0A1F3F] to-[#010A15] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-center text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At Gadgets Pakistan, excellence is more than just a promise—it’s our
          standard. Whether you have a cutting-edge inquiry or a visionary idea,
          we’re here to connect with you and empower your tech journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p className="text-white">
                We value the power of communication. Reach out to us via any of
                the channels below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#00C7FF] mr-3" />
                <span className="text-white">info@gadgetspakistan.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#00C7FF] mr-3" />
                <span className="text-white">+92 300 1234567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#00C7FF] mr-3" />
                <span className="text-white">Karachi, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#162033] p-6 rounded-xl shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <label
                className="block text-white mb-2 font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-3 rounded bg-[#0A1F3F] border border-gray-500 focus:outline-none focus:border-[#00C7FF] text-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full p-3 rounded bg-[#0A1F3F] border border-gray-500 focus:outline-none focus:border-[#00C7FF] text-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white mb-2 font-medium"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full p-3 rounded bg-[#0A1F3F] border border-gray-500 focus:outline-none focus:border-[#00C7FF] text-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-[#0A1F3F] border border-gray-500 focus:outline-none focus:border-[#00C7FF] text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00C7FF] to-[#00B4FF] py-3 rounded-full font-semibold shadow hover:shadow-xl transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
