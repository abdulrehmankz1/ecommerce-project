import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/assets/images/ecommerce-logo-1.png";
import paymentsIcons from "../../../public/assets/images/icons_payment.svg";

function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-[#ffffff]">
        <div className="md:flex md:justify-between mt-32 mb-20 container">
          <div className="md:w-4/12 mb-6 md:mb-0 me-14">
            <Link href="#" className="flex items-center">
              <Image src={logo} alt="" height="100" width="180" />
            </Link>
            <p className="mt-8 text-base font-normal text-[#446d91] font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="grid grid-cols-8 gap-8 sm:gap-6 sm:grid-cols-3 md:w-8/12">
            <div>
              <h2 className="mb-6 text-base font-semibold font-sans text-[#000000]">
                CATALOG
              </h2>
              <ul className="text-sm font-normal font-sans text-primary">
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Pizza
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Fries
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Drinks
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Sandwiches
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Italian Rolls
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-semibold font-sans text-[#000000]">
                ABOUT US
              </h2>
              <ul className="text-sm font-normal text-primary font-sans">
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Our Producers
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Sitemap
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-semibold font-sans text-[#000000]">
                CUSTOMER SERVICES
              </h2>
              <ul className="text-sm font-normal text-primary font-sans">
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Track Your Order
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Product Care & Repair
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Book an Appointment
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:underline">
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[100%] bg-[#1e2832] py-4">
        <div className="sm:flex container mx-auto sm:items-center sm:justify-between ">
          <span className="text-base text-white sm:text-center">
            © 2024 E-commerce Mart.
          </span>
          <Image
            src={paymentsIcons}
            alt="payments icons"
            height="100"
            width="283"
          />
          <Link href="#">
            <span className="text-base text-white sm:text-center">
              Scroll to top
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
