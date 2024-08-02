// Interfaces for Products
export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  pricing: { displayPrice: string }[];
  primaryImage: {
    URLs: {
      medium: string;
      small: string;
      original: string;
    };
  };
}

export interface CatalogItemProductNode {
  __typename: 'CatalogItemProduct';
  product?: Product | null;
}

export interface CatalogItemContentNode {
  __typename: 'CatalogItemContent';
}

export type CatalogItemNode = CatalogItemProductNode | CatalogItemContentNode | null;

export interface CatalogItemEdge {
  __typename: 'CatalogItemEdge';
  node?: CatalogItemNode;
  selectedTagId: string;
}

export interface CatalogItemsData {
  catalogItems: {
    edges: (CatalogItemEdge | null)[];
  } | null;
}

// Interfaces for Tags
export interface Tag {
  _id: string;
  name: string;
  displayTitle: string;
  slug: string;
}

export interface TagsData {
  tags: {
    nodes: Tag[];
  };
}

export interface Pricing {
  displayPrice: string;
}

export interface Variant {
  _id: string;
  title: string;
  attributeLabel: string;
  optionTitle: string;
  pricing: Pricing[];
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  pricing: Pricing[];
  primaryImage: {
    URLs: {
      medium: string;
      small: string;
      original: string;
    };
  };
  variants: Variant[];
}

export interface ProductListProps {
  products: (CatalogItemEdge | null)[];
}

export type MenuItemProps = {
  text: string;
  slug: string;
  isActive: boolean;
  variant: 'primary' | 'secondary';
};

export type CardProps = {
  product: Product;
  imageWidth?: number;
  imageHeight?: number;
};

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}