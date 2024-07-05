/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CatalogItemProduct($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          __typename\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              slug\n              description\n              primaryImage {\n                URLs {\n                  original\n                }\n              }\n              pricing {\n                displayPrice\n                \n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CatalogItemProductDocument,
    "\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        pricing {\n          displayPrice\n        }\n        primaryImage {\n          URLs {\n            medium\n            small\n            original\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CatalogItemProduct($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          __typename\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              slug\n              description\n              primaryImage {\n                URLs {\n                  original\n                }\n              }\n              pricing {\n                displayPrice\n                \n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CatalogItemProduct($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          __typename\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              slug\n              description\n              primaryImage {\n                URLs {\n                  original\n                }\n              }\n              pricing {\n                displayPrice\n                \n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        pricing {\n          displayPrice\n        }\n        primaryImage {\n          URLs {\n            medium\n            small\n            original\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        pricing {\n          displayPrice\n        }\n        primaryImage {\n          URLs {\n            medium\n            small\n            original\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;