# E-Commerce Web App

This is a Next.js e-commerce web application built with TypeScript and Tailwind CSS. It fetches data from a GraphQL API and offers features such as product filtering by tags, product detail pages, and reusable components.

## Features

- **Data Fetching:** Uses GraphQL to fetch product and tag data from an API.
- **Tag Filtering:** Users can filter products by tags like "All Products", "Pizza", "Water", etc.
- **Product Details:** Clicking on a product navigates to a detailed page showing the product's details, including price and variants.
- **Reusable Components:** Built with reusable smart and dumb components following the SOLID principles.
- **Client-Side Rendering:** Utilizes React hooks and components to handle client-side state and rendering.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **GraphQL**: A query language for APIs and a runtime for executing those queries by using a type system.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/abdulrehmankz1/ecommerce-project.git
   ```

2. Navigate to the project directory:

   ```sh
   cd ecommerce-project
   ```

3. Install the dependencies:

   ```sh
   yarn install
   ```

4. Run the development server:

   ```sh
   yarn run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Home Page:** Displays a hero section and a list of products with tag-based filtering.
- **Product Page:** Displays detailed information about a selected product, including its price and variants.

## GraphQL Queries

- **Get Products:**

  ```graphql
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
  ```

- **Get Tags:**

  ```graphql
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
  ```

- **Get Product Details:**

  ```graphql
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
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Live Demo

Check out the live demo of this project [here](https://ecommerce-project-mu-six.vercel.app).
