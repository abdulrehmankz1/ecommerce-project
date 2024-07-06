import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type CardProps = {
  href: string;
  title: string;
  pricing: { displayPrice: string }[];
  imageUrl: string | StaticImageData;
  imageWidth?: number;
  imageHeight?: number;
};

const Card = ({ href, title, pricing, imageUrl, imageWidth = 270, imageHeight = 150 }: CardProps) => {
  return (
    <div className="m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-lg shadow-md">
      <Link className="flex overflow-hidden" href={href}>
        <Image className="object-cover" src={imageUrl} alt="product image" width={imageWidth} height={imageHeight} />
      </Link>
      <div className="mt-4 px-3 pb-5">
        <h5 className="text-sm tracking-tight font-bold font-sans">{title}</h5>
        <div className="mt-2">
          <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{pricing[0]?.displayPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
