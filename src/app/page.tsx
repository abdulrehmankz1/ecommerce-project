"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import graphicStudio from '../../public/assets/images/brand-1.svg';
import salvaArt from '../../public/assets/images/brand-2.svg';
import goldenStudio from '../../public/assets/images/brand-3.svg';
import furnitureDesign from '../../public/assets/images/brand-4.svg';
import travel from '../../public/assets/images/brand-5.svg';
import banner from '../../public/assets/images/image-product.svg';
import { useSearchParams } from 'next/navigation';
import { CatalogItemsData, ProductListProps, Tag } from './components/types';
import Link from 'next/link';
import MenuItem from './components/MenuItem';
import { useGetTags } from './hooks/useGetTags';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './queries';
import SkeletonLoading from './components/SkeletonLoading';
import Card from './components/Card';

export default function Home({ products }: ProductListProps) {
  const { loading: tagsLoading, error: tagsError, data: TagsData } = useGetTags("cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==");
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    const tag = searchParams.get('tag');
    if (tag) {
      setSelectedItem(tag);
    } else {
      setSelectedItem('all-products');
    }
  }, [searchParams]);

  useEffect(() => {
    if (TagsData) {
      if (selectedItem && selectedItem !== 'all-products') {
        const selectedTag = TagsData.tags.nodes.find((tag: Tag) => tag.slug === selectedItem);
        if (selectedTag) {
          setSelectedTagId(selectedTag._id);
        } else {
          setSelectedTagId(null);
        }
      } else {
        setSelectedTagId(null);
      }
    }
  }, [TagsData, selectedItem]);

  const { loading, error, data } = useQuery<CatalogItemsData>(GET_PRODUCTS, {
    variables: {
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
      ...(selectedTagId && { tagIds: [selectedTagId] }),
    },
  });

  useEffect(() => {
    console.log('TagsData:', TagsData);
    console.log('Selected Item:', selectedItem);
    console.log('Selected Tag ID:', selectedTagId);
    console.log('Product Data:', data);
  }, [TagsData, selectedItem, selectedTagId, data]);

  if (tagsError || error) return <p>Error loading data...</p>;

  const handleMenuItemClick = (slug: string) => {
    setSelectedItem(slug);
  };

  const menuItems: Tag[] = TagsData?.tags?.nodes || [];

  return (
    <div>
      <section className='hero_section pt-20 pb-16'>
        <div className='container mx-auto px-5'>
          <div className="grid grid-cols-2 ">
            <div className="pt-14">
              <h2 className='title font-roboto font-light text-[#072b4b]'>
                Collections
              </h2>
              <p className='font-roboto text-[#072b4b] text-3xl my-8'>
                you can explore and shop many different collections from various brands here.
              </p>
              <button className='flex align-middle font-roboto text-2xl bg-[#1e2832] text-white py-5 px-7 hover:bg-red-500 transition-colors duration-300 ease-in-out'>
                <i className="fa-solid fa-bag-shopping mr-2 text-2xl mt-[2px]"></i>
                Shop Now
              </button>
            </div>
            <div className="p-4">
              <Image src={banner} alt="" height="550" width="445" className='mx-auto' />
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto'>
        <div className='flex justify-around align-middle my-20'>
          <Image src={graphicStudio} alt="graphicStudio" height="70" width="200" />
          <Image src={salvaArt} alt="salvaArt" height="70" width="200" />
          <Image src={goldenStudio} alt="goldenStudio" height="70" width="200" />
          <Image src={furnitureDesign} alt="furnitureDesign" height="70" width="200" />
          <Image src={travel} alt="travel" height="70" width="200" />
        </div>
      </section>
      <section className="container mx-auto">
        <div className="product-section">
          <h2 className="text-center text-5xl font-roboto font-medium mb-9">Or subscribe to the newsletter</h2>
          <div>
            <div className="container">
              <div className="flex items-center justify-between bg-white py-7">
                <div className="flex">
                  <ul className="flex">
                    <li className="mr-5">
                      <Link
                        href="/"
                        scroll={false}
                        className={`${!selectedItem || selectedItem === 'all-products' ? 'font-bold' : ''} hover:text-red-500 text-[#000000] transition-colors duration-300 ease-in-out`}
                      >
                        All Products
                      </Link>
                    </li>
                    {tagsLoading ? (
                      [...Array(9)].map((_, index) => (
                        <li key={index} className="mr-5">
                          <div className="font-sans bg-gray-200 h-6 w-20 animate-pulse"></div>
                        </li>
                      ))
                    ) : (
                      menuItems.map((menuItem) => {
                        const isActive = menuItem.slug === selectedItem;
                        return (
                          <MenuItem
                            key={menuItem._id}
                            onClick={handleMenuItemClick}
                            text={menuItem.displayTitle}
                            slug={menuItem.slug}
                            variant="primary"
                            isActive={isActive}
                          />
                        );
                      })
                    )}
                  </ul>
                </div>
                <button className="text-white py-2 px-4 rounded flex align-middle bg-gray-800 hover:bg-red-500 font-sans">
                  <i className="fa-solid fa-filter text-lg mr-1 mt-1"></i>
                  Filter
                </button>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="cards flex flex-wrap">
                {loading ? (
                  <SkeletonLoading />
                ) : (
                  data?.catalogItems?.edges?.map((edge) => {
                    if (!edge?.node || edge.node.__typename !== "CatalogItemProduct" || !edge.node.product) {
                      return null;
                    }
                    return <Card key={edge.node.product._id} product={edge.node.product} />;
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
