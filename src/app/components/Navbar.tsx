"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MenuItem from "@/app/components/MenuItem";

import logo from '../../../public/assets/images/ecommerce-logo-1.png';

const menuItems = [
  { text: "Jewelry & Accessories", href: "#" },
  { text: "Clothing & Shoes", href: "#" },
  { text: "Wedding & Party", href: "#" },
  { text: "Toys & Entertainment", href: "#" },
  { text: "Art & Collectibles", href: "#" },
  { text: "Craft Supplies & Tools", href: "#" }
];

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="container mx-auto pt-8 relative">
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center">
          {!searchOpen && (
            <i
              className="fa-solid fa-magnifying-glass text-xl cursor-pointer mr-4"
              onClick={toggleSearch}
            ></i>
          )}
          {searchOpen && (
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none"
              />
              <button
                className="ml-2 text-gray-400 hover:text-gray-600"
                onClick={toggleSearch}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <Link href={"/"} className="absolute left-1/2 transform -translate-x-1/2">
          <Image src={logo} alt="Logo" height="100" width="180" />
        </Link>
        <div className="flex items-center">
          <button className="flex items-center justify-center hover:text-red-500 transition-colors duration-300 ease-in-out">
            <i className="fa-solid fa-user mr-2 text-xl text-[#072b4b]"></i>
            <p className="font-roboto font-normal text-lg text-[#072b4b]">Account</p>
          </button>
          <button className="flex items-center justify-center ml-4 hover:text-red-500 transition-colors duration-300 ease-in-out">
            <i className="fa-solid fa-bag-shopping mr-2 text-xl text-[#072b4b]"></i>
            <p className="font-roboto font-normal text-lg text-[#072b4b]">Shopping</p>
          </button>
        </div>
      </div>
      <hr />
      <div className='pt-7'>
        <ul className="flex justify-between">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              text={item.text}
              variant="primary"
              slug={''}
              isActive={false}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
