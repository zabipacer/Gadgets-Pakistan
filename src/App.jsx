import { Contact } from "lucide-react"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero"
import Navbar from "./components/Navbar"
import FeaturedProducts from "./components/Products"
import ProductsGrid from "./components/Products"
import UserReviews from "./components/Review"
import TechMarquee from "./components/TechM"
import ContactUs from "./components/Contact"


function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <TechMarquee/>
   <FeaturedProducts/>
   <UserReviews/>
   <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
