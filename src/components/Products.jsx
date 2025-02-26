import { motion } from "framer-motion";
import { FaShoppingCart, FaFire, FaRegClock, FaStar } from "react-icons/fa";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Vortex Series X9 Mechanical Keyboard",
      description: "Tactile Cherry MX switches with per-key RGB customization",
      image: "/mouse 1.jpeg",
      badge: "New Launch",
      price: 54999,
      originalPrice: 69999,
      soldCount: 142,
      stockLeft: 8,
      reviews: 4.5,
    },
    {
      id: 2,
      name: "Phantom Wireless Mouse",
      description: "26,000 DPI optical sensor with 1000Hz polling rate",
      image: "/mouse.jpeg",
      badge: "Bestseller",
      price: 22999,
      originalPrice: 28999,
      soldCount: 896,
      stockLeft: 23,
      reviews: 4.8,
    },
    {
      id: 3,
      name: "Eclipse 4K 144Hz Monitor",
      description: "1ms response time with HDR600 certification",
      image: "/mouse 2.jpeg",
      badge: "Last Units",
      price: 179999,
      soldCount: 54,
      stockLeft: 3,
      reviews: 4.6,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-[#00C7FF] to-[#00FFC2] text-transparent bg-clip-text">
            Featured Prodducts
          </span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#162033] shadow-2xl rounded-xl p-6 flex flex-col items-center w-full min-h-[450px]"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
            >
              {product.badge && (
                <div className={`absolute top-3 left-3 px-4 py-1 text-sm font-bold uppercase rounded-full text-white ${
                  product.badge === "New Launch" ? "bg-[#00C7FF]" : product.badge === "Bestseller" ? "bg-[#FF4F79]" : "bg-[#FFB74D]"
                }`}> {product.badge} </div>
              )}
              <div className="w-full h-64 overflow-hidden rounded-xl">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-white text-center">{product.name}</h3>
              <p className="text-gray-400 mt-2 text-center">{product.description}</p>
              <div className="mt-2 flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < Math.floor(product.reviews) ? "text-yellow-400" : "text-gray-500"} />
                ))}
                <span className="text-white ml-1">{product.reviews}</span>
              </div>
              <div className="mt-4 text-center">
                <span className="text-2xl font-bold text-[#00C7FF]">Rs. {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">Rs. {product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-red-400 mt-2">
                <FaFire className="animate-pulse" />
                <span>{product.stockLeft} left in stock</span>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-[#00C7FF] to-[#00B4FF] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg">
                <FaShoppingCart /> Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}