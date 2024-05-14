import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SkeletonLoading from "./SkeletonLoading";
import ProductsQuery from "./ProductsQuery";
import AllProductsQuery from "./AllProductsQuery";

interface Tag {
  _id: string;
  name: string;
  displayTitle: string;
  slug: string;
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

  if (tagsLoading) {
    return (
      <div className="container mx-auto">
        <div className="product-section">
          <h2 className="text-center text-5xl font-roboto font-medium mb-9">Or subscribe to the newsletter</h2>
          <div>
            <div className="flex items-center justify-between bg-white py-7">
              <div className="flex">
                <ul className="flex">
                  <li className="mr-5">
                    <Link href="/" scroll={false}  className={`${!selectedItem ? "font-normal" : ""} hover:text-red-500 transition-colors duration-300 ease-in-out`}>
                      All Products
                    </Link>
                  </li>
                  {[...Array(9)].map((_, index) => (
                    <li key={index} className="mr-5">
                      <div className="font-sans bg-gray-200 h-6 w-20 animate-pulse"></div>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500 font-sans">
                <i className="fa-solid fa-filter text-lg mr-1 mt-1"></i>
                Filter
              </button>
            </div>
            <div className="container mx-auto">
              <div className="cards flex">
                <SkeletonLoading />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
                  <Link href="/" scroll={false} className={`${!selectedItem ? "font-bold" : ""} hover:text-red-500 text-[#000000] transition-colors duration-300 ease-in-out`}>
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
              {selectedItem === null && <AllProductsQuery />}
              {selectedTagId && selectedItem !== null && (
                <ProductsQuery selectedTagId={selectedTagId} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<><AllProductsQuery /><ProductsQuery selectedTagId={""} /></>

export default ProductSection;
