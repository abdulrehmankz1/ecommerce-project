import { gql } from '../../__generated__/gql';


export const GET_PRODUCTS = gql(/* GraphQL */ `
  query CatalogItemProduct($shopIds: [ID!]!, $tagIds: [ID!]) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      edges {
        node {
          __typename
          ... on CatalogItemProduct {
            product {
              _id
              title
              slug
              description
              primaryImage {
                URLs {
                  original
                }
              }
              pricing {
                displayPrice
              }
            }
          }
        }
      }
    }
  }
`);

export const GET_TAGS = gql(/* GraphQL */ `
  query {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        _id
        name
        displayTitle
        slug
      }
    }
  }
`);

export const GET_PRODUCT_DETAILS = gql(/* GraphQL */ `
  query GetProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        _id
        title
        description
        pricing {
          displayPrice
        }
        primaryImage {
          URLs {
            medium
            small
            original
          }
        }
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            currency {
              code
            }
          }
        }
      }
    }
  }
`);

