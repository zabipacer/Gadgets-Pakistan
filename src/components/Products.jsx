import { useState, useEffect } from "react";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { addToWooCart } from "../utils/woocommetce";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // WooCommerce credentials and API URL
  const CONSUMER_KEY = "ck_d7a4dbe881abcda743b2b0d508065e98a127fcca";
  const CONSUMER_SECRET = "cs_6caf9109df1ef6d7f65e7d3ec3a8ae48d82efa3b";
  const API_URL = "http://gadgetswoocommerce.local/wp-json/wc/v3/products";

  // Initialize OAuth using oauth-1.0a and CryptoJS for signing
  const oauth = OAuth({
    consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET },
    signature_method: "HMAC-SHA256",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA256(base_string, key).toString(CryptoJS.enc.Base64);
    },
  });

  // Helper: Strip HTML tags and truncate text if too long.
  const stripHtmlAndTruncate = (html, limit) => {
    const plainText = html.replace(/<\/?[^>]+(>|$)/g, "");
    return plainText.length > limit ? plainText.substring(0, limit) + "..." : plainText;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Define query parameters and build the full URL.
        const params = { featured: true };
        const queryString = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
          .join("&");
        const fullUrl = `${API_URL}?${queryString}`;

        // Prepare request data for OAuth signing.
        const requestData = {
          url: fullUrl,
          method: "GET",
        };

        // Generate the OAuth header.
        const authHeader = oauth.toHeader(oauth.authorize(requestData));

        // Make the GET request with axios.
        const response = await axios.get(fullUrl, {
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
        });
        console.log("Fetched Data:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, e) => {
    // Prevent click propagation so that the card's onClick doesn't fire.
    e.stopPropagation();
    const result = await addToWooCart(productId);
    if (result) {
      alert("Added to WooCommerce Cart!");
    }
  };

  return (
    <section className="py-16 border border-white px-6 bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-[#00C7FF] to-[#00FFC2] text-transparent bg-clip-text">
            Featured Products
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer bg-[#162033] shadow-2xl rounded-xl p-6 flex flex-col items-center border border-white/10"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="w-full h-64 overflow-hidden rounded-xl border border-white/10 flex items-center justify-center">
                  <img
                    src={product.images[0]?.src}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white text-center">
                  {product.name}
                </h3>
                <p className="text-gray-400 mt-2 text-center">
                  {stripHtmlAndTruncate(product.description, 100)}
                </p>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-[#00C7FF]">
                    Rs. {product.sale_price && product.sale_price !== "" ? product.sale_price : product.price}
                  </span>
                  {product.sale_price &&
                    product.regular_price &&
                    product.regular_price !== product.sale_price && (
                      <span className="text-gray-400 line-through ml-2">
                        Rs. {product.regular_price}
                      </span>
                    )}
                </div>
                <button
                  onClick={(e) => handleAddToCart(product.id, e)}
                  className="w-full mt-4 bg-gradient-to-r from-[#00C7FF] to-[#00B4FF] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg border-2 border-white/20"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
