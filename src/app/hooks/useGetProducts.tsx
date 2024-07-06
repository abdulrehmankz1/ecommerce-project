import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/app/queries';

import dummyImage from "../../../public/assets/images/dummy-image.png";

export const useGetProducts = (shopIds: string[], selectedTagId?: string | null) => {
  const variables = {
    shopIds,
    ...(selectedTagId && { tagIds: [selectedTagId] }),
  };

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables,
  });

  const products = data?.catalogItems?.edges
    .filter((edge: any) => edge?.node?.__typename === "CatalogItemProduct" && edge.node.product)
    .map((edge: any) => {
      const { slug, title, pricing, primaryImage } = edge.node.product;
      const imageUrl = primaryImage?.URLs?.original || dummyImage;
      const href = `/products/${slug}`;
      return { id: edge.node.product._id, href, title, pricing, imageUrl };
    }) || [];

  return { loading, error, data, products };
};
