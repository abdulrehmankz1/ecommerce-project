import { useQuery } from '@apollo/client';
import { GET_TAGS } from '../queries';

export const useGetTags = (shopId: string) => {
  const { loading, error, data } = useQuery(GET_TAGS, {
    variables: { shopId },
  });
  return { loading, error, data };
};