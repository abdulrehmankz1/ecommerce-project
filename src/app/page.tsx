import Image from "next/image";
import '../styles/globals.scss';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";


export default function Home() {
  return (
    <div>
  <Navbar />
  <HeroSection />
  <ProductSection />
    </div>
  );
}
