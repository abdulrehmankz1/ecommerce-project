import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const GET_PRODUCTS_QUERY = gql`
  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]!) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              description
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY, {
    variables: {
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
      tagIds: ["cmVhY3Rpb24vdGFnOlF2cmozWG95U3NvS1BkM3hL"],
    },
  });

  useEffect(() => {
    console.log("Data:", data);
  }, [data]);

  const [selectedVariants, setSelectedVariants] = useState<any[]>([]);

  const handleClick = (variants: any[]) => {
    setSelectedVariants(variants);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.catalogItems.edges.map((edge: any) => edge.node.product);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: any) => (
          <div key={product._id} className="bg-white shadow-md p-4">
            <button
              onClick={() => handleClick(product.variants)}
              className="text-blue-500 font-bold hover:text-red-500 transition-colors duration-300 ease-in-out"
            >
              {product.title}
            </button>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Selected Product Variants:</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedVariants.map((variant: any) => (
            <div key={variant._id} className="bg-white shadow-md p-4">
              <h3 className="text-lg font-bold">{variant.title}</h3>
              <p className="text-gray-600 text-[9px]">Variant ID: {variant._id}</p>
              <div className="mt-2">
                <Image src={variant.media.URLs} alt="Variant Image" width={200} height={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
