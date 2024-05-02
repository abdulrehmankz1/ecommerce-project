import Image from "next/image";
import '../styles/globals.scss';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import HotCategory from "./components/HotCategory";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HotCategory />
      <ProductSection />
      <Footer />
    </div>
  );
}
