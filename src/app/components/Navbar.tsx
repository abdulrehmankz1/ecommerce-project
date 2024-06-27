"use client";
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/ecommerce-logo-1.png';
import Link from 'next/link';
import MenuItem from './MenuItem';

const menuItems = [
  { text: "Jewelry & Accessories", href: "#" },
  { text: "Clothing & Shoes", href: "#" },
  { text: "Wedding & Party", href: "#" },
  { text: "Toys & Entertainment", href: "#" },
  { text: "Art & Collectibles", href: "#" },
  { text: "Craft Supplies & Tools", href: "#" }
];

function Navbar() {
  const handleMenuItemClick = () => {
    console.log('Select Menu Item');
  };

  return (
    <div className="container mx-auto pt-8">
      <div className="w-full inline-flex pb-6">
        <i className="fa-solid fa-magnifying-glass text-xl" style={{ display: 'flex', alignItems: "center" }}></i>
        <div className="flex items-center justify-center" style={{ position: "relative", left: "42%" }}>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" height="100" width="180" className='mx-auto' />
          </Link>
        </div>
        <div className="flex items-center ms-auto">
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
              onClick={handleMenuItemClick}
            />
          ))}
        </ul>
      
      </div>
    </div>
  );
}

export default Navbar;
