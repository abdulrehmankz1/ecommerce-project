import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyImage from '../../../public/assets/images/dummy-image.png';
import { CardProps } from './types';



const Card = ({ product, imageWidth = 270, imageHeight = 150 }: CardProps) => {
  const imageUrl = product.primaryImage?.URLs?.original || dummyImage;

  return (
    <div className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md">
      <Link className="relative flex overflow-hidden" href={`/products/${product.slug}`}>
        <Image className="object-cover" src={imageUrl} alt="product image" width={imageWidth} height={imageHeight} />
      </Link>
      <div className="mt-4 px-3 pb-5">
        <h5 className="text-sm tracking-tight font-bold font-sans">{product.title}</h5>
        <div className="mt-2">
          <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{product.pricing[0]?.displayPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
