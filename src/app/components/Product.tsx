import React from 'react'
import jeansProduct from "../../../public/assets/images/jeans.svg";
import glasses from "../../../public/assets/images/glasess.svg";
import bag from "../../../public/assets/images/bag.svg";
import scarf from "../../../public/assets/images/scarf.svg";
import hoodie from "../../../public/assets/images/hoodie.svg";
import greenDress from "../../../public/assets/images/greenDress.svg";
import sneakers from "../../../public/assets/images/shose.svg";
import jacket from "../../../public/assets/images/jacket.svg";

import Image from "next/image";
import Link from "next/link";

function Product() {
  return (
    <div>
      <div className="cards flex">
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={jeansProduct}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Adicolor Classics Joggers
                  </h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$63.85</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image className="object-cover" src={bag} alt="product image" />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Nike Sportswear Futura Luxe
                  </h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">Bag</h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$130.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={scarf}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Geometric print Scarf
                  </h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Scarf
                  </h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$53.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={hoodie}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Yellow Reserved Hoodie
                  </h5>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Dress
                  </h5>
                  <div>
                    <span className="text-sm tracking-tight text-gray-400 mr-2 font-semibold font-sans"><del>$364.00</del></span>
                    <span className="text-sm tracking-tight text-red-500 font-semibold font-sans">
                      $155.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards flex">
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={greenDress}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">Basic Dress Green</h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$236.00</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={sneakers}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Nike Air Zoom Pegasus
                  </h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Shoes
                  </h5>
                  <div>
                    <span className="text-sm tracking-tight text-gray-400 mr-2 font-semibold font-sans"><del>$220.00</del></span>
                    <span className="text-sm tracking-tight text-red-500 font-semibold font-sans">
                      $198.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={jacket}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">Nike Repel Miler</h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Dress
                  </h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$120.50</h5>
                </div>
              </div>
            </div>
            <div className="relative m-5 flex w-full max-w-[312px] flex-col overflow-hidden bg-white hover:shadow-md ">
              <Link className="relative flex overflow-hidden " href="#">
                <Image
                  className="object-cover"
                  src={glasses}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-3 pb-5">
                <Link href="#">
                  <h5 className="text-sm tracking-tight font-sans">
                    Nike Sportswear Futura Luxe
                  </h5>
                </Link>
                <div className="mt-2  flex items-center justify-between">
                  <h5 className="text-sm tracking-tight text-gray-400 font-sans">
                    Glasses
                  </h5>
                  <h5 className="text-sm tracking-tight font-semibold font-sans">$160.00</h5>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Product