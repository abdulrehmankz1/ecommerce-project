"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery, gql } from "@apollo/client";
import dummyImage from "../../../public/assets/images/dummy-image.png";
import SkeletonLoading from './SkeletonLoading';
import "../../styles/globals.scss";

interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  pricing: { displayPrice: string }[];
  primaryImage: {
    URLs: {
      medium: string;
      small: string;
      original: string;
    };
  };
}

const GET_PRODUCTS = gql`
  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              _id
              title
              slug
              description
              primaryImage {
                URLs {
                  original
                }
              }
              pricing {
                displayPrice
              }
            }
          }
        }
      }
    }
  }
`;

const AllProductsQuery = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
    },
  });

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className="container mx-auto flex flex-wrap">
      {data.catalogItems.edges.map(({ node }: { node: { product: Product } }) => {
        const imageUrl = node.product.primaryImage?.URLs?.original || dummyImage;

        return (
          <div key={node.product._id} className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md">
            <Link className="relative flex overflow-hidden" href={`/products/${node.product.slug}`}>
              <Image className="object-cover" src={imageUrl} alt="product image" width={270} height={150} />
            </Link>
            <div className="mt-4 px-3 pb-5">
              <h5 className="text-sm tracking-tight font-bold font-sans">{node.product.title}</h5>
              <div className="mt-2">
                <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{node.product.pricing[0].displayPrice}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProductsQuery;
