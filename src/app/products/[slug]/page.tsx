"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import useProductDetails from '@/app/hooks/useProductDetails';
import SkeletonLoading from "@/app/products/[slug]/SkeletonLoading";
import { CartItem, useCart } from '@/app/context/CartContext';
import Notification from '@/app/components/Notification';

import dummyImage from "../../../../public/assets/images/dummy-image.png";

const ProductDetails = () => {
  const { slug } = useParams();
  const productSlug = Array.isArray(slug) ? slug[0] : slug;
  const { loading, error, data, selectedVariant, setSelectedVariant } = useProductDetails(productSlug);
  const { dispatch } = useCart();
  const [notification, setNotification] = useState<string | null>(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [quantity, setQuantity] = useState<number>(1); 

  const handleAddToCartNotification = (message: string) => {
    setNotification(message);
    setNotificationVisible(true);
    setTimeout(() => setNotificationVisible(false), 1000);
  };

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error loading data...</p>;
  if (!data || !data.catalogItemProduct || !data.catalogItemProduct.product) {
    return <p>No product data available.</p>;
  }

  const product = data.catalogItemProduct.product;
  const displayedVariant = selectedVariant || product.variants[0];
  const imageUrl = product.primaryImage?.URLs?.original || dummyImage;

  const handleAddToCart = () => {
    if (displayedVariant) {
      const cartItem: CartItem = {
        id: `${product._id}-${displayedVariant._id}`,
        product: {
          _id: product._id,
          title: product.title,
          primaryImage: product.primaryImage,
        },
        variant: {
          _id: displayedVariant._id,
          title: displayedVariant.title,
          pricing: displayedVariant.pricing.map(p => ({
            price: parseFloat(p.displayPrice.replace(/[^0-9.-]+/g, "")),
            displayPrice: p.displayPrice,
          })),
          optionTitle: displayedVariant.optionTitle,
        },
        quantity: quantity,  // Use selected quantity
      };
      dispatch({ type: 'ADD_ITEM', item: cartItem });
      handleAddToCartNotification(`Added ${quantity} ${product.title} (${displayedVariant.optionTitle}) to cart!`);
    }
  };

  return (
    <div className="container mx-auto my-20">
      <div className="grid-cols-2 grid">
        <div className="product-image mx-auto">
          <Image src={imageUrl} alt={product.title} width={300} height={300} />
        </div>
        <div className="ms-10 flex flex-col pt-4">
          <div>
            <h1 className="text-2xl font-bold mb-0.5">{displayedVariant.title}</h1>
            <p className="text-gray-500">{product.description}</p>
            <div className="mt-4">
              <p className="text-xl font-semibold">{displayedVariant.pricing[0].displayPrice}</p>
              <div className="flex space-x-2 mt-2">
                <span className="bg-gray-200 p-2 rounded">{displayedVariant.optionTitle}</span>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-6">
            <h3 className="mb-0 text-gray-500">Variants</h3>
            <div className="flex space-x-2 mt-2">
              {product.variants.map((variant) => (
                <button
                  key={variant._id}
                  className={`border p-2 rounded ${selectedVariant?._id === variant._id ? "bg-black text-white transition duration-300" : ""}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.optionTitle}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4 mt-6 flex items-center space-x-4">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="border rounded px-4 py-2 w-24 text-center"
            />
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart bg-black text-white p-2 rounded mt-4" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      {notification && (
        <Notification
          message={notification}
          visible={notificationVisible}
          onClose={() => setNotificationVisible(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;
