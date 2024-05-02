import React from 'react'
import Image from 'next/image';
import banner from '../../../public/assets/images/image-product.svg';

function HeroSection() {
  return (
    <div className='hero_section pt-20 pb-16'>
      <div className='container mx-auto px-5'>
        <div className="grid grid-cols-2 ">
          <div className="pt-14">
            <h2 className='title font-roboto font-light text-[#072b4b]'>
              Collections
            </h2>
            <p className='font-roboto text-[#072b4b] text-3xl my-8'>
              you can explore ans shop many differnt collection
              from various barands here.
            </p>
            <button className='flex align-middle font-roboto text-2xl bg-[#1e2832] text-white py-5 px-7 hover:bg-red-500 transition-colors duration-300 ease-in-out'>
              <i className="fa-solid fa-bag-shopping mr-2 text-2xl mt-[2px]"></i>
              shop now
            </button>
          </div>
          <div className="p-4">
            <Image src={banner} alt="" height="550" width="445" className='mx-auto' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection