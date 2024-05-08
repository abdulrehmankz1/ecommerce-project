import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import jeansProduct from "../../../public/assets/images/bag.svg";
import { useSearchParams } from "next/navigation";

interface Tag {
  _id: string;
  name: string;
  displayTitle: string;
  slug: string;
}

interface Product {
  _id: string;
  title: string;
  description: string;
  pricing: { displayPrice: string }[];
}

const GET_TAGS = gql`
  query {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        _id
        name
        displayTitle
        slug
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              _id
              title
              description
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

const ProductSection = () => {
  const { loading: tagsLoading, error: tagsError, data: tagsData } = useQuery(GET_TAGS);
  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>(null);

  useEffect(() => {
    const tag = searchParams.get("tag");
    setSelectedItem(tag);
    setSelectedURL(window.location.pathname);
  }, [searchParams]);

  useEffect(() => {
    if (tagsData && selectedItem) {
      const selectedTag = tagsData.tags.nodes.find((tag: Tag) => tag.slug === selectedItem);
      if (selectedTag) {
        setSelectedTagId(selectedTag._id);
      }
    }
  }, [tagsData, selectedItem]);

  if (tagsLoading) return <p>Loading...</p>;
  if (tagsError) return <p>Error loading data...</p>;

  const menuItems: Tag[] = tagsData.tags.nodes;

  return (
    <div className="container mx-auto">
      <div className="product-section">
        <h2 className="text-center text-5xl font-roboto font-medium mb-9">Or subscribe to the newsletter</h2>
        <div>
          <div className="flex items-center justify-between bg-white py-7">
            <div className="flex">
              <ul className="flex">
                <li className="mr-5">
                  <Link href="/" scroll={false} className={`${!selectedItem ? "font-bold" : ""} hover:text-red-500 transition-colors duration-300 ease-in-out`}>
                    All Products
                  </Link>
                </li>
                {menuItems.map((menuItem: Tag) => {
                  const isActive = menuItem.slug === selectedItem || (!selectedItem && menuItem.name === "All Products");
                  return (
                    <li key={menuItem._id} className="mr-5">
                      <Link
                        href={{
                          pathname: selectedURL,
                          query: { tag: menuItem.slug },
                        }}
                        scroll={false}
                        className={`${isActive ? "font-bold text-black" : ""}  hover:text-red-500 transition-colors duration-300 ease-in-out text-[#808080] font-sans`}
                      >
                        {menuItem.displayTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500 font-sans">
              <i className="fa-solid fa-filter text-lg mr-1 mt-1"></i>
              Filter
            </button>
          </div>
          <div className="container mx-auto">
            <div className="cards flex">
              {selectedItem === null && <AllProductsQueryComponent />}
              {selectedTagId && selectedItem !== null && (
                <ProductsQueryComponent selectedTagId={selectedTagId} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProductsQueryComponent = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className="container mx-auto flex flex-wrap">
      {data.catalogItems.edges.map(({ node }: { node: { product: Product } }) => (
        <div key={node.product._id} className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md">
          <Link className="relative flex overflow-hidden " href="#">
            <Image className="object-cover" src={jeansProduct} alt="product image" />
          </Link>
          <div className="mt-4 px-3 pb-5">
            <Link href="#">
              <h5 className="text-sm tracking-tight font-bold font-sans">{node.product.title}</h5>
            </Link>
            <div className="mt-2">
              <p className="text-sm tracking-tight text-gray-400 font-sans">{node.product.description}</p>
              <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{node.product.pricing[0].displayPrice}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductsQueryComponent = ({ selectedTagId }: { selectedTagId: string }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
      tagIds: [selectedTagId],
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className="container mx-auto flex flex-wrap">
      {data.catalogItems.edges.map(({ node }: { node: { product: Product } }) => (
        <div key={node.product._id} className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md">
          <Link className="relative flex overflow-hidden " href="#">
            <Image className="object-cover" src={jeansProduct} alt="product image" />
          </Link>
          <div className="mt-4 px-3 pb-5">
            <h5 className="text-sm tracking-tight font-bold font-sans">{node.product.title}</h5>
            <div className="mt-2">
              <p className="text-sm tracking-tight text-gray-400 font-sans">{node.product.description}</p>
              <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{node.product.pricing[0].displayPrice}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
