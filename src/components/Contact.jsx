import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-[#0A1F3F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-[#1b2a50] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400">Your Name</label>
              <input
                type="text"
                className="w-full p-3 bg-transparent border border-[#00C7FF] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00C7FF]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-400">Your Email</label>
              <input
                type="email"
                className="w-full p-3 bg-transparent border border-[#00C7FF] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00C7FF]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-400">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 bg-transparent border border-[#00C7FF] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00C7FF]"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="w-full bg-[#00C7FF] text-[#0A1F3F] font-bold py-3 rounded-lg hover:bg-[#009ACD] transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-[#00C7FF] text-xl" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-[#00C7FF] text-xl" />
                <span className="text-gray-400">support@gadgetsstore.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-[#00C7FF] text-xl" />
                <span className="text-gray-400">123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-[#00C7FF] cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-[#00C7FF] cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-[#00C7FF] cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-[#00C7FF] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
