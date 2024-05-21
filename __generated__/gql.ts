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
    "\n  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              description\n              pricing {\n                displayPrice\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CatalogItemsDocument,
    "\n  query GetTags {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes {\n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  }\n": types.GetTagsDocument,
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
export function gql(source: "\n  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              description\n              pricing {\n                displayPrice\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {\n    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              _id\n              title\n              description\n              pricing {\n                displayPrice\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTags {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes {\n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTags {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes {\n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;