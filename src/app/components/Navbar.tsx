import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/assets/images/ecommerce-logo-1.png";
import search from "../../../public/assets/images/search.svg";
import user from "../../../public/assets/images/user.svg";
import shoppingBag from "../../../public/assets/images/shopping-bag.svg";

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
            <Image
              src={search}
              alt="search"
              className="m-0 cursor-pointer"
              height={22}
              width={22}
              onClick={toggleSearch}
            />
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
        <Link
          href={"/"}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <Image src={logo} alt="Logo" height="100" width="180" />
        </Link>
        <div className="flex items-center">
          <button className="flex items-center justify-center hover:text-red-500 transition-colors duration-300 ease-in-out">
            <Image
              src={user}
              alt="user"
              className="my-0 mr-1 cursor-pointer"
              height={22}
              width={22}
            />
            <p className="font-roboto font-normal text-lg text-[#072b4b]">
              Account
            </p>
          </button>
          <button className="flex items-center justify-center ml-4 hover:text-red-500 transition-colors duration-300 ease-in-out">
            <Image
              src={shoppingBag}
              alt="shopping bag"
              className="my-0 mr-1 cursor-pointer"
              height={22}
              width={22}
            />
            <p className="font-roboto font-normal text-lg text-[#072b4b]">
              Shopping
            </p>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
