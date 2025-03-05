import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // WooCommerce API credentials and URL
  const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
  const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;
  const API_URL = import.meta.env.VITE_WC_API_URL;

  // Initialize OAuth instance using oauth-1.0a and CryptoJS
  const oauth = OAuth({
    consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET },
    signature_method: "HMAC-SHA256",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA256(base_string, key).toString(CryptoJS.enc.Base64);
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fullUrl = `${API_URL}/${id}`;
        const requestData = {
          url: fullUrl,
          method: "GET",
        };
        const authHeader = oauth.toHeader(oauth.authorize(requestData));
        const response = await axios.get(fullUrl, {
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
        });
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error fetching product details");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10 text-white">
        Loading product details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] py-10 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <motion.div
            className="md:w-1/2 flex items-center justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={product.images[0]?.src}
              alt={product.name}
              className="object-contain max-w-full max-h-96 rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Price Section */}
            <div className="mb-4">
              {product.sale_price && product.sale_price !== "" ? (
                <div>
                  <span className="text-2xl font-bold text-green-400">
                    Rs. {product.sale_price}
                  </span>
                  <span className="text-lg line-through ml-2 text-gray-400">
                    Rs. {product.regular_price}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">
                  Rs. {product.price}
                </span>
              )}
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Product Description</h2>
              <div className="p-4 bg-[#0a1f3f] rounded-lg shadow-inner text-gray-200 leading-relaxed text-base">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300">
              Add to Cart
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
