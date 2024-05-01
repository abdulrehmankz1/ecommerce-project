import React from "react";
import jeansProduct from "../../../public/assets/images/jeans.svg";
import glasses from "../../../public/assets/images/glasess.svg";
import bag from "../../../public/assets/images/bag.svg";
import scarf from "../../../public/assets/images/scarf.svg";
import hoodie from "../../../public/assets/images/hoodie.svg";
import greenDress from "../../../public/assets/images/greenDress.svg";
import sneakers from "../../../public/assets/images/shose.svg";
import jacket from "../../../public/assets/images/jacket.svg";

import Image from "next/image";

const ProductSection = () => {
  return (
    <div className="container mx-auto">
      <div className="product-section">
        <h2 className="text-center">Or subscribe to the newsletter</h2>
        <div>
          <nav className="flex items-center justify-between bg-white py-7">
            <div className="flex">
              <ul className="flex">
                <li className="mr-5">
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 ease-in-out"
                  >
                    All Products
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 ease-in-out"
                  >
                    T-Shirt
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 ease-in-out"
                  >
                    Hoodies
                  </a>
                </li>
                <li className="mr-5">
                  <a
                    href="#"
                    className="text-gray-500 transition-colors duration-300 ease-in-out"
                  >
                    Jacket
                  </a>
                </li>
              </ul>
            </div>
            <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500">
              <i className="fa-solid fa-filter text-lg mr-1"></i>
              Filter
            </button>
          </nav>
          <div className="cards flex">
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={jeansProduct}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Adicolor Classics Joggers
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight ">$63.85</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image className="object-cover" src={bag} alt="product image" />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Nike Sportswear Futura Luxe
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">Bag</h5>
                  <h5 className="text-sm tracking-tight ">$130.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={scarf}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Geometric print Scarf
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Scarf
                  </h5>
                  <h5 className="text-sm tracking-tight ">$53.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={hoodie}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Yellow Reserved Hoodie
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight ">$155.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="cards flex">
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={greenDress}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">Basic Dress Green</h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight ">$236.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={sneakers}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Nike Air Zoom Pegasus
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Shoes
                  </h5>
                  <h5 className="text-sm tracking-tight ">$198.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={jacket}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">Nike Repel Miler</h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight ">$120.50</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <a className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={glasses}
                  alt="product image"
                />
              </a>
              <div className="mt-4 px-3 pb-5">
                <a href="#">
                  <h5 className="text-sm tracking-tight ">
                    Nike Sportswear Futura Luxe
                  </h5>
                </a>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400">
                    Glasses
                  </h5>
                  <h5 className="text-sm tracking-tight ">$160.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;