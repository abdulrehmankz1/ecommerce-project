import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_PRODUCT_DETAILS } from "../queries";
import { Product, Variant } from "../components/types";

const useProductDetails = (slug: string | undefined) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const { loading, error, data } = useQuery<{
    catalogItemProduct: { product: Product };
  }>(GET_PRODUCT_DETAILS, {
    variables: {
      shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==",
      slugOrId: slug,
    },
    skip: !slug,
  });

  useEffect(() => {
    if (
      data &&
      data.catalogItemProduct &&
      data.catalogItemProduct.product &&
      data.catalogItemProduct.product.variants.length > 0
    ) {
      setSelectedVariant(data.catalogItemProduct.product.variants[0]);
    }
  }, [data]);

  return { loading, error, data, selectedVariant, setSelectedVariant };
};

export default useProductDetails;
