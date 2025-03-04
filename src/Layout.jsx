// Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="main-content pt-14">
        {/* The Outlet will render the matching child route */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;