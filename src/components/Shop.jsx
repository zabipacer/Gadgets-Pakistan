// Shop.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice"; // adjust the path as needed

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // WooCommerce API credentials and URL
  const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
  const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;
  const API_URL = import.meta.env.VITE_WC_API_URL;

  // Initialize OAuth instance for signing the request
  const oauth = OAuth({
    consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET },
    signature_method: "HMAC-SHA256",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA256(base_string, key).toString(
        CryptoJS.enc.Base64
      );
    },
  });

  // Helper to strip HTML tags
  const stripHtml = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  // Helper to truncate text after stripping HTML tags
  const truncateText = (text, limit) => {
    if (!text) return "";
    const plainText = stripHtml(text);
    return plainText.length > limit
      ? plainText.substring(0, limit) + "..."
      : plainText;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Set parameters (fetch 20 products per page)
        const params = { per_page: 20 };
        const queryString = Object.keys(params)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
          )
          .join("&");
        const fullUrl = `${API_URL}?${queryString}`;

        // Prepare request data for OAuth signing
        const requestData = { url: fullUrl, method: "GET" };
        const authHeader = oauth.toHeader(oauth.authorize(requestData));

        const response = await axios.get(fullUrl, {
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0a0f24] to-[#1b2a50]">
        <motion.div
          className="w-16 h-16 border-4 border-t-transparent border-[#00C7FF] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">{error}</div>
    );
  }

  // Handler for adding a product to the cart using Redux
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    // Dispatch the action with product details and a default quantity of 1
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#162033] rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="w-full h-64 flex items-center justify-center bg-gray-800">
                <img
                  src={product.images[0]?.src}
                  alt={product.name}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {truncateText(
                    product.short_description || product.description,
                    100
                  )}
                </p>
                <div className="mb-4">
                  {product.sale_price && product.sale_price !== "" ? (
                    <>
                      <span className="text-2xl font-bold text-green-400">
                        Rs. {product.sale_price}
                      </span>
                      <span className="text-lg line-through ml-2 text-gray-400">
                        Rs. {product.regular_price}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">
                      Rs. {product.price}
                    </span>
                  )}
                </div>
                <button
                  className="w-full cursor-pointer bg-gradient-to-r from-[#00C7FF] to-[#00B4FF] py-2 rounded-full font-semibold shadow hover:shadow-xl transition duration-300 flex items-center justify-center"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
