import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function UserReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review: "Absolutely love the Vortex X9 Keyboard! The RGB lights and tactile feel are unmatched. Highly recommend for gamers!",
      image: "/path-to-user-image-1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review: "The Phantom Wireless Mouse is super responsive and lightweight. Great for long gaming sessions. Would have liked a bit more battery life.",
      image: "/path-to-user-image-2.jpg",
    },
    {
      id: 3,
      name: "Chris Williams",
      rating: 5,
      review: "Eclipse 4K Monitor is a game-changer. The color accuracy is perfect for design work and gaming. Worth every penny.",
      image: "/path-to-user-image-3.jpg",
    },
    // Add more reviews as needed
  ];

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

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0A1F3F] to-[#00152E] text-white py-16 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C7FF10] to-[#00C7FF05] animate-pulse"></div>

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        What Our Customers Are Saying
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Review Card */}
        <div className="bg-[#1b2a50] p-8 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-[#00C7FF] rounded-full animate-ping-slow"></div>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-xl">{reviews[currentIndex].name}</h3>
              <div className="flex space-x-1">{renderStars(reviews[currentIndex].rating)}</div>
            </div>
          </div>
          <p className="text-gray-300 italic">"{reviews[currentIndex].review}"</p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevReview}
            className="p-2 bg-[#00C7FF] rounded-full hover:bg-[#00A6FF] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="p-2 bg-[#00C7FF] rounded-full hover:bg-[#00A6FF] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}