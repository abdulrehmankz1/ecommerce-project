import { useRouter } from 'next/router';
import { useQuery, gql } from "@apollo/client";
import Image from 'next/image';
import SkeletonLoading from '../SkeletonLoading';

export interface Variant {
  _id: string;
  title: string;
  attributeLabel: string;
  optionTitle: string;
  pricing: {
    displayPrice: string;
    price: number;
    currency: {
      code: string;
    };
  };
}

export interface Product {
  title: string;
  description: string;
  variants: Variant[];
  primaryImage: {
    URLs: {
      medium: string;
      original: string;
    };
  };
}

export interface CatalogItemProductResponse {
  catalogItemProduct: {
    product: Product;
  };
}

export const GET_PRODUCT = gql`
  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        title
        description
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            price
            currency {
              code
            }
          }
        }
        primaryImage {
          URLs {
            medium
            original
          }
        }
      }
    }
  }
`;

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery<CatalogItemProductResponse>(GET_PRODUCT, {
    variables: {
      shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==",
      slugOrId: id as string,
    },
  });

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error loading data: {error.message}</p>;
  if (!data) return <p>No data available</p>; // Check if data is undefined

  const { product } = data.catalogItemProduct;

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <Image
            className="object-cover w-full"
            src={product.primaryImage.URLs.medium}
            alt={product.title}
            width={500} // Provide width and height to Image component
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4">{product.description}</p>
          <div className="mt-4">
            {product.variants.map((variant: Variant) => (
              <div key={variant._id}>
                <h3 className="text-xl">{variant.title}</h3>
                <p>{variant.attributeLabel}: {variant.optionTitle}</p>
                <p>{variant.pricing.displayPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
