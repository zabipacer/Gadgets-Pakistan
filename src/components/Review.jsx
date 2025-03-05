import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function UserReviews() {
  const reviews = [
    {
      id: 1,
      name: "Ali Raza Khan",
      rating: 5,
      review: "The Vortex X9 Keyboard survived Karachi's humidity perfectly! Perfect for late-night coding sessions during load shedding.",
      image: "https://picsum.photos/seed/ali/200/200",
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      rating: 4,
      review: "Phantom Mouse works flawlessly with Lahore's power fluctuations. Lasted through my entire CSGO tournament at Peshawar Road Cafe!",
      image: "https://picsum.photos/seed/fatima/200/200",
    },
    {
      id: 3,
      name: "Hassan Shah",
      rating: 5,
      review: "Eclipse Monitor's colors are as vibrant as Truck Art! Perfect for both my graphic design work and watching PSL matches in Islamabad.",
      image: "https://picsum.photos/seed/hassan/200/200",
    },
    // More Pakistani reviews
  ];

  // Animation names inspired by Pakistani landmarks
  const animations = {
    backgroundPulse: "animate-himalayan-glow",
    avatarPing: "animate-indus-ping"
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-2xl transition-all ${
          i < rating ? 'text-yellow-400' : 'text-gray-600'
        } hover:scale-110`}
      />
    ));
  };

  // Navigation functions remain same
  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0A1F3F] to-[#00152E] text-white py-16 px-6 relative overflow-hidden">
      {/* Himalayan Glow Animation */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#00C7FF10] to-[#00C7FF05] ${animations.backgroundPulse}`}></div>

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        What Pakistan's Gamers Say
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Review Card with Chitrali Woodcarving-inspired border */}
        <div className="bg-[#1b2a50] p-8 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 border-l-4 border-[#00C7FF]">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-full h-full rounded-full object-cover"
              />
              {/* Indus River Ping Effect */}
              <div className={`absolute inset-0 border-2 border-[#00C7FF] rounded-full ${animations.avatarPing}`}></div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">{reviews[currentIndex].name}</h3>
              <div className="flex space-x-1">{renderStars(reviews[currentIndex].rating)}</div>
            </div>
          </div>
          <p className="text-gray-300 italic">"{reviews[currentIndex].review}"</p>
        </div>

        {/* Carousel Controls with Badshahi Mosque-inspired design */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevReview}
            className="p-2 bg-[#00C7FF] rounded-full hover:bg-[#00A6FF] transition-all shadow-md shadow-[#005C99]"
          >
            {/* Previous Icon */}
          </button>
          <button
            onClick={nextReview}
            className="p-2 bg-[#00C7FF] rounded-full hover:bg-[#00A6FF] transition-all shadow-md shadow-[#005C99]"
          >
            {/* Next Icon */}
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Custom Pakistani-themed animations */
        @keyframes himalayan-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-himalayan-glow {
          animation: himalayan-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes indus-ping {
          75%, 100% { transform: scale(1.1); opacity: 0; }
        }
        .animate-indus-ping {
          animation: indus-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}