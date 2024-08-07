"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch, IoCartOutline, IoClose } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import CartModal from "./CartModal";
import { useCart } from "../context/CartContext";
import FavoriteModal from "./FavoriteModal"; // Ensure this is a default export
import logo from "../../../public/assets/images/ecommerce-logo-1.png";
import { useFavorites } from "../context/FavoriteContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
  const { state } = useCart();
  const { state: favoritesState } = useFavorites();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  const toggleFavoriteModal = () => {
    setFavoriteModalOpen(!favoriteModalOpen);
  };

  return (
    <div className="">
      <nav className="bg-white border-gray-200 mt-5 px-3 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} alt="" height={60} width={200} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="relative w-[220px] me-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-[40px] text-[#7a7a7a] ps-5 py-2 pe-10 bg-[#f5f5f5] rounded nav-input me-4"
              />
              <IoSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#7a7a7a]" />
            </div>
            <button
              onClick={toggleFavoriteModal}
              className="relative cursor-pointer"
            >
              <IoMdHeartEmpty className="text-3xl flex self-center heart-icon" />
              {favoritesState.items.length > 0 && (
                <span className="absolute top-[2px] right-3.5 bg-red-600 text-white text-xs rounded-full px-1">
                  {favoritesState.items.length}
                </span>
              )}
            </button>
            <button
              className="relative cursor-pointer"
              onClick={toggleCartModal}
            >
              <IoCartOutline className="text-3xl" />
              {state.items.length > 0 && (
                <span className="absolute top-0 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                  {state.items.length}
                </span>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"
              } md:block items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="hidden md:flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/"
                  className="relative block py-2 px-3 md:p-0 text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/contact"
                  className="relative block py-2 px-3 md:p-0 text-black"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/about"
                  className="relative block py-2 px-3 md:p-0 text-black"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/signup"
                  className="relative block py-2 px-3 md:p-0 text-black"
                  aria-current="page"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white w-64 h-full shadow-lg p-4">
            <button onClick={toggleMobileMenu} className="text-xl mb-4">
              <IoClose />
            </button>
            <ul className="flex flex-col space-y-4">
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/"
                  className="relative block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/contact"
                  className="relative block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/about"
                  className="relative block py-2 px-3 text-black"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="transition duration-300 ease-in-out hover:underline">
                <Link
                  href="/signup"
                  className="relative block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <CartModal open={cartModalOpen} onClose={toggleCartModal} />
      <FavoriteModal open={favoriteModalOpen} onClose={toggleFavoriteModal} />
    </div>
  );
};

export default Navbar;
