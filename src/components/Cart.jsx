// Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingCart} from "lucide-react";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "./redux/cartSlice"; // adjust path as needed

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#0a0f24] to-[#1b2a50]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ShoppingCart className="w-20 h-20 text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">
          Your cart is empty
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#00C7FF] text-[#0A1F3F] px-6 py-3 rounded-full font-semibold shadow hover:shadow-xl transition duration-300"
        >
          Shop Now
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-[#0a0f24] to-[#1b2a50] text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-[#162033] p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.images && item.images[0]?.src ? item.images[0].src : item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded"
              />
              <div className="flex-grow mt-4 sm:mt-0 sm:ml-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-300">Price: Rs. {item.price}</p>
                <p className="text-gray-300">
                  Subtotal: Rs. {item.price * item.quantity}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                      )
                    }
                    disabled={item.quantity <= 1}
                    className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                      )
                    }
                    className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-4 sm:mt-0 sm:ml-4 p-2 bg-red-600 hover:bg-red-700 rounded"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">Total: Rs. {total}</h2>
          <Link
  to="http://gadgetswoocommerce.local/checkout"
  className="mt-4 inline-block bg-[#00C7FF] text-[#0A1F3F] px-6 py-3 rounded-full font-semibold shadow hover:shadow-xl transition duration-300"
>
  Proceed to Checkout
</Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 ml-4 inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-xl transition duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </motion.section>
  );
}
