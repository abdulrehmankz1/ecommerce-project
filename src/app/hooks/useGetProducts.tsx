import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries';

export const useGetProducts = (shopIds: string[]) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { shopIds },
  });
  return { loading, error, data };
};