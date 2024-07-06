import { useQuery } from '@apollo/client';

import { GET_TAGS } from '@/app/queries';
import { Tag } from '@/app/components/types';

export const useGetTags = (shopId: string) => {
  const { loading, error, data } = useQuery(GET_TAGS, {
    variables: { shopId },
  });

  const menuItems: Tag[] = data?.tags?.nodes || [];
  return { loading, error, data, menuItems };
};
