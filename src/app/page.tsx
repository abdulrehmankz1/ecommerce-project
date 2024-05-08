"use client"
import '../styles/globals.scss';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import HotCategory from "./components/HotCategory";
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/client';
import ProductList from './components/ProductList';
import Product from './components/Product';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <HeroSection />
      <HotCategory />
      <ProductSection />
      {/* <Product /> */}
      {/* <ProductList /> */}
      <Footer />
    </ApolloProvider>
  );
}
