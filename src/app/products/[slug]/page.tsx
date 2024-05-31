"use client";
import { useQuery, gql } from "@apollo/client";
import client from '@/lib/client';
import { useParams } from 'next/navigation';
import "../../../styles/globals.scss";
import Image from "next/image";
import dummyImage from "../../../../public/assets/images/dummy-image.png";
import { useState, useEffect } from "react";
import SkeletonLoading from "./SkeletonLoading";

interface Pricing {
  displayPrice: string;
}

interface Variant {
  _id: string;
  title: string;
  attributeLabel: string;
  optionTitle: string;
  pricing: Pricing[];
}

interface Product {
  _id: string;
  title: string;
  description: string;
  pricing: Pricing[];
  primaryImage: {
    URLs: {
      medium: string;
      small: string;
      original: string;
    };
  };
  variants: Variant[];
}

const GET_PRODUCT_DETAILS = gql`
  query GetProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        _id
        title
        description
        pricing {
          displayPrice
        }
        primaryImage {
          URLs {
            medium
            small
            original
          }
        }
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            currency {
              code
            }
          }
        }
      }
    }
  }
`;

const ProductDetails = () => {
  const { slug } = useParams();
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  const { loading, error, data } = useQuery<{ catalogItemProduct: { product: Product } }>(GET_PRODUCT_DETAILS, {
    variables: {
      shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==",
      slugOrId: slug,
    },
    client: client,
    skip: !slug,
  });

  useEffect(() => {
    if (data && data.catalogItemProduct && data.catalogItemProduct.product && data.catalogItemProduct.product.variants.length > 0) {
      setSelectedVariant(data.catalogItemProduct.product.variants[0]);
    }
  }, [data]);

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error loading data...</p>;

  if (!data || !data.catalogItemProduct || !data.catalogItemProduct.product) {
    return <p>No product data available.</p>;
  }

  const product = data.catalogItemProduct.product;

  const renderPrice = (variant: Variant) => {
    return <>{variant.pricing[0].displayPrice}</>;
  };

  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  const displayedVariant = selectedVariant || product.variants[0];
  const imageUrl = product.primaryImage?.URLs?.original || dummyImage;

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
              <p className="text-xl font-semibold">
                {renderPrice(displayedVariant)}
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="bg-gray-200 p-2 rounded">
                  {displayedVariant.title}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4 mt-24">
            <h3 className="mb-0 text-gray-500">Variants</h3>
            <div className="flex space-x-2 mt-2">
              {product.variants.map((variant) => (
                <button
                  key={variant._id}
                  className={`border p-2 rounded ${selectedVariant?._id === variant._id
                    ? "bg-black text-white transition duration-300"
                    : ""
                    }`}
                  onClick={() => handleVariantSelect(variant)}
                >
                  {variant.optionTitle}
                </button>
              ))}
            </div>
          </div>
          <button className="add-to-cart bg-black text-white p-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
