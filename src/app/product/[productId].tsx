import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import Image from 'next/image';
import SkeletonLoading from '../components/SkeletonLoading';

const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($productId: ID!) {
    product(id: $productId) {
      _id
      title
      description
      pricing {
        displayPrice
      }
      images {
        url
      }
    }
  }
`;

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    console.log('Router query:', router.query);
    console.log('Product ID:', productId);
  }, [router.query, productId]);

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { productId },
    skip: !productId, 
  });

  useEffect(() => {
    if (error) {
      console.error('GraphQL query error:', error);
    }
    if (data) {
      console.log('GraphQL query data:', data);
    }
  }, [error, data]);

  if (!productId) return null;

  if (loading) return <SkeletonLoading />;
  if (error) return <p>Error loading product details...</p>;

  const { product } = data;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="mt-4">
        <Image src={product.images[0].url} alt={product.title} className="w-full h-auto" />
      </div>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-lg font-bold">{product.pricing[0].displayPrice}</p>
    </div>
  );
};

export default ProductDetails;
