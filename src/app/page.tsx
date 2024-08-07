"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import MenuItem from "@/app/components/MenuItem";
import SkeletonLoading from "@/app/components/SkeletonLoading";
import Card from "@/app/components/Card";
import { useGetProducts } from "@/app/hooks/useGetProducts";
import { useGetTags } from "@/app/hooks/useGetTags";
import { Tag } from "@/app/components/types";

import filter from "../../public/assets/images/filter.svg";

const Home = () => {
  const searchParams = useSearchParams();
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const slug = searchParams.get("tag");
  const {
    loading: tagsLoading,
    error: tagsError,
    data: tagsData,
    menuItems,
  } = useGetTags("cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==");

  const { loading, error, products } = useGetProducts(
    ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
    selectedTagId
  );

  useEffect(() => {
    setSelectedTagId(null);
    if ((!slug && !tagsData) || slug === "all-products") return;

    if (tagsData) {
      const selectedTag = tagsData.tags.nodes.find(
        (tag: Tag) => tag.slug === slug
      );
      if (selectedTag) {
        setSelectedTagId(selectedTag._id);
      }
    }
  }, [tagsData, slug]);

  if (tagsError || error) return <p>Error loading data...</p>;

  return (
    <div>
      <section className="container mx-auto mt-12">
        <div className="product-section">
          <h2 className="text-center text-5xl font-roboto font-medium mb-9">
            Discover Our Product Collections
          </h2>
          <div>
            <div className="container">
              <div className="flex items-center justify-between bg-white py-7">
                <div className="flex">
                  <ul className="flex">
                    <li className="mr-5">
                      <Link
                        href="/"
                        scroll={false}
                        className={`${
                          !selectedTagId || selectedTagId === "all-products"
                            ? "font-bold"
                            : ""
                        } hover:text-red-500 text-[#000000] transition-colors duration-300 ease-in-out`}
                      >
                        All Products
                      </Link>
                    </li>
                    {tagsLoading
                      ? [...Array(9)].map((_, index) => (
                          <li key={index} className="mr-5">
                            <div className="font-sans bg-gray-200 h-6 w-20 animate-pulse"></div>
                          </li>
                        ))
                      : menuItems.map((menuItem) => {
                          const isActive = menuItem._id === selectedTagId;
                          return (
                            <MenuItem
                              key={menuItem._id}
                              text={menuItem.displayTitle}
                              slug={menuItem.slug}
                              variant="primary"
                              isActive={isActive}
                            />
                          );
                        })}
                  </ul>
                </div>
                <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500 font-sans">
                  <Image
                    src={filter}
                    alt="filter"
                    height={25}
                    width={25}
                    className="mr-1"
                  />
                  Filter
                </button>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="cards flex flex-wrap">
                {loading ? (
                  <SkeletonLoading />
                ) : (
                  products.map((product: any) => (
                    <Card
                      key={product.id}
                      href={product.href}
                      title={product.title}
                      pricing={product.pricing}
                      imageUrl={product.imageUrl}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
