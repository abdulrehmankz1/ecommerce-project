"use client"
import '../styles/globals.scss';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import HotCategory from "./components/HotCategory";
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/client';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <HeroSection />
      <HotCategory />
      <ProductSection />
    </ApolloProvider>
  );
}
