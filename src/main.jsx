import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
 // Species detail page
import Layout from "./Layout";
import ProductPage from "./components/ProdcutPage.jsx";
import Shop from "./components/Shop.jsx";
import About from "./components/About.jsx";
import Contact from "./components/ContactPage.jsx";
import Cart from "./components/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.js";
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
          {
              path: "/product/:id", // Dynamic route for species detail
              element: <ProductPage />, // Show SpeciesDetail component in the Layout
            },
            {
              path: "/shop", // Dynamic route for species detail
              element: <Shop/>, // Show SpeciesDetail component in the Layout
            },
            {
              path: "/about", // Dynamic route for species detail
              element: <About/>, // Show SpeciesDetail component in the Layout
            },            {
              path: "/contact", // Dynamic route for species detail
              element: <Contact/>, // Show SpeciesDetail component in the Layout
            },
                        {
              path: "/cart", // Dynamic route for species detail
              element: <Cart/>, // Show SpeciesDetail component in the Layout
            },
    

  
     



      // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);