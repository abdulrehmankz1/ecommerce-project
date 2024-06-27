/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ConnectionCursor: { input: any; output: any; }
  ConnectionLimitInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Email: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Account = Node & {
  __typename?: 'Account';
  _id: Scalars['ID']['output'];
  addressBook?: Maybe<AddressConnection>;
  adminUIShops?: Maybe<Array<Maybe<Shop>>>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Currency>;
  emailRecords?: Maybe<Array<Maybe<EmailRecord>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<GroupConnection>;
  language?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Scalars['JSONObject']['output']>;
  primaryEmailAddress: Scalars['Email']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};


export type AccountAddressBookArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountGroupsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<GroupSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  nodes?: Maybe<Array<Maybe<Account>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AccountEdge = NodeEdge & {
  __typename?: 'AccountEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Account>;
};

export enum AccountSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type AddAccountAddressBookEntryInput = {
  accountId: Scalars['ID']['input'];
  address: AddressInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AddAccountAddressBookEntryPayload = {
  __typename?: 'AddAccountAddressBookEntryPayload';
  address?: Maybe<Address>;
  addressEdge?: Maybe<AddressEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddAccountEmailRecordInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['Email']['input'];
};

export type AddAccountEmailRecordPayload = {
  __typename?: 'AddAccountEmailRecordPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddAccountToGroupInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
};

export type AddAccountToGroupPayload = {
  __typename?: 'AddAccountToGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
};

export type AddCartItemsInput = {
  cartId: Scalars['ID']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<InputMaybe<CartItemInput>>;
};

export type AddCartItemsPayload = {
  __typename?: 'AddCartItemsPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  incorrectPriceFailures: Array<Maybe<IncorrectPriceFailureDetails>>;
  minOrderQuantityFailures: Array<Maybe<MinOrderQuantityFailureDetails>>;
};

export type AddOrderFulfillmentGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillmentGroup: OrderFulfillmentGroupExistingOrderInput;
  moveItemIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderId: Scalars['ID']['input'];
};

export type AddOrderFulfillmentGroupPayload = {
  __typename?: 'AddOrderFulfillmentGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  newFulfillmentGroupId: Scalars['ID']['output'];
  order: Order;
};

export type AddTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  displayTitle?: InputMaybe<Scalars['String']['input']>;
  heroMediaUrl?: InputMaybe<Scalars['String']['input']>;
  isVisible: Scalars['Boolean']['input'];
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  name: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type AddTagPayload = {
  __typename?: 'AddTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  shopId: Scalars['ID']['output'];
  tag: Tag;
};

export type Address = {
  __typename?: 'Address';
  _id?: Maybe<Scalars['ID']['output']>;
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  isBillingDefault?: Maybe<Scalars['Boolean']['output']>;
  isCommercial: Scalars['Boolean']['output'];
  isShippingDefault?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  phone: Scalars['String']['output'];
  postal: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  edges?: Maybe<Array<Maybe<AddressEdge>>>;
  nodes?: Maybe<Array<Maybe<Address>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Address>;
};

export type AddressInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  addressName?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  company?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  isBillingDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isCommercial?: InputMaybe<Scalars['Boolean']['input']>;
  isShippingDefault?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  phone: Scalars['String']['input'];
  postal: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

export enum AddressType {
  Billing = 'billing',
  Shipping = 'shipping'
}

export type AddressValidationError = {
  __typename?: 'AddressValidationError';
  details?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AddressValidationResults = {
  __typename?: 'AddressValidationResults';
  suggestedAddresses: Array<Maybe<SuggestedAddress>>;
  validationErrors: Array<Maybe<AddressValidationError>>;
};

export type AddressValidationRule = Node & {
  __typename?: 'AddressValidationRule';
  _id: Scalars['ID']['output'];
  countryCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt: Scalars['DateTime']['output'];
  serviceName: Scalars['String']['output'];
  shopId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressValidationRuleConnection = {
  __typename?: 'AddressValidationRuleConnection';
  edges?: Maybe<Array<Maybe<AddressValidationRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<AddressValidationRule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AddressValidationRuleEdge = NodeEdge & {
  __typename?: 'AddressValidationRuleEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<AddressValidationRule>;
};

export enum AddressValidationRuleSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  ServiceName = 'serviceName',
  UpdatedAt = 'updatedAt'
}

export type AddressValidationService = {
  __typename?: 'AddressValidationService';
  displayName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  supportedCountryCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AppliedSurcharge = Node & {
  __typename?: 'AppliedSurcharge';
  _id: Scalars['ID']['output'];
  amount: Money;
  fulfillmentGroupId?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  surchargeDefinitionId: Scalars['ID']['output'];
};


export type AppliedSurchargeMessageArgs = {
  language: Scalars['String']['input'];
};

export type ApplyDiscountCodeToCartInput = {
  cartId: Scalars['ID']['input'];
  discountCode: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type ApplyDiscountCodeToCartPayload = {
  __typename?: 'ApplyDiscountCodeToCartPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ApproveOrderPaymentsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentIds: Array<InputMaybe<Scalars['ID']['input']>>;
  shopId: Scalars['ID']['input'];
};

export type ApproveOrderPaymentsPayload = {
  __typename?: 'ApproveOrderPaymentsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type ArchiveMediaRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mediaRecordId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type ArchiveMediaRecordPayload = {
  __typename?: 'ArchiveMediaRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  mediaRecord: MediaRecord;
};

export type ArchiveProductVariantsInput = {
  shopId: Scalars['ID']['input'];
  variantIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type ArchiveProductVariantsPayload = {
  __typename?: 'ArchiveProductVariantsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  variants: Array<Maybe<ProductVariant>>;
};

export type ArchiveProductsInput = {
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  shopId: Scalars['ID']['input'];
};

export type ArchiveProductsPayload = {
  __typename?: 'ArchiveProductsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  products: Array<Maybe<Product>>;
};

export type AttributeRestrictions = {
  __typename?: 'AttributeRestrictions';
  operator: Scalars['String']['output'];
  property: Scalars['String']['output'];
  propertyType: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AttributeRestrictionsInput = {
  operator: Scalars['String']['input'];
  property: Scalars['String']['input'];
  propertyType: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AuthenticateParamsInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_secret?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserInput>;
};

export type CalculatedTax = {
  __typename?: 'CalculatedTax';
  _id: Scalars['ID']['output'];
  jurisdictionId?: Maybe<Scalars['String']['output']>;
  sourcing: TaxSource;
  tax: Money;
  taxName: Scalars['String']['output'];
  taxRate: Rate;
  taxableAmount: Money;
};

export type CancelOrderItemInput = {
  cancelQuantity: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CancelOrderItemPayload = {
  __typename?: 'CancelOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type CaptureOrderPaymentsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentIds: Array<InputMaybe<Scalars['ID']['input']>>;
  shopId: Scalars['ID']['input'];
};

export type CaptureOrderPaymentsPayload = {
  __typename?: 'CaptureOrderPaymentsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type Cart = Node & {
  __typename?: 'Cart';
  _id: Scalars['ID']['output'];
  account?: Maybe<Account>;
  checkout?: Maybe<Checkout>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<CartItemConnection>;
  missingItems?: Maybe<Array<Maybe<CartItem>>>;
  referenceId?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  surcharges: Array<Maybe<AppliedSurcharge>>;
  taxSummary?: Maybe<TaxSummary>;
  totalItemQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CartItemsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CartItemsSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CartItem = Node & {
  __typename?: 'CartItem';
  _id: Scalars['ID']['output'];
  addedAt: Scalars['DateTime']['output'];
  attributes?: Maybe<Array<Maybe<CartItemAttribute>>>;
  compareAtPrice?: Maybe<Money>;
  createdAt: Scalars['DateTime']['output'];
  imageURLs?: Maybe<ImageSizes>;
  inventoryAvailableToSell?: Maybe<Scalars['Int']['output']>;
  isBackorder: Scalars['Boolean']['output'];
  isLowQuantity: Scalars['Boolean']['output'];
  isSoldOut: Scalars['Boolean']['output'];
  isTaxable: Scalars['Boolean']['output'];
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  optionTitle?: Maybe<Scalars['String']['output']>;
  parcel?: Maybe<ShippingParcel>;
  price: Money;
  priceWhenAdded: Money;
  productConfiguration: ProductConfiguration;
  productSlug?: Maybe<Scalars['String']['output']>;
  productTags?: Maybe<TagConnection>;
  productType?: Maybe<Scalars['String']['output']>;
  productVendor?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  shop: Shop;
  subtotal: Money;
  tax?: Maybe<Money>;
  taxCode?: Maybe<Scalars['String']['output']>;
  taxableAmount?: Maybe<Money>;
  taxes?: Maybe<Array<Maybe<CalculatedTax>>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variantTitle?: Maybe<Scalars['String']['output']>;
};


export type CartItemProductTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CartItemAttribute = {
  __typename?: 'CartItemAttribute';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CartItemConnection = {
  __typename?: 'CartItemConnection';
  edges?: Maybe<Array<Maybe<CartItemEdge>>>;
  nodes?: Maybe<Array<Maybe<CartItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CartItemEdge = NodeEdge & {
  __typename?: 'CartItemEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<CartItem>;
};

export type CartItemInput = {
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  price: MoneyInput;
  productConfiguration: ProductConfigurationInput;
  quantity: Scalars['Int']['input'];
};

export enum CartItemsSortByField {
  Id = '_id',
  AddedAt = 'addedAt'
}

export enum CartReconciliationMode {
  KeepAccountCart = 'keepAccountCart',
  KeepAnonymousCart = 'keepAnonymousCart',
  Merge = 'merge'
}

export type CartSummary = {
  __typename?: 'CartSummary';
  discountTotal: Money;
  effectiveTaxRate?: Maybe<Rate>;
  fulfillmentTotal?: Maybe<Money>;
  itemTotal: Money;
  surchargeTotal?: Maybe<Money>;
  taxTotal?: Maybe<Money>;
  taxableAmount: Money;
  total: Money;
};

export type Catalog = Node & {
  __typename?: 'Catalog';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  shop: Shop;
  updatedAt: Scalars['DateTime']['output'];
};

export type CatalogBooleanFilter = {
  name: CatalogBooleanFilterName;
  value: Scalars['Boolean']['input'];
};

export enum CatalogBooleanFilterName {
  IsBackorder = 'isBackorder',
  IsDeleted = 'isDeleted',
  IsLowQuantity = 'isLowQuantity',
  IsSoldOut = 'isSoldOut',
  IsVisible = 'isVisible'
}

export type CatalogItem = {
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  shop: Shop;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  edges?: Maybe<Array<Maybe<CatalogItemEdge>>>;
  nodes?: Maybe<Array<Maybe<CatalogItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CatalogItemContent = CatalogItem & Node & {
  __typename?: 'CatalogItemContent';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  shop: Shop;
  updatedAt: Scalars['DateTime']['output'];
};

export type CatalogItemEdge = {
  __typename?: 'CatalogItemEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<CatalogItem>;
};

export type CatalogItemProduct = CatalogItem & Node & {
  __typename?: 'CatalogItemProduct';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  product?: Maybe<CatalogProduct>;
  shop: Shop;
  updatedAt: Scalars['DateTime']['output'];
};

export enum CatalogItemSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  Featured = 'featured',
  MinPrice = 'minPrice',
  UpdatedAt = 'updatedAt'
}

export type CatalogProduct = CatalogProductOrVariant & Node & {
  __typename?: 'CatalogProduct';
  _id: Scalars['ID']['output'];
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  isBackorder: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  isLowQuantity: Scalars['Boolean']['output'];
  isSoldOut: Scalars['Boolean']['output'];
  isVisible: Scalars['Boolean']['output'];
  length?: Maybe<Scalars['Float']['output']>;
  media?: Maybe<Array<Maybe<ImageInfo>>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  minOrderQuantity?: Maybe<Scalars['Int']['output']>;
  originCountry?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  parcel?: Maybe<ShippingParcel>;
  pricing: Array<Maybe<ProductPricingInfo>>;
  primaryImage?: Maybe<ImageInfo>;
  productId: Scalars['ID']['output'];
  productType?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  socialMetadata?: Maybe<Array<Maybe<SocialMetadata>>>;
  supportedFulfillmentTypes: Array<Maybe<FulfillmentType>>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  tags?: Maybe<TagConnection>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  variants?: Maybe<Array<Maybe<CatalogProductVariant>>>;
  vendor?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type CatalogProductTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type CatalogProductOrVariant = {
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  minOrderQuantity?: Maybe<Scalars['Int']['output']>;
  originCountry?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  sku?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type CatalogProductVariant = CatalogProductOrVariant & Node & {
  __typename?: 'CatalogProductVariant';
  _id: Scalars['ID']['output'];
  attributeLabel: Scalars['String']['output'];
  barcode?: Maybe<Scalars['String']['output']>;
  canBackorder: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  index: Scalars['Int']['output'];
  inventoryAvailableToSell?: Maybe<Scalars['Int']['output']>;
  inventoryInStock?: Maybe<Scalars['Int']['output']>;
  isBackorder: Scalars['Boolean']['output'];
  isLowQuantity: Scalars['Boolean']['output'];
  isSoldOut: Scalars['Boolean']['output'];
  isTaxable: Scalars['Boolean']['output'];
  length?: Maybe<Scalars['Float']['output']>;
  media?: Maybe<Array<Maybe<ImageInfo>>>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  minOrderQuantity?: Maybe<Scalars['Int']['output']>;
  optionTitle?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<CatalogProductVariant>>>;
  originCountry?: Maybe<Scalars['String']['output']>;
  pricing: Array<Maybe<ProductPricingInfo>>;
  primaryImage?: Maybe<ImageInfo>;
  shop: Shop;
  sku?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  taxDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variantId: Scalars['ID']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Checkout = {
  __typename?: 'Checkout';
  fulfillmentGroups: Array<Maybe<FulfillmentGroup>>;
  summary: CartSummary;
};

export type CloneProductVariantsInput = {
  shopId: Scalars['ID']['input'];
  variantIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type CloneProductVariantsPayload = {
  __typename?: 'CloneProductVariantsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  variants: Array<Maybe<ProductVariant>>;
};

export type CloneProductsInput = {
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  shopId: Scalars['ID']['input'];
};

export type CloneProductsPayload = {
  __typename?: 'CloneProductsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  products: Array<Maybe<Product>>;
};

export type CreateAccountGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  group: GroupInput;
  shopId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateAccountGroupPayload = {
  __typename?: 'CreateAccountGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
};

export type CreateAccountInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  emails: Array<InputMaybe<EmailRecordInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateAddressValidationRuleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceName: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
};

export type CreateAddressValidationRulePayload = {
  __typename?: 'CreateAddressValidationRulePayload';
  addressValidationRule: AddressValidationRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCartInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<InputMaybe<CartItemInput>>;
  shopId: Scalars['ID']['input'];
};

export type CreateCartPayload = {
  __typename?: 'CreateCartPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  incorrectPriceFailures: Array<Maybe<IncorrectPriceFailureDetails>>;
  minOrderQuantityFailures: Array<Maybe<MinOrderQuantityFailureDetails>>;
  token?: Maybe<Scalars['String']['output']>;
};

export type CreateDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCode?: InputMaybe<DiscountCodeInput>;
  shopId: Scalars['ID']['input'];
};

export type CreateDiscountCodePayload = {
  __typename?: 'CreateDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountCode?: Maybe<DiscountCode>;
};

export type CreateFlatRateFulfillmentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  method: FlatRateFulfillmentMethodInput;
  shopId: Scalars['ID']['input'];
};

export type CreateFlatRateFulfillmentMethodPayload = {
  __typename?: 'CreateFlatRateFulfillmentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  method: FlatRateFulfillmentMethod;
};

export type CreateFlatRateFulfillmentRestrictionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  restriction: FlatRateFulfillmentRestrictionInput;
  shopId: Scalars['ID']['input'];
};

export type CreateFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'CreateFlatRateFulfillmentRestrictionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  restriction: FlatRateFulfillmentRestriction;
};

export type CreateMediaRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mediaRecord: MediaRecordInput;
  shopId: Scalars['ID']['input'];
};

export type CreateMediaRecordPayload = {
  __typename?: 'CreateMediaRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  mediaRecord: MediaRecord;
};

export type CreateNavigationItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  navigationItem: NavigationItemInput;
};

export type CreateNavigationItemPayload = {
  __typename?: 'CreateNavigationItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationItem?: Maybe<NavigationItem>;
};

export type CreateNavigationTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  draftItems?: InputMaybe<Array<InputMaybe<NavigationTreeItemInput>>>;
  name: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
};

export type CreateNavigationTreePayload = {
  __typename?: 'CreateNavigationTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationTree: NavigationTree;
};

export type CreateProductInput = {
  product?: InputMaybe<ProductInput>;
  shopId: Scalars['ID']['input'];
  shouldCreateFirstVariant?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: Product;
};

export type CreateProductVariantInput = {
  productId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  variant?: InputMaybe<ProductVariantInput>;
};

export type CreateProductVariantPayload = {
  __typename?: 'CreateProductVariantPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  variant: ProductVariant;
};

export type CreateRefundInput = {
  amount: Scalars['Float']['input'];
  orderId: Scalars['ID']['input'];
  paymentId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRefundPayload = {
  __typename?: 'CreateRefundPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type CreateShopInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  defaultLanguage?: InputMaybe<Scalars['String']['input']>;
  defaultTimezone?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateShopPayload = {
  __typename?: 'CreateShopPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  shop: Shop;
};

export type CreateStripePaymentIntentInput = {
  cartId: Scalars['String']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['String']['input'];
};

export type CreateStripePaymentIntentPayload = {
  __typename?: 'CreateStripePaymentIntentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  paymentIntentClientSecret?: Maybe<Scalars['String']['output']>;
};

export type CreateSurchargeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  surcharge: SurchargeInput;
};

export type CreateSurchargePayload = {
  __typename?: 'CreateSurchargePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  surcharge: Surcharge;
};

export type CreateTaxRateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  sourcing?: InputMaybe<TaxSource>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTaxRatePayload = {
  __typename?: 'CreateTaxRatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  taxRate: TaxRate;
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserResult = {
  __typename?: 'CreateUserResult';
  loginResult?: Maybe<LoginResult>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CreatedAtInput = {
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Currency = Node & {
  __typename?: 'Currency';
  _id: Scalars['ID']['output'];
  code: Scalars['String']['output'];
  decimal?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  scale?: Maybe<Scalars['Int']['output']>;
  symbol: Scalars['String']['output'];
  thousand?: Maybe<Scalars['String']['output']>;
};

export type CurrencyExchangeProductPricingInfo = {
  __typename?: 'CurrencyExchangeProductPricingInfo';
  compareAtPrice?: Maybe<Money>;
  currency: Currency;
  displayPrice: Scalars['String']['output'];
  maxPrice: Scalars['Float']['output'];
  minPrice: Scalars['Float']['output'];
  price?: Maybe<Scalars['Float']['output']>;
};

export type DatabaseInformation = {
  __typename?: 'DatabaseInformation';
  version: Scalars['String']['output'];
};

export type Deletable = {
  isDeleted: Scalars['Boolean']['output'];
};

export type DeleteAddressValidationRuleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ruleId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteAddressValidationRulePayload = {
  __typename?: 'DeleteAddressValidationRulePayload';
  addressValidationRule: AddressValidationRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCodeId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteDiscountCodePayload = {
  __typename?: 'DeleteDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountCode?: Maybe<DiscountCode>;
};

export type DeleteFlatRateFulfillmentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  methodId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteFlatRateFulfillmentMethodPayload = {
  __typename?: 'DeleteFlatRateFulfillmentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  method: FlatRateFulfillmentMethod;
};

export type DeleteFlatRateFulfillmentRestrictionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  restrictionId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'DeleteFlatRateFulfillmentRestrictionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  restriction: FlatRateFulfillmentRestriction;
};

export type DeleteMediaRecordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mediaRecordId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteMediaRecordPayload = {
  __typename?: 'DeleteMediaRecordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  mediaRecord: MediaRecord;
};

export type DeleteNavigationItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type DeleteNavigationItemPayload = {
  __typename?: 'DeleteNavigationItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationItem?: Maybe<NavigationItem>;
};

export type DeleteSurchargeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  surchargeId: Scalars['ID']['input'];
};

export type DeleteSurchargePayload = {
  __typename?: 'DeleteSurchargePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  surcharge: Surcharge;
};

export type DeleteTaxRateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  taxRateId: Scalars['ID']['input'];
};

export type DeleteTaxRatePayload = {
  __typename?: 'DeleteTaxRatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  taxRate: TaxRate;
};

export type DestinationRestrictions = {
  __typename?: 'DestinationRestrictions';
  country?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  region?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DestinationRestrictionsInput = {
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postal?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  region?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DiscountCalculation = {
  __typename?: 'DiscountCalculation';
  method?: Maybe<DiscountCalculationMethod>;
};

export type DiscountCalculationInput = {
  method?: InputMaybe<DiscountCalculationMethod>;
};

export enum DiscountCalculationMethod {
  Credit = 'credit',
  Discount = 'discount',
  Sale = 'sale',
  Shipping = 'shipping'
}

export type DiscountCode = {
  __typename?: 'DiscountCode';
  _id: Scalars['ID']['output'];
  calculation?: Maybe<DiscountCalculation>;
  code: Scalars['String']['output'];
  conditions?: Maybe<DiscountConditions>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['String']['output']>;
  discountMethod?: Maybe<DiscountMethod>;
  label?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  transactions?: Maybe<Array<Maybe<DiscountTransaction>>>;
};

export type DiscountCodeConnection = {
  __typename?: 'DiscountCodeConnection';
  edges?: Maybe<Array<Maybe<DiscountCodeEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscountCode>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DiscountCodeEdge = {
  __typename?: 'DiscountCodeEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<DiscountCode>;
};

export type DiscountCodeFilterInput = {
  searchField?: InputMaybe<Scalars['String']['input']>;
};

export type DiscountCodeInput = {
  calculation?: InputMaybe<DiscountCalculationInput>;
  code: Scalars['String']['input'];
  conditions?: InputMaybe<DiscountConditionsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  discountMethod?: InputMaybe<DiscountMethod>;
  label?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<Array<InputMaybe<DiscountTransactionInput>>>;
};

export type DiscountConditionOrder = {
  __typename?: 'DiscountConditionOrder';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min: Scalars['Float']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type DiscountConditionOrderInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  min: Scalars['Float']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DiscountConditions = {
  __typename?: 'DiscountConditions';
  accountLimit?: Maybe<Scalars['Int']['output']>;
  audience?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  enabled: Scalars['Boolean']['output'];
  order?: Maybe<DiscountConditionOrder>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  redemptionLimit?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DiscountConditionsInput = {
  accountLimit?: InputMaybe<Scalars['Int']['input']>;
  audience?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enabled: Scalars['Boolean']['input'];
  order?: InputMaybe<DiscountConditionOrderInput>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redemptionLimit?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DiscountMethod {
  Code = 'code',
  Rate = 'rate'
}

export type DiscountTransaction = {
  __typename?: 'DiscountTransaction';
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  cartId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type DiscountTransactionInput = {
  appliedAt?: InputMaybe<Scalars['DateTime']['input']>;
  cartId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export enum DistanceUnit {
  Cm = 'cm',
  Ft = 'ft',
  In = 'in'
}

export type EmailJob = {
  __typename?: 'EmailJob';
  _id: Scalars['ID']['output'];
  data: EmailJobData;
  status: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
};

export type EmailJobConnection = {
  __typename?: 'EmailJobConnection';
  edges?: Maybe<Array<Maybe<EmailJobEdge>>>;
  nodes?: Maybe<Array<Maybe<EmailJob>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EmailJobData = {
  __typename?: 'EmailJobData';
  subject: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type EmailJobEdge = {
  __typename?: 'EmailJobEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<EmailJob>;
};

export type EmailRecord = {
  __typename?: 'EmailRecord';
  address?: Maybe<Scalars['String']['output']>;
  provides?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailRecordInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  provides?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnablePaymentMethodForShopInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isEnabled: Scalars['Boolean']['input'];
  paymentMethodName: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
};

export type EnablePaymentMethodForShopPayload = {
  __typename?: 'EnablePaymentMethodForShopPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  paymentMethods: Array<Maybe<PaymentMethod>>;
};

export type ExampleIouPaymentData = {
  __typename?: 'ExampleIOUPaymentData';
  fullName: Scalars['String']['output'];
};

export type ExampleIouPaymentMethodData = {
  __typename?: 'ExampleIOUPaymentMethodData';
  example: Scalars['String']['output'];
};

export type FakeData = {
  __typename?: 'FakeData';
  doNotUse?: Maybe<Scalars['String']['output']>;
};

export type FlatRateFulfillmentMethod = Node & {
  __typename?: 'FlatRateFulfillmentMethod';
  _id: Scalars['ID']['output'];
  cost?: Maybe<Scalars['Float']['output']>;
  fulfillmentTypes: Array<Maybe<FulfillmentType>>;
  group: Scalars['String']['output'];
  handling: Scalars['Float']['output'];
  isEnabled: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  shop: Shop;
};

export type FlatRateFulfillmentMethodConnection = {
  __typename?: 'FlatRateFulfillmentMethodConnection';
  edges?: Maybe<Array<Maybe<FlatRateFulfillmentMethodEdge>>>;
  nodes?: Maybe<Array<Maybe<FlatRateFulfillmentMethod>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FlatRateFulfillmentMethodEdge = {
  __typename?: 'FlatRateFulfillmentMethodEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<FlatRateFulfillmentMethod>;
};

export type FlatRateFulfillmentMethodInput = {
  cost?: InputMaybe<Scalars['Float']['input']>;
  fulfillmentTypes: Array<InputMaybe<FulfillmentType>>;
  group: Scalars['String']['input'];
  handling: Scalars['Float']['input'];
  isEnabled: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
};

export type FlatRateFulfillmentRestriction = Node & {
  __typename?: 'FlatRateFulfillmentRestriction';
  _id: Scalars['ID']['output'];
  attributes?: Maybe<Array<Maybe<AttributeRestrictions>>>;
  destination?: Maybe<DestinationRestrictions>;
  methodIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  shopId: Scalars['ID']['output'];
  type: RestrictionTypeEnum;
};

export type FlatRateFulfillmentRestrictionConnection = {
  __typename?: 'FlatRateFulfillmentRestrictionConnection';
  edges?: Maybe<Array<Maybe<FlatRateFulfillmentRestrictionEdge>>>;
  nodes?: Maybe<Array<Maybe<FlatRateFulfillmentRestriction>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FlatRateFulfillmentRestrictionEdge = {
  __typename?: 'FlatRateFulfillmentRestrictionEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<FlatRateFulfillmentRestriction>;
};

export type FlatRateFulfillmentRestrictionInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeRestrictionsInput>>>;
  destination?: InputMaybe<DestinationRestrictionsInput>;
  methodIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: RestrictionTypeEnum;
};

export enum FlatRateFulfillmentRestrictionSortByField {
  CreatedAt = 'createdAt'
}

export type FulfillmentData = {
  __typename?: 'FulfillmentData';
  shippingAddress?: Maybe<Address>;
};

export type FulfillmentGroup = Node & {
  __typename?: 'FulfillmentGroup';
  _id: Scalars['ID']['output'];
  availableFulfillmentOptions: Array<Maybe<FulfillmentOption>>;
  data?: Maybe<FulfillmentData>;
  items: Array<Maybe<CartItem>>;
  selectedFulfillmentOption?: Maybe<FulfillmentOption>;
  shippingAddress?: Maybe<Address>;
  shop: Shop;
  type: FulfillmentType;
};

export type FulfillmentMethod = Node & {
  __typename?: 'FulfillmentMethod';
  _id: Scalars['ID']['output'];
  carrier?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  fulfillmentTypes: Array<Maybe<FulfillmentType>>;
  group?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type FulfillmentOption = {
  __typename?: 'FulfillmentOption';
  fulfillmentMethod?: Maybe<FulfillmentMethod>;
  handlingPrice: Money;
  price: Money;
};

export enum FulfillmentType {
  Digital = 'digital',
  Pickup = 'pickup',
  Shipping = 'shipping'
}

export type GenerateSitemapsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
};

export type GenerateSitemapsPayload = {
  __typename?: 'GenerateSitemapsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wasJobScheduled: Scalars['Boolean']['output'];
};

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  doNotUse?: Maybe<Scalars['String']['output']>;
};

export type GlobalSettingsUpdates = {
  doNotUse?: InputMaybe<Scalars['String']['input']>;
};

export type GrantOrRevokeAdminUiAccessInput = {
  accountId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['String']['input'];
};

export type GrantOrRevokeAdminUiAccessPayload = {
  __typename?: 'GrantOrRevokeAdminUIAccessPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Group = Node & {
  __typename?: 'Group';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Account>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shop?: Maybe<Shop>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  nodes?: Maybe<Array<Maybe<Group>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GroupEdge = NodeEdge & {
  __typename?: 'GroupEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Group>;
};

export type GroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum GroupSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ImageInfo = {
  __typename?: 'ImageInfo';
  URLs?: Maybe<ImageSizes>;
  _id?: Maybe<Scalars['ID']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['ID']['output']>;
  variantId?: Maybe<Scalars['ID']['output']>;
};

export type ImageSizes = {
  __typename?: 'ImageSizes';
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type ImpersonateReturn = {
  __typename?: 'ImpersonateReturn';
  authorized?: Maybe<Scalars['Boolean']['output']>;
  tokens?: Maybe<Tokens>;
  user?: Maybe<User>;
};

export type ImpersonationUserIdentityInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type IncorrectPriceFailureDetails = {
  __typename?: 'IncorrectPriceFailureDetails';
  currentPrice: Money;
  productConfiguration: ProductConfiguration;
  providedPrice: Money;
};

export type Invitation = Node & {
  __typename?: 'Invitation';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  groups: Array<Maybe<Group>>;
  invitedBy?: Maybe<Account>;
  shop?: Maybe<Shop>;
};

export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  edges?: Maybe<Array<Maybe<InvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<Invitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type InvitationEdge = NodeEdge & {
  __typename?: 'InvitationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Invitation>;
};

export type InviteShopMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  groupId?: InputMaybe<Scalars['ID']['input']>;
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
  shouldGetAdminUIAccess?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InviteShopMemberPayload = {
  __typename?: 'InviteShopMemberPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  sessionId?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Tokens>;
  user?: Maybe<User>;
};

export enum MassUnit {
  G = 'g',
  Kg = 'kg',
  Lb = 'lb',
  Oz = 'oz'
}

export type MediaRecord = {
  __typename?: 'MediaRecord';
  _id: Scalars['ID']['output'];
  metadata: MediaRecordMetadata;
  original: MediaRecordInfo;
};

export type MediaRecordInfo = {
  __typename?: 'MediaRecordInfo';
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uploadedAt: Scalars['DateTime']['output'];
};

export type MediaRecordInfoInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  tempStoreId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
  uploadedAt: Scalars['DateTime']['input'];
};

export type MediaRecordInput = {
  metadata: MediaRecordMetadataInput;
  original: MediaRecordInfoInput;
};

export type MediaRecordMetadata = {
  __typename?: 'MediaRecordMetadata';
  isArchived: Scalars['Boolean']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  shopId: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  variantId?: Maybe<Scalars['String']['output']>;
};

export type MediaRecordMetadataInput = {
  priority?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type MessagesByLanguageInput = {
  content: Scalars['String']['input'];
  language: Scalars['String']['input'];
};

export type Metafield = {
  __typename?: 'Metafield';
  description?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  namespace?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  valueType?: Maybe<Scalars['String']['output']>;
};

export type MetafieldInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  namespace?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  valueType?: InputMaybe<Scalars['String']['input']>;
};

export type MinOrderQuantityFailureDetails = {
  __typename?: 'MinOrderQuantityFailureDetails';
  minOrderQuantity: Scalars['Int']['output'];
  productConfiguration: ProductConfiguration;
  quantity: Scalars['Int']['output'];
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float']['output'];
  currency: Currency;
  displayAmount: Scalars['String']['output'];
};

export type MoneyInput = {
  amount: Scalars['Float']['input'];
  currencyCode: Scalars['String']['input'];
};

export type MoveOrderItemsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fromFulfillmentGroupId: Scalars['ID']['input'];
  itemIds: Array<InputMaybe<Scalars['ID']['input']>>;
  orderId: Scalars['ID']['input'];
  toFulfillmentGroupId: Scalars['ID']['input'];
};

export type MoveOrderItemsPayload = {
  __typename?: 'MoveOrderItemsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAccountAddressBookEntry?: Maybe<AddAccountAddressBookEntryPayload>;
  addAccountEmailRecord?: Maybe<AddAccountEmailRecordPayload>;
  addAccountToGroup?: Maybe<AddAccountToGroupPayload>;
  addCartItems: AddCartItemsPayload;
  addEmail?: Maybe<Scalars['Boolean']['output']>;
  addOrderFulfillmentGroup: AddOrderFulfillmentGroupPayload;
  addTag: AddTagPayload;
  addTagsToProducts: ProductTagsOperationPayload;
  applyDiscountCodeToCart: ApplyDiscountCodeToCartPayload;
  approveOrderPayments: ApproveOrderPaymentsPayload;
  archiveMediaRecord: ArchiveMediaRecordPayload;
  archiveProductVariants: ArchiveProductVariantsPayload;
  archiveProducts: ArchiveProductsPayload;
  authenticate?: Maybe<LoginResult>;
  cancelOrderItem: CancelOrderItemPayload;
  captureOrderPayments: CaptureOrderPaymentsPayload;
  changePassword?: Maybe<Scalars['Boolean']['output']>;
  cloneProductVariants: CloneProductVariantsPayload;
  cloneProducts: CloneProductsPayload;
  createAccount?: Maybe<CreateAccountPayload>;
  createAccountGroup?: Maybe<CreateAccountGroupPayload>;
  createAddressValidationRule: CreateAddressValidationRulePayload;
  createCart: CreateCartPayload;
  createDiscountCode?: Maybe<CreateDiscountCodePayload>;
  createFlatRateFulfillmentMethod: CreateFlatRateFulfillmentMethodPayload;
  createFlatRateFulfillmentRestriction: CreateFlatRateFulfillmentRestrictionPayload;
  createMediaRecord: CreateMediaRecordPayload;
  createNavigationItem?: Maybe<CreateNavigationItemPayload>;
  createNavigationTree: CreateNavigationTreePayload;
  createProduct: CreateProductPayload;
  createProductVariant: CreateProductVariantPayload;
  createRefund: CreateRefundPayload;
  createShop: CreateShopPayload;
  createStripePaymentIntent: CreateStripePaymentIntentPayload;
  createSurcharge: CreateSurchargePayload;
  createTaxRate?: Maybe<CreateTaxRatePayload>;
  createUser?: Maybe<CreateUserResult>;
  deleteAddressValidationRule: DeleteAddressValidationRulePayload;
  deleteDiscountCode?: Maybe<DeleteDiscountCodePayload>;
  deleteFlatRateFulfillmentMethod: DeleteFlatRateFulfillmentMethodPayload;
  deleteFlatRateFulfillmentRestriction: DeleteFlatRateFulfillmentRestrictionPayload;
  deleteMediaRecord: DeleteMediaRecordPayload;
  deleteNavigationItem?: Maybe<DeleteNavigationItemPayload>;
  deleteSurcharge: DeleteSurchargePayload;
  deleteTaxRate?: Maybe<DeleteTaxRatePayload>;
  echo?: Maybe<Scalars['String']['output']>;
  enablePaymentMethodForShop: EnablePaymentMethodForShopPayload;
  generateSitemaps: GenerateSitemapsPayload;
  grantAdminUIAccess: GrantOrRevokeAdminUiAccessPayload;
  impersonate?: Maybe<ImpersonateReturn>;
  inviteShopMember?: Maybe<InviteShopMemberPayload>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  moveOrderItems: MoveOrderItemsPayload;
  placeOrder: PlaceOrderPayload;
  publishNavigationChanges?: Maybe<PublishNavigationChangesPayload>;
  publishProductsToCatalog?: Maybe<Array<Maybe<CatalogItemProduct>>>;
  recalculateReservedSimpleInventory: RecalculateReservedSimpleInventoryPayload;
  reconcileCarts: ReconcileCartsPayload;
  refreshTokens?: Maybe<LoginResult>;
  removeAccountAddressBookEntry?: Maybe<RemoveAccountAddressBookEntryPayload>;
  removeAccountEmailRecord?: Maybe<RemoveAccountEmailRecordPayload>;
  removeAccountFromGroup?: Maybe<RemoveAccountFromGroupPayload>;
  removeAccountGroup?: Maybe<RemoveAccountGroupPayload>;
  removeCartItems: RemoveCartItemsPayload;
  removeDiscountCodeFromCart: RemoveDiscountCodeFromCartPayload;
  removeTag: RemoveTagPayload;
  removeTagsFromProducts: ProductTagsOperationPayload;
  resetPassword?: Maybe<LoginResult>;
  retryFailedEmail: RetryFailedEmailPayload;
  revokeAdminUIAccess: GrantOrRevokeAdminUiAccessPayload;
  selectFulfillmentOptionForGroup: SelectFulfillmentOptionForGroupPayload;
  sendResetAccountPasswordEmail?: Maybe<SendResetAccountPasswordEmailPayload>;
  sendResetPasswordEmail?: Maybe<Scalars['Boolean']['output']>;
  sendVerificationEmail?: Maybe<Scalars['Boolean']['output']>;
  setAccountDefaultEmail?: Maybe<SetAccountDefaultEmailPayload>;
  setEmailOnAnonymousCart: SetEmailOnAnonymousCartPayload;
  setShippingAddressOnCart: SetShippingAddressOnCartPayload;
  setTagHeroMedia: SetTagHeroMediaPayload;
  splitOrderItem: SplitOrderItemPayload;
  twoFactorSet?: Maybe<Scalars['Boolean']['output']>;
  twoFactorUnset?: Maybe<Scalars['Boolean']['output']>;
  updateAccount?: Maybe<UpdateAccountPayload>;
  updateAccountAddressBookEntry?: Maybe<UpdateAccountAddressBookEntryPayload>;
  updateAccountGroup?: Maybe<UpdateAccountGroupPayload>;
  updateAddressValidationRule: UpdateAddressValidationRulePayload;
  updateAdminUIAccess: UpdateAdminUiAccessPayload;
  updateCartItemsQuantity: UpdateCartItemsQuantityPayload;
  updateDiscountCode?: Maybe<UpdateDiscountCodePayload>;
  updateFlatRateFulfillmentMethod: UpdateFlatRateFulfillmentMethodPayload;
  updateFlatRateFulfillmentRestriction: UpdateFlatRateFulfillmentRestrictionPayload;
  updateFulfillmentOptionsForGroup: UpdateFulfillmentOptionsForGroupPayload;
  updateGlobalSettings: UpdateGlobalSettingsPayload;
  updateGroupsForAccounts?: Maybe<UpdateGroupsForAccountsPayload>;
  updateMediaRecordPriority: UpdateMediaRecordPriorityPayload;
  updateNavigationItem?: Maybe<UpdateNavigationItemPayload>;
  updateNavigationTree?: Maybe<UpdateNavigationTreePayload>;
  updateOrder: UpdateOrderPayload;
  updateOrderFulfillmentGroup: UpdateOrderFulfillmentGroupPayload;
  updateProduct: UpdateProductPayload;
  updateProductVariant: UpdateProductVariantPayload;
  updateProductVariantPrices: UpdateProductVariantPricesPayload;
  updateProductsVisibility: UpdateProductsVisibilityPayload;
  updateShop: UpdateShopPayload;
  updateShopSettings: UpdateShopSettingsPayload;
  updateSimpleInventory: UpdateSimpleInventoryPayload;
  updateSurcharge: UpdateSurchargePayload;
  updateTag: UpdateTagPayload;
  updateTaxRate?: Maybe<UpdateTaxRatePayload>;
  updateTemplate: UpdateTemplatePayload;
  verifyAuthentication?: Maybe<Scalars['Boolean']['output']>;
  verifyEmail?: Maybe<Scalars['Boolean']['output']>;
  verifySMTPEmailSettings: VerifySmtpEmailSettingsInputPayload;
};


export type MutationAddAccountAddressBookEntryArgs = {
  input: AddAccountAddressBookEntryInput;
};


export type MutationAddAccountEmailRecordArgs = {
  input: AddAccountEmailRecordInput;
};


export type MutationAddAccountToGroupArgs = {
  input: AddAccountToGroupInput;
};


export type MutationAddCartItemsArgs = {
  input: AddCartItemsInput;
};


export type MutationAddEmailArgs = {
  newEmail: Scalars['String']['input'];
};


export type MutationAddOrderFulfillmentGroupArgs = {
  input: AddOrderFulfillmentGroupInput;
};


export type MutationAddTagArgs = {
  input: AddTagInput;
};


export type MutationAddTagsToProductsArgs = {
  input: ProductTagsOperationInput;
};


export type MutationApplyDiscountCodeToCartArgs = {
  input: ApplyDiscountCodeToCartInput;
};


export type MutationApproveOrderPaymentsArgs = {
  input: ApproveOrderPaymentsInput;
};


export type MutationArchiveMediaRecordArgs = {
  input: ArchiveMediaRecordInput;
};


export type MutationArchiveProductVariantsArgs = {
  input: ArchiveProductVariantsInput;
};


export type MutationArchiveProductsArgs = {
  input: ArchiveProductsInput;
};


export type MutationAuthenticateArgs = {
  params: AuthenticateParamsInput;
  serviceName: Scalars['String']['input'];
};


export type MutationCancelOrderItemArgs = {
  input: CancelOrderItemInput;
};


export type MutationCaptureOrderPaymentsArgs = {
  input: CaptureOrderPaymentsInput;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCloneProductVariantsArgs = {
  input: CloneProductVariantsInput;
};


export type MutationCloneProductsArgs = {
  input: CloneProductsInput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateAccountGroupArgs = {
  input: CreateAccountGroupInput;
};


export type MutationCreateAddressValidationRuleArgs = {
  input: CreateAddressValidationRuleInput;
};


export type MutationCreateCartArgs = {
  input: CreateCartInput;
};


export type MutationCreateDiscountCodeArgs = {
  input: CreateDiscountCodeInput;
};


export type MutationCreateFlatRateFulfillmentMethodArgs = {
  input: CreateFlatRateFulfillmentMethodInput;
};


export type MutationCreateFlatRateFulfillmentRestrictionArgs = {
  input: CreateFlatRateFulfillmentRestrictionInput;
};


export type MutationCreateMediaRecordArgs = {
  input: CreateMediaRecordInput;
};


export type MutationCreateNavigationItemArgs = {
  input: CreateNavigationItemInput;
};


export type MutationCreateNavigationTreeArgs = {
  input: CreateNavigationTreeInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductVariantArgs = {
  input: CreateProductVariantInput;
};


export type MutationCreateRefundArgs = {
  input: CreateRefundInput;
};


export type MutationCreateShopArgs = {
  input: CreateShopInput;
};


export type MutationCreateStripePaymentIntentArgs = {
  input: CreateStripePaymentIntentInput;
};


export type MutationCreateSurchargeArgs = {
  input: CreateSurchargeInput;
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};


export type MutationCreateUserArgs = {
  user: CreateUserInput;
};


export type MutationDeleteAddressValidationRuleArgs = {
  input: DeleteAddressValidationRuleInput;
};


export type MutationDeleteDiscountCodeArgs = {
  input: DeleteDiscountCodeInput;
};


export type MutationDeleteFlatRateFulfillmentMethodArgs = {
  input: DeleteFlatRateFulfillmentMethodInput;
};


export type MutationDeleteFlatRateFulfillmentRestrictionArgs = {
  input: DeleteFlatRateFulfillmentRestrictionInput;
};


export type MutationDeleteMediaRecordArgs = {
  input: DeleteMediaRecordInput;
};


export type MutationDeleteNavigationItemArgs = {
  input: DeleteNavigationItemInput;
};


export type MutationDeleteSurchargeArgs = {
  input: DeleteSurchargeInput;
};


export type MutationDeleteTaxRateArgs = {
  input: DeleteTaxRateInput;
};


export type MutationEchoArgs = {
  str?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEnablePaymentMethodForShopArgs = {
  input: EnablePaymentMethodForShopInput;
};


export type MutationGenerateSitemapsArgs = {
  input?: InputMaybe<GenerateSitemapsInput>;
};


export type MutationGrantAdminUiAccessArgs = {
  input: GrantOrRevokeAdminUiAccessInput;
};


export type MutationImpersonateArgs = {
  accessToken: Scalars['String']['input'];
  impersonated: ImpersonationUserIdentityInput;
};


export type MutationInviteShopMemberArgs = {
  input: InviteShopMemberInput;
};


export type MutationMoveOrderItemsArgs = {
  input: MoveOrderItemsInput;
};


export type MutationPlaceOrderArgs = {
  input: PlaceOrderInput;
};


export type MutationPublishNavigationChangesArgs = {
  input: PublishNavigationChangesInput;
};


export type MutationPublishProductsToCatalogArgs = {
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationRecalculateReservedSimpleInventoryArgs = {
  input: RecalculateReservedSimpleInventoryInput;
};


export type MutationReconcileCartsArgs = {
  input: ReconcileCartsInput;
};


export type MutationRefreshTokensArgs = {
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveAccountAddressBookEntryArgs = {
  input: RemoveAccountAddressBookEntryInput;
};


export type MutationRemoveAccountEmailRecordArgs = {
  input: RemoveAccountEmailRecordInput;
};


export type MutationRemoveAccountFromGroupArgs = {
  input: RemoveAccountFromGroupInput;
};


export type MutationRemoveAccountGroupArgs = {
  input: RemoveAccountGroupInput;
};


export type MutationRemoveCartItemsArgs = {
  input: RemoveCartItemsInput;
};


export type MutationRemoveDiscountCodeFromCartArgs = {
  input: RemoveDiscountCodeFromCartInput;
};


export type MutationRemoveTagArgs = {
  input: RemoveTagInput;
};


export type MutationRemoveTagsFromProductsArgs = {
  input: ProductTagsOperationInput;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationRetryFailedEmailArgs = {
  input: RetryFailedEmailInput;
};


export type MutationRevokeAdminUiAccessArgs = {
  input: GrantOrRevokeAdminUiAccessInput;
};


export type MutationSelectFulfillmentOptionForGroupArgs = {
  input: SelectFulfillmentOptionForGroupInput;
};


export type MutationSendResetAccountPasswordEmailArgs = {
  input: SendResetAccountPasswordEmailInput;
};


export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetAccountDefaultEmailArgs = {
  input: SetAccountDefaultEmailInput;
};


export type MutationSetEmailOnAnonymousCartArgs = {
  input: SetEmailOnAnonymousCartInput;
};


export type MutationSetShippingAddressOnCartArgs = {
  input: SetShippingAddressOnCartInput;
};


export type MutationSetTagHeroMediaArgs = {
  input: SetTagHeroMediaInput;
};


export type MutationSplitOrderItemArgs = {
  input: SplitOrderItemInput;
};


export type MutationTwoFactorSetArgs = {
  code: Scalars['String']['input'];
  secret: TwoFactorSecretKeyInput;
};


export type MutationTwoFactorUnsetArgs = {
  code: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdateAccountAddressBookEntryArgs = {
  input: UpdateAccountAddressBookEntryInput;
};


export type MutationUpdateAccountGroupArgs = {
  input: UpdateAccountGroupInput;
};


export type MutationUpdateAddressValidationRuleArgs = {
  input: UpdateAddressValidationRuleInput;
};


export type MutationUpdateAdminUiAccessArgs = {
  input: UpdateAdminUiAccessInput;
};


export type MutationUpdateCartItemsQuantityArgs = {
  input: UpdateCartItemsQuantityInput;
};


export type MutationUpdateDiscountCodeArgs = {
  input: UpdateDiscountCodeInput;
};


export type MutationUpdateFlatRateFulfillmentMethodArgs = {
  input: UpdateFlatRateFulfillmentMethodInput;
};


export type MutationUpdateFlatRateFulfillmentRestrictionArgs = {
  input: UpdateFlatRateFulfillmentRestrictionInput;
};


export type MutationUpdateFulfillmentOptionsForGroupArgs = {
  input: UpdateFulfillmentOptionsForGroupInput;
};


export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput;
};


export type MutationUpdateGroupsForAccountsArgs = {
  input: UpdateGroupsForAccountsInput;
};


export type MutationUpdateMediaRecordPriorityArgs = {
  input: UpdateMediaRecordPriorityInput;
};


export type MutationUpdateNavigationItemArgs = {
  input: UpdateNavigationItemInput;
};


export type MutationUpdateNavigationTreeArgs = {
  input: UpdateNavigationTreeInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateOrderFulfillmentGroupArgs = {
  input: UpdateOrderFulfillmentGroupInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProductVariantArgs = {
  input: UpdateProductVariantInput;
};


export type MutationUpdateProductVariantPricesArgs = {
  input: UpdateProductVariantPricesInput;
};


export type MutationUpdateProductsVisibilityArgs = {
  input: UpdateProductsVisibilityInput;
};


export type MutationUpdateShopArgs = {
  input: UpdateShopInput;
};


export type MutationUpdateShopSettingsArgs = {
  input: UpdateShopSettingsInput;
};


export type MutationUpdateSimpleInventoryArgs = {
  input: UpdateSimpleInventoryInput;
};


export type MutationUpdateSurchargeArgs = {
  input: UpdateSurchargeInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput;
};


export type MutationUpdateTemplateArgs = {
  input: UpdateTemplateInput;
};


export type MutationVerifyAuthenticationArgs = {
  params: AuthenticateParamsInput;
  serviceName: Scalars['String']['input'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifySmtpEmailSettingsArgs = {
  input: VerifySmtpEmailSettingsInput;
};

export type NavigationItem = Node & {
  __typename?: 'NavigationItem';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<NavigationItemData>;
  draftData?: Maybe<NavigationItemData>;
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  shopId: Scalars['ID']['output'];
};

export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection';
  edges?: Maybe<Array<Maybe<NavigationItemEdge>>>;
  nodes?: Maybe<Array<Maybe<NavigationItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NavigationItemContent = {
  __typename?: 'NavigationItemContent';
  language: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemContentInput = {
  language: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationItemData = {
  __typename?: 'NavigationItemData';
  classNames?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Array<Maybe<NavigationItemContent>>>;
  contentForLanguage?: Maybe<Scalars['String']['output']>;
  isUrlRelative?: Maybe<Scalars['Boolean']['output']>;
  shouldOpenInNewWindow?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemDataInput = {
  classNames?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Array<InputMaybe<NavigationItemContentInput>>>;
  isUrlRelative?: InputMaybe<Scalars['Boolean']['input']>;
  shouldOpenInNewWindow?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationItemEdge = NodeEdge & {
  __typename?: 'NavigationItemEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<NavigationItem>;
};

export type NavigationItemInput = {
  draftData?: InputMaybe<NavigationItemDataInput>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  shopId: Scalars['ID']['input'];
};

export enum NavigationItemSortByField {
  Id = '_id',
  CreatedAt = 'createdAt'
}

export type NavigationTree = Node & {
  __typename?: 'NavigationTree';
  _id: Scalars['ID']['output'];
  draftItems?: Maybe<Array<Maybe<NavigationTreeItem>>>;
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<NavigationTreeItem>>>;
  name: Scalars['String']['output'];
  shopId: Scalars['ID']['output'];
};

export type NavigationTreeInput = {
  draftItems?: InputMaybe<Array<InputMaybe<NavigationTreeItemInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationTreeItem = {
  __typename?: 'NavigationTreeItem';
  expanded?: Maybe<Scalars['Boolean']['output']>;
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  isSecondary?: Maybe<Scalars['Boolean']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Maybe<NavigationTreeItem>>>;
  navigationItem: NavigationItem;
};

export type NavigationTreeItemInput = {
  expanded?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isSecondary?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<NavigationTreeItemInput>>>;
  navigationItemId: Scalars['ID']['input'];
};

export type Node = {
  _id: Scalars['ID']['output'];
};

export type NodeEdge = {
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Node>;
};

export type Order = Node & {
  __typename?: 'Order';
  _id: Scalars['ID']['output'];
  account?: Maybe<Account>;
  billingName?: Maybe<Scalars['String']['output']>;
  cartId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayStatus: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fulfillmentGroups: Array<Maybe<OrderFulfillmentGroup>>;
  notes: Array<Maybe<OrderNote>>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  referenceId: Scalars['String']['output'];
  refunds?: Maybe<Array<Maybe<Refund>>>;
  shop: Shop;
  status: Scalars['String']['output'];
  summary: OrderSummary;
  surcharges: Array<Maybe<AppliedSurcharge>>;
  totalItemQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type OrderDisplayStatusArgs = {
  language: Scalars['String']['input'];
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edges?: Maybe<Array<Maybe<OrderEdge>>>;
  nodes?: Maybe<Array<Maybe<Order>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderEdge = NodeEdge & {
  __typename?: 'OrderEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Order>;
};

export type OrderFilterInput = {
  createdAt?: InputMaybe<CreatedAtInput>;
  fulfillmentStatus?: InputMaybe<Array<InputMaybe<OrderFulfillmentStatus>>>;
  paymentStatus?: InputMaybe<Array<InputMaybe<OrderPaymentStatus>>>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrderStatus>;
};

export type OrderFulfillmentGroup = Node & {
  __typename?: 'OrderFulfillmentGroup';
  _id: Scalars['ID']['output'];
  data?: Maybe<OrderFulfillmentGroupData>;
  displayStatus: Scalars['String']['output'];
  items?: Maybe<OrderItemConnection>;
  selectedFulfillmentOption: FulfillmentOption;
  shippingLabelUrl?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  status: Scalars['String']['output'];
  summary: OrderSummary;
  taxSummary?: Maybe<TaxSummary>;
  totalItemQuantity: Scalars['Int']['output'];
  tracking?: Maybe<Scalars['String']['output']>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  type: FulfillmentType;
};


export type OrderFulfillmentGroupDisplayStatusArgs = {
  language: Scalars['String']['input'];
};


export type OrderFulfillmentGroupItemsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderFulfillmentGroupItemsSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type OrderFulfillmentGroupData = ShippingOrderFulfillmentGroupData;

export type OrderFulfillmentGroupDataInput = {
  shippingAddress?: InputMaybe<AddressInput>;
};

export type OrderFulfillmentGroupExistingOrderInput = {
  data?: InputMaybe<OrderFulfillmentGroupDataInput>;
  items?: InputMaybe<Array<InputMaybe<OrderFulfillmentGroupItemInput>>>;
  selectedFulfillmentMethodId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  type: FulfillmentType;
};

export type OrderFulfillmentGroupInput = {
  data?: InputMaybe<OrderFulfillmentGroupDataInput>;
  items: Array<InputMaybe<OrderFulfillmentGroupItemInput>>;
  selectedFulfillmentMethodId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  type: FulfillmentType;
};

export type OrderFulfillmentGroupItemInput = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  price: Scalars['Float']['input'];
  productConfiguration: ProductConfigurationInput;
  quantity: Scalars['Int']['input'];
};

export enum OrderFulfillmentGroupItemsSortByField {
  Id = '_id',
  AddedAt = 'addedAt'
}

export enum OrderFulfillmentStatus {
  Completed = 'completed',
  New = 'new',
  Processing = 'processing'
}

export type OrderInput = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  currencyCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fulfillmentGroups: Array<InputMaybe<OrderFulfillmentGroupInput>>;
  shopId: Scalars['String']['input'];
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  _id: Scalars['ID']['output'];
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  attributes?: Maybe<Array<Maybe<OrderItemAttribute>>>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  imageURLs?: Maybe<ImageSizes>;
  isTaxable: Scalars['Boolean']['output'];
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  optionTitle?: Maybe<Scalars['String']['output']>;
  parcel?: Maybe<ShippingParcel>;
  price: Money;
  productConfiguration: ProductConfiguration;
  productSlug?: Maybe<Scalars['String']['output']>;
  productTags?: Maybe<TagConnection>;
  productType?: Maybe<Scalars['String']['output']>;
  productVendor?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  shop: Shop;
  status: Scalars['String']['output'];
  subtotal: Money;
  tax: Money;
  taxCode?: Maybe<Scalars['String']['output']>;
  taxableAmount: Money;
  taxes: Array<Maybe<CalculatedTax>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variantTitle?: Maybe<Scalars['String']['output']>;
};


export type OrderItemProductTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type OrderItemAttribute = {
  __typename?: 'OrderItemAttribute';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  edges?: Maybe<Array<Maybe<OrderItemEdge>>>;
  nodes?: Maybe<Array<Maybe<OrderItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderItemEdge = NodeEdge & {
  __typename?: 'OrderItemEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<OrderItem>;
};

export type OrderNote = {
  __typename?: 'OrderNote';
  account: Account;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderPaymentStatus {
  Completed = 'completed',
  Created = 'created'
}

export enum OrderStatus {
  Canceled = 'canceled',
  Completed = 'completed',
  New = 'new',
  Processing = 'processing'
}

export type OrderSummary = {
  __typename?: 'OrderSummary';
  discountTotal: Money;
  effectiveTaxRate: Rate;
  fulfillmentTotal: Money;
  itemTotal: Money;
  surchargeTotal?: Maybe<Money>;
  taxTotal: Money;
  taxableAmount: Money;
  total: Money;
};

export type OrdersByAccountIdConnection = {
  __typename?: 'OrdersByAccountIdConnection';
  edges?: Maybe<Array<Maybe<OrdersByAccountIdEdge>>>;
  nodes?: Maybe<Array<Maybe<Order>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrdersByAccountIdEdge = NodeEdge & {
  __typename?: 'OrdersByAccountIdEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Order>;
};

export enum OrdersByAccountIdSortByField {
  Id = '_id',
  CreatedAt = 'createdAt'
}

export enum OrdersSortByField {
  Id = '_id',
  CreatedAt = 'createdAt'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type Payment = Node & {
  __typename?: 'Payment';
  _id: Scalars['ID']['output'];
  amount: Money;
  billingAddress?: Maybe<Address>;
  captureErrorCode?: Maybe<Scalars['String']['output']>;
  captureErrorMessage?: Maybe<Scalars['String']['output']>;
  cardBrand?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<PaymentData>;
  displayName: Scalars['String']['output'];
  isAuthorizationCanceled: Scalars['Boolean']['output'];
  isCaptured: Scalars['Boolean']['output'];
  method: PaymentMethod;
  mode?: Maybe<Scalars['String']['output']>;
  processor?: Maybe<Scalars['String']['output']>;
  refunds?: Maybe<Array<Maybe<Refund>>>;
  riskLevel?: Maybe<RiskLevel>;
  status: PaymentStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
};

export type PaymentData = ExampleIouPaymentData | FakeData | StripePaymentIntentData;

export type PaymentInput = {
  amount: Scalars['Float']['input'];
  billingAddress?: InputMaybe<AddressInput>;
  data?: InputMaybe<Scalars['JSONObject']['input']>;
  method: PaymentMethodName;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  canRefund: Scalars['Boolean']['output'];
  data?: Maybe<PaymentMethodData>;
  displayName: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pluginName: Scalars['String']['output'];
};

export type PaymentMethodData = ExampleIouPaymentMethodData | FakeData;

export enum PaymentMethodName {
  IouExample = 'iou_example',
  None = 'none',
  StripePaymentIntent = 'stripe_payment_intent'
}

export enum PaymentStatus {
  Adjustments = 'adjustments',
  Approved = 'approved',
  Canceled = 'canceled',
  Completed = 'completed',
  Created = 'created',
  Error = 'error',
  PartialRefund = 'partialRefund',
  Refunded = 'refunded'
}

export type PlaceOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  order: OrderInput;
  payments?: InputMaybe<Array<InputMaybe<PaymentInput>>>;
};

export type PlaceOrderPayload = {
  __typename?: 'PlaceOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orders: Array<Maybe<Order>>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Plugin = {
  __typename?: 'Plugin';
  name: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentProductHash?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isVisible: Scalars['Boolean']['output'];
  media?: Maybe<Array<Maybe<ImageInfo>>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metafields: Array<Maybe<Metafield>>;
  originCountry?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `pricing` */
  price?: Maybe<ProductPriceRange>;
  pricing: ProductPricingInfo;
  productType?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedProductHash?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  shouldAppearInSitemap?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  socialMetadata?: Maybe<Array<Maybe<SocialMetadata>>>;
  supportedFulfillmentTypes: Array<Maybe<FulfillmentType>>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  tags?: Maybe<TagConnection>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variants: Array<Maybe<ProductVariant>>;
  vendor?: Maybe<Scalars['String']['output']>;
};


export type ProductMediaArgs = {
  shouldIncludeVariantMedia?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type ProductVariantsArgs = {
  shouldIncludeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  shouldIncludeHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductConfiguration = {
  __typename?: 'ProductConfiguration';
  productId: Scalars['ID']['output'];
  productVariantId: Scalars['ID']['output'];
};

export type ProductConfigurationInput = {
  productId: Scalars['ID']['input'];
  productVariantId: Scalars['ID']['input'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Product>;
};

export type ProductInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  facebookMsg?: InputMaybe<Scalars['String']['input']>;
  googleplusMsg?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  originCountry?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pinterestMsg?: InputMaybe<Scalars['String']['input']>;
  productType?: InputMaybe<Scalars['String']['input']>;
  shouldAppearInSitemap?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  supportedFulfillmentTypes?: InputMaybe<Array<InputMaybe<FulfillmentType>>>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  twitterMsg?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Scalars['String']['output']>;
};

export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  compareAtPrice?: Maybe<Money>;
  currency: Currency;
  currencyExchangePricing?: Maybe<CurrencyExchangeProductPricingInfo>;
  displayPrice: Scalars['String']['output'];
  maxPrice: Scalars['Float']['output'];
  minPrice: Scalars['Float']['output'];
  price?: Maybe<Scalars['Float']['output']>;
};


export type ProductPricingInfoCurrencyExchangePricingArgs = {
  currencyCode: Scalars['String']['input'];
};

export enum ProductSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ProductTagsOperationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  shopId: Scalars['ID']['input'];
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductTagsOperationPayload = {
  __typename?: 'ProductTagsOperationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  foundCount?: Maybe<Scalars['Int']['output']>;
  notFoundCount?: Maybe<Scalars['Int']['output']>;
  updatedCount?: Maybe<Scalars['Int']['output']>;
  writeErrors?: Maybe<Array<Maybe<WriteError>>>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  _id: Scalars['ID']['output'];
  attributeLabel?: Maybe<Scalars['String']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `pricing` */
  compareAtPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isTaxable?: Maybe<Scalars['Boolean']['output']>;
  isVisible: Scalars['Boolean']['output'];
  length?: Maybe<Scalars['Float']['output']>;
  media?: Maybe<Array<Maybe<ImageInfo>>>;
  metafields: Array<Maybe<Metafield>>;
  minOrderQuantity?: Maybe<Scalars['Int']['output']>;
  optionTitle?: Maybe<Scalars['String']['output']>;
  options: Array<Maybe<ProductVariant>>;
  originCountry?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `pricing` */
  price?: Maybe<Scalars['Float']['output']>;
  pricing: ProductPricingInfo;
  shop: Shop;
  sku?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  taxDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};


export type ProductVariantOptionsArgs = {
  shouldIncludeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  shouldIncludeHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVariantInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  attributeLabel?: InputMaybe<Scalars['String']['input']>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  compareAtPrice?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isTaxable?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  minOrderQuantity?: InputMaybe<Scalars['Int']['input']>;
  optionTitle?: InputMaybe<Scalars['String']['input']>;
  originCountry?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  taxDescription?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductVariantPricesInput = {
  compareAtPrice?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type PublishNavigationChangesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type PublishNavigationChangesPayload = {
  __typename?: 'PublishNavigationChangesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationTree?: Maybe<NavigationTree>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountCartByAccountId?: Maybe<Cart>;
  accounts: AccountConnection;
  addressValidation: AddressValidationResults;
  addressValidationRules: AddressValidationRuleConnection;
  addressValidationServices: Array<Maybe<AddressValidationService>>;
  anonymousCartByCartId?: Maybe<Cart>;
  availablePaymentMethods: Array<Maybe<PaymentMethod>>;
  catalogItemProduct?: Maybe<CatalogItemProduct>;
  catalogItems?: Maybe<CatalogItemConnection>;
  customers: AccountConnection;
  discountCodes?: Maybe<DiscountCodeConnection>;
  emailJobs: EmailJobConnection;
  emailTemplates?: Maybe<TemplateConnection>;
  flatRateFulfillmentMethod: FlatRateFulfillmentMethod;
  flatRateFulfillmentMethods: FlatRateFulfillmentMethodConnection;
  getFlatRateFulfillmentRestriction?: Maybe<FlatRateFulfillmentRestriction>;
  getFlatRateFulfillmentRestrictions: FlatRateFulfillmentRestrictionConnection;
  getUser?: Maybe<User>;
  globalSettings: GlobalSettings;
  group?: Maybe<Group>;
  groups?: Maybe<GroupConnection>;
  invitations: InvitationConnection;
  navigationItemsByShopId?: Maybe<NavigationItemConnection>;
  navigationTreeById?: Maybe<NavigationTree>;
  orderById?: Maybe<Order>;
  orderByReferenceId?: Maybe<Order>;
  orders: OrderConnection;
  ordersByAccountId: OrdersByAccountIdConnection;
  paymentMethods: Array<Maybe<PaymentMethod>>;
  ping: Scalars['String']['output'];
  primaryShop?: Maybe<Shop>;
  primaryShopId?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Product>;
  products?: Maybe<ProductConnection>;
  productsByTagId: TagProductConnection;
  refunds?: Maybe<Array<Maybe<Refund>>>;
  refundsByPaymentId?: Maybe<Array<Maybe<Refund>>>;
  roles?: Maybe<RoleConnection>;
  shop?: Maybe<Shop>;
  shopBySlug?: Maybe<Shop>;
  shopSettings: ShopSettings;
  shops?: Maybe<ShopConnection>;
  simpleInventory?: Maybe<SimpleInventoryInfo>;
  sitemap?: Maybe<Sitemap>;
  surchargeById?: Maybe<Surcharge>;
  surcharges: SurchargeConnection;
  systemInformation: SystemInformation;
  tag?: Maybe<Tag>;
  tags?: Maybe<TagConnection>;
  taxCodes: Array<Maybe<TaxCode>>;
  taxRates?: Maybe<TaxRateConnection>;
  taxServices: Array<Maybe<TaxService>>;
  twoFactorSecret?: Maybe<TwoFactorSecretKey>;
  vendors?: Maybe<VendorConnection>;
  viewer?: Maybe<Account>;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountCartByAccountIdArgs = {
  accountId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  notInAnyGroups?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AccountSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryAddressValidationArgs = {
  address: AddressInput;
  shopId: Scalars['ID']['input'];
};


export type QueryAddressValidationRulesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  serviceNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<AddressValidationRuleSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryAnonymousCartByCartIdArgs = {
  cartId: Scalars['ID']['input'];
  cartToken: Scalars['String']['input'];
};


export type QueryAvailablePaymentMethodsArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryCatalogItemProductArgs = {
  shopId?: InputMaybe<Scalars['ID']['input']>;
  slugOrId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCatalogItemsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  booleanFilters?: InputMaybe<Array<InputMaybe<CatalogBooleanFilter>>>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  shopIds: Array<InputMaybe<Scalars['ID']['input']>>;
  sortBy?: InputMaybe<CatalogItemSortByField>;
  sortByPriceCurrencyCode?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<SortOrder>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AccountSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryDiscountCodesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  filters?: InputMaybe<DiscountCodeFilterInput>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
};


export type QueryEmailJobsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryEmailTemplatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
};


export type QueryFlatRateFulfillmentMethodArgs = {
  methodId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};


export type QueryFlatRateFulfillmentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
};


export type QueryGetFlatRateFulfillmentRestrictionArgs = {
  restrictionId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};


export type QueryGetFlatRateFulfillmentRestrictionsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<FlatRateFulfillmentRestrictionSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<GroupSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryInvitationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<AccountSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryNavigationItemsByShopIdArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<NavigationItemSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryNavigationTreeByIdArgs = {
  id: Scalars['ID']['input'];
  language: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
  shouldIncludeSecondary?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrderByIdArgs = {
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderByReferenceIdArgs = {
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  filters?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<OrdersSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryOrdersByAccountIdArgs = {
  accountId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shopIds: Array<InputMaybe<Scalars['ID']['input']>>;
  sortBy?: InputMaybe<OrdersByAccountIdSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryPaymentMethodsArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  productId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  metafieldKey?: InputMaybe<Scalars['String']['input']>;
  metafieldValue?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceMax?: InputMaybe<Scalars['Float']['input']>;
  priceMin?: InputMaybe<Scalars['Float']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  query?: InputMaybe<Scalars['String']['input']>;
  shopIds: Array<InputMaybe<Scalars['ID']['input']>>;
  sortBy?: InputMaybe<ProductSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryProductsByTagIdArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  tagId: Scalars['ID']['input'];
};


export type QueryRefundsArgs = {
  orderId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRefundsByPaymentIdArgs = {
  orderId: Scalars['ID']['input'];
  paymentId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<RoleSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryShopArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShopBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryShopSettingsArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryShopsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<GroupSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QuerySimpleInventoryArgs = {
  productConfiguration: ProductConfigurationInput;
  shopId: Scalars['ID']['input'];
};


export type QuerySitemapArgs = {
  handle: Scalars['String']['input'];
  shopUrl: Scalars['String']['input'];
};


export type QuerySurchargeByIdArgs = {
  shopId: Scalars['ID']['input'];
  surchargeId: Scalars['ID']['input'];
};


export type QuerySurchargesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  sortBy?: InputMaybe<SurchargeSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QuerySystemInformationArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryTagArgs = {
  shopId: Scalars['ID']['input'];
  shouldIncludeInvisible?: InputMaybe<Scalars['Boolean']['input']>;
  slugOrId: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  excludedTagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  isTopLevel?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
  shouldIncludeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  shouldIncludeInvisible?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryTaxCodesArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryTaxRatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopId: Scalars['ID']['input'];
};


export type QueryTaxServicesArgs = {
  shopId: Scalars['ID']['input'];
};


export type QueryVendorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shopIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortOrder?: InputMaybe<SortOrder>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Rate = {
  __typename?: 'Rate';
  amount: Scalars['Float']['output'];
  displayPercent: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
};

export type RecalculateReservedSimpleInventoryInput = {
  productConfiguration: ProductConfigurationInput;
  shopId: Scalars['ID']['input'];
};

export type RecalculateReservedSimpleInventoryPayload = {
  __typename?: 'RecalculateReservedSimpleInventoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  inventoryInfo: SimpleInventoryInfo;
};

export type ReconcileCartsInput = {
  anonymousCartId: Scalars['ID']['input'];
  cartToken: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<CartReconciliationMode>;
  shopId: Scalars['ID']['input'];
};

export type ReconcileCartsPayload = {
  __typename?: 'ReconcileCartsPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  _id: Scalars['ID']['output'];
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  paymentDisplayName: Scalars['String']['output'];
  paymentId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
};

export type RemoveAccountAddressBookEntryInput = {
  accountId: Scalars['ID']['input'];
  addressId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveAccountAddressBookEntryPayload = {
  __typename?: 'RemoveAccountAddressBookEntryPayload';
  address?: Maybe<Address>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveAccountEmailRecordInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['Email']['input'];
};

export type RemoveAccountEmailRecordPayload = {
  __typename?: 'RemoveAccountEmailRecordPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveAccountFromGroupInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
};

export type RemoveAccountFromGroupPayload = {
  __typename?: 'RemoveAccountFromGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group: Group;
};

export type RemoveAccountGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  shopId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveAccountGroupPayload = {
  __typename?: 'RemoveAccountGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
};

export type RemoveCartItemsInput = {
  cartId: Scalars['ID']['input'];
  cartItemIds: Array<InputMaybe<Scalars['ID']['input']>>;
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveCartItemsPayload = {
  __typename?: 'RemoveCartItemsPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveDiscountCodeFromCartInput = {
  cartId: Scalars['ID']['input'];
  discountId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveDiscountCodeFromCartPayload = {
  __typename?: 'RemoveDiscountCodeFromCartPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type RemoveTagPayload = {
  __typename?: 'RemoveTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tag: Tag;
};

export enum RestrictionTypeEnum {
  Allow = 'allow',
  Deny = 'deny'
}

export type RetryFailedEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jobId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type RetryFailedEmailPayload = {
  __typename?: 'RetryFailedEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  emailSent: Scalars['Boolean']['output'];
};

export enum RiskLevel {
  Elevated = 'elevated',
  Highest = 'highest',
  Normal = 'normal'
}

export type Role = Node & {
  __typename?: 'Role';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  nodes?: Maybe<Array<Maybe<Role>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RoleEdge = NodeEdge & {
  __typename?: 'RoleEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Role>;
};

export enum RoleSortByField {
  Id = '_id',
  Name = 'name'
}

export type SelectFulfillmentOptionForGroupInput = {
  cartId: Scalars['ID']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillmentGroupId: Scalars['ID']['input'];
  fulfillmentMethodId: Scalars['ID']['input'];
};

export type SelectFulfillmentOptionForGroupPayload = {
  __typename?: 'SelectFulfillmentOptionForGroupPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendResetAccountPasswordEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type SendResetAccountPasswordEmailPayload = {
  __typename?: 'SendResetAccountPasswordEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
};

export type SetAccountDefaultEmailInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['Email']['input'];
};

export type SetAccountDefaultEmailPayload = {
  __typename?: 'SetAccountDefaultEmailPayload';
  account?: Maybe<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetEmailOnAnonymousCartInput = {
  cartId: Scalars['ID']['input'];
  cartToken: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type SetEmailOnAnonymousCartPayload = {
  __typename?: 'SetEmailOnAnonymousCartPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetShippingAddressOnCartInput = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  cartId: Scalars['ID']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SetShippingAddressOnCartPayload = {
  __typename?: 'SetShippingAddressOnCartPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetTagHeroMediaInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileRecord?: InputMaybe<Scalars['JSONObject']['input']>;
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type SetTagHeroMediaPayload = {
  __typename?: 'SetTagHeroMediaPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tag: Tag;
};

export type ShippingOrderFulfillmentGroupData = {
  __typename?: 'ShippingOrderFulfillmentGroupData';
  shippingAddress: Address;
};

export type ShippingParcel = {
  __typename?: 'ShippingParcel';
  containers?: Maybe<Scalars['String']['output']>;
  distanceUnit?: Maybe<DistanceUnit>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  massUnit?: Maybe<MassUnit>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Shop = Node & {
  __typename?: 'Shop';
  _id: Scalars['ID']['output'];
  addressBook?: Maybe<Array<Maybe<Address>>>;
  allowGuestCheckout?: Maybe<Scalars['Boolean']['output']>;
  baseUOL?: Maybe<Scalars['String']['output']>;
  baseUOM?: Maybe<Scalars['String']['output']>;
  brandAssets?: Maybe<ShopBrandAssets>;
  currency: Currency;
  defaultNavigationTree?: Maybe<NavigationTree>;
  defaultNavigationTreeId?: Maybe<Scalars['String']['output']>;
  defaultParcelSize?: Maybe<ShopParcelSize>;
  description?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Maybe<EmailRecord>>>;
  groups?: Maybe<GroupConnection>;
  keywords?: Maybe<Scalars['String']['output']>;
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  roles?: Maybe<RoleConnection>;
  shopLogoUrls?: Maybe<ShopLogoUrls>;
  shopType?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  storefrontUrls?: Maybe<StorefrontUrls>;
  tags?: Maybe<TagConnection>;
  timezone?: Maybe<Scalars['String']['output']>;
  unitsOfLength?: Maybe<Array<Maybe<UnitOfLength>>>;
  unitsOfMeasure?: Maybe<Array<Maybe<UnitOfMeasure>>>;
};


export type ShopDefaultNavigationTreeArgs = {
  language: Scalars['String']['input'];
  shouldIncludeSecondary?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ShopGroupsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<GroupSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type ShopRolesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<RoleSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type ShopTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  isTopLevel?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  shouldIncludeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type ShopBrandAssets = {
  __typename?: 'ShopBrandAssets';
  navbarBrandImage?: Maybe<ImageSizes>;
  navbarBrandImageId?: Maybe<Scalars['String']['output']>;
};

export type ShopConnection = {
  __typename?: 'ShopConnection';
  edges?: Maybe<Array<Maybe<ShopEdge>>>;
  nodes?: Maybe<Array<Maybe<Shop>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShopEdge = NodeEdge & {
  __typename?: 'ShopEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Shop>;
};

export type ShopLogoUrls = {
  __typename?: 'ShopLogoUrls';
  primaryShopLogoUrl?: Maybe<Scalars['String']['output']>;
};

export type ShopLogoUrlsInput = {
  primaryShopLogoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ShopParcelSize = {
  __typename?: 'ShopParcelSize';
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ShopParcelSizeInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ShopSettings = {
  __typename?: 'ShopSettings';
  canSellVariantWithoutInventory: Scalars['Boolean']['output'];
  defaultTaxCode?: Maybe<Scalars['String']['output']>;
  doNotUse?: Maybe<Scalars['String']['output']>;
  fallbackTaxServiceName?: Maybe<Scalars['String']['output']>;
  isShippingRatesFulfillmentEnabled?: Maybe<Scalars['Boolean']['output']>;
  primaryTaxServiceName?: Maybe<Scalars['String']['output']>;
  shouldNavigationTreeItemsBeAdminOnly: Scalars['Boolean']['output'];
  shouldNavigationTreeItemsBePubliclyVisible: Scalars['Boolean']['output'];
  shouldNavigationTreeItemsBeSecondaryNavOnly: Scalars['Boolean']['output'];
  sitemapRefreshPeriod: Scalars['String']['output'];
};

export type ShopSettingsUpdates = {
  canSellVariantWithoutInventory?: InputMaybe<Scalars['Boolean']['input']>;
  defaultTaxCode?: InputMaybe<Scalars['String']['input']>;
  doNotUse?: InputMaybe<Scalars['String']['input']>;
  fallbackTaxServiceName?: InputMaybe<Scalars['String']['input']>;
  isShippingRatesFulfillmentEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  primaryTaxServiceName?: InputMaybe<Scalars['String']['input']>;
  shouldNavigationTreeItemsBeAdminOnly?: InputMaybe<Scalars['Boolean']['input']>;
  shouldNavigationTreeItemsBePubliclyVisible?: InputMaybe<Scalars['Boolean']['input']>;
  shouldNavigationTreeItemsBeSecondaryNavOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sitemapRefreshPeriod?: InputMaybe<Scalars['String']['input']>;
};

export type SimpleInventoryInfo = {
  __typename?: 'SimpleInventoryInfo';
  canBackorder?: Maybe<Scalars['Boolean']['output']>;
  inventoryInStock?: Maybe<Scalars['Int']['output']>;
  inventoryReserved?: Maybe<Scalars['Int']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  lowInventoryWarningThreshold?: Maybe<Scalars['Int']['output']>;
  productConfiguration: ProductConfiguration;
};

export type Sitemap = {
  __typename?: 'Sitemap';
  createdAt: Scalars['Date']['output'];
  handle: Scalars['String']['output'];
  shopId: Scalars['String']['output'];
  xml: Scalars['String']['output'];
};

export type SocialMetadata = {
  __typename?: 'SocialMetadata';
  message?: Maybe<Scalars['String']['output']>;
  service?: Maybe<SocialNetwork>;
};

export enum SocialNetwork {
  Facebook = 'facebook',
  Googleplus = 'googleplus',
  Pinterest = 'pinterest',
  Twitter = 'twitter'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SplitOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  newItemQuantity: Scalars['Int']['input'];
  orderId: Scalars['ID']['input'];
};

export type SplitOrderItemPayload = {
  __typename?: 'SplitOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  newItemId: Scalars['ID']['output'];
  order: Order;
};

export type StorefrontUrls = {
  __typename?: 'StorefrontUrls';
  storefrontAccountProfileUrl?: Maybe<Scalars['String']['output']>;
  storefrontHomeUrl?: Maybe<Scalars['String']['output']>;
  storefrontLoginUrl?: Maybe<Scalars['String']['output']>;
  storefrontOrderUrl?: Maybe<Scalars['String']['output']>;
  storefrontOrdersUrl?: Maybe<Scalars['String']['output']>;
};

export type StorefrontUrlsInput = {
  storefrontAccountProfileUrl?: InputMaybe<Scalars['String']['input']>;
  storefrontHomeUrl?: InputMaybe<Scalars['String']['input']>;
  storefrontLoginUrl?: InputMaybe<Scalars['String']['input']>;
  storefrontOrderUrl?: InputMaybe<Scalars['String']['input']>;
  storefrontOrdersUrl?: InputMaybe<Scalars['String']['input']>;
};

export type StripePaymentIntentData = {
  __typename?: 'StripePaymentIntentData';
  chargeId: Scalars['String']['output'];
  customerId?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  tick: Scalars['Int']['output'];
};

export type SuggestedAddress = {
  __typename?: 'SuggestedAddress';
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  postal: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  _id: Scalars['ID']['output'];
  amount: Money;
  attributes?: Maybe<Array<Maybe<SurchargeAttributeRestrictions>>>;
  createdAt: Scalars['DateTime']['output'];
  destination?: Maybe<SurchargeDestinationRestrictions>;
  message: Scalars['String']['output'];
  messagesByLanguage?: Maybe<Array<Maybe<SurchargeMessagesByLanguage>>>;
  methodIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  shopId: Scalars['ID']['output'];
  type: SurchargeTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SurchargeMessageArgs = {
  language: Scalars['String']['input'];
};

export type SurchargeAttributeRestrictions = {
  __typename?: 'SurchargeAttributeRestrictions';
  operator?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Scalars['String']['output']>;
  propertyType?: Maybe<SurchargePropertyType>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SurchargeAttributeRestrictionsInput = {
  operator?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  propertyType?: InputMaybe<SurchargePropertyType>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SurchargeConnection = {
  __typename?: 'SurchargeConnection';
  edges?: Maybe<Array<Maybe<SurchargeEdge>>>;
  nodes?: Maybe<Array<Maybe<Surcharge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SurchargeDestinationRestrictions = {
  __typename?: 'SurchargeDestinationRestrictions';
  country?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  region?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SurchargeDestinationRestrictionsInput = {
  country?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postal?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  region?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SurchargeEdge = {
  __typename?: 'SurchargeEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Surcharge>;
};

export type SurchargeInput = {
  amount: Scalars['Float']['input'];
  attributes?: InputMaybe<Array<InputMaybe<SurchargeAttributeRestrictionsInput>>>;
  destination?: InputMaybe<SurchargeDestinationRestrictionsInput>;
  messagesByLanguage: Array<InputMaybe<MessagesByLanguageInput>>;
  methodIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: SurchargeTypeEnum;
};

export type SurchargeMessagesByLanguage = {
  __typename?: 'SurchargeMessagesByLanguage';
  content: Scalars['String']['output'];
  language: Scalars['String']['output'];
};

export enum SurchargePropertyType {
  Bool = 'bool',
  Float = 'float',
  Int = 'int',
  String = 'string'
}

export enum SurchargeSortByField {
  CreatedAt = 'createdAt'
}

export enum SurchargeTypeEnum {
  Surcharge = 'surcharge'
}

export type SystemInformation = {
  __typename?: 'SystemInformation';
  apiVersion: Scalars['String']['output'];
  mongoVersion: DatabaseInformation;
  plugins?: Maybe<Array<Maybe<Plugin>>>;
};

export type Tag = Deletable & Node & {
  __typename?: 'Tag';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayTitle?: Maybe<Scalars['String']['output']>;
  featuredProductIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  heroMediaUrl?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  isTopLevel: Scalars['Boolean']['output'];
  isVisible: Scalars['Boolean']['output'];
  metafields?: Maybe<Array<Maybe<Metafield>>>;
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  shop: Shop;
  slug?: Maybe<Scalars['String']['output']>;
  subTagIds: Array<Maybe<Scalars['ID']['output']>>;
  subTags?: Maybe<TagConnection>;
  updatedAt: Scalars['DateTime']['output'];
};


export type TagSubTagsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TagSortByField>;
  sortOrder?: InputMaybe<SortOrder>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges?: Maybe<Array<Maybe<TagEdge>>>;
  nodes?: Maybe<Array<Maybe<Tag>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagEdge = NodeEdge & {
  __typename?: 'TagEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Tag>;
};

export type TagProduct = {
  __typename?: 'TagProduct';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TagProductConnection = {
  __typename?: 'TagProductConnection';
  edges?: Maybe<Array<Maybe<TagProductEdge>>>;
  nodes?: Maybe<Array<Maybe<TagProduct>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagProductEdge = {
  __typename?: 'TagProductEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<TagProduct>;
};

export enum TagSortByField {
  Id = '_id',
  CreatedAt = 'createdAt',
  Name = 'name',
  Position = 'position',
  UpdatedAt = 'updatedAt'
}

export type TaxCode = {
  __typename?: 'TaxCode';
  code: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type TaxRate = {
  __typename?: 'TaxRate';
  _id: Scalars['ID']['output'];
  country?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  rate: Scalars['Float']['output'];
  region?: Maybe<Scalars['String']['output']>;
  shop: Shop;
  sourcing: TaxSource;
  taxCode?: Maybe<Scalars['String']['output']>;
};

export type TaxRateConnection = {
  __typename?: 'TaxRateConnection';
  edges?: Maybe<Array<Maybe<TaxRateEdge>>>;
  nodes?: Maybe<Array<Maybe<TaxRate>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TaxRateEdge = {
  __typename?: 'TaxRateEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<TaxRate>;
};

export type TaxService = {
  __typename?: 'TaxService';
  displayName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pluginName: Scalars['String']['output'];
};

export enum TaxSource {
  Destination = 'destination',
  Origin = 'origin'
}

export type TaxSummary = {
  __typename?: 'TaxSummary';
  calculatedAt: Scalars['DateTime']['output'];
  calculatedByTaxServiceName?: Maybe<Scalars['String']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
  tax: Money;
  taxableAmount: Money;
  taxes: Array<Maybe<CalculatedTax>>;
};

export type Template = Node & {
  __typename?: 'Template';
  _id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shopId: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges?: Maybe<Array<Maybe<TemplateEdge>>>;
  nodes?: Maybe<Array<Maybe<Template>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Template>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorSecretKey = {
  __typename?: 'TwoFactorSecretKey';
  ascii?: Maybe<Scalars['String']['output']>;
  base32?: Maybe<Scalars['String']['output']>;
  google_auth_qr?: Maybe<Scalars['String']['output']>;
  hex?: Maybe<Scalars['String']['output']>;
  otpauth_url?: Maybe<Scalars['String']['output']>;
  qr_code_ascii?: Maybe<Scalars['String']['output']>;
  qr_code_base32?: Maybe<Scalars['String']['output']>;
  qr_code_hex?: Maybe<Scalars['String']['output']>;
};

export type TwoFactorSecretKeyInput = {
  ascii?: InputMaybe<Scalars['String']['input']>;
  base32?: InputMaybe<Scalars['String']['input']>;
  google_auth_qr?: InputMaybe<Scalars['String']['input']>;
  hex?: InputMaybe<Scalars['String']['input']>;
  otpauth_url?: InputMaybe<Scalars['String']['input']>;
  qr_code_ascii?: InputMaybe<Scalars['String']['input']>;
  qr_code_base32?: InputMaybe<Scalars['String']['input']>;
  qr_code_hex?: InputMaybe<Scalars['String']['input']>;
};

export type UnitOfLength = {
  __typename?: 'UnitOfLength';
  default?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  uol?: Maybe<Scalars['String']['output']>;
};

export type UnitOfMeasure = {
  __typename?: 'UnitOfMeasure';
  default?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  uom?: Maybe<Scalars['String']['output']>;
};

export type UpdateAccountAddressBookEntryInput = {
  accountId: Scalars['ID']['input'];
  addressId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AddressType>;
  updates: AddressInput;
};

export type UpdateAccountAddressBookEntryPayload = {
  __typename?: 'UpdateAccountAddressBookEntryPayload';
  address?: Maybe<Address>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAccountGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  group: UpdateGroupInput;
  groupId: Scalars['ID']['input'];
  shopId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateAccountGroupPayload = {
  __typename?: 'UpdateAccountGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
};

export type UpdateAccountInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAddressValidationRuleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ruleId: Scalars['ID']['input'];
  serviceName: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateAddressValidationRulePayload = {
  __typename?: 'UpdateAddressValidationRulePayload';
  addressValidationRule: AddressValidationRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateAdminUiAccessInput = {
  accountIds: Array<InputMaybe<Scalars['String']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopIds: Array<InputMaybe<Scalars['String']['input']>>;
};

export type UpdateAdminUiAccessPayload = {
  __typename?: 'UpdateAdminUIAccessPayload';
  accounts?: Maybe<Array<Maybe<Account>>>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateCartItemInput = {
  cartItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type UpdateCartItemsQuantityInput = {
  cartId: Scalars['ID']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  items: Array<InputMaybe<UpdateCartItemInput>>;
};

export type UpdateCartItemsQuantityPayload = {
  __typename?: 'UpdateCartItemsQuantityPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCode?: InputMaybe<DiscountCodeInput>;
  discountCodeId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateDiscountCodePayload = {
  __typename?: 'UpdateDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountCode?: Maybe<DiscountCode>;
};

export type UpdateFlatRateFulfillmentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  method: FlatRateFulfillmentMethodInput;
  methodId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateFlatRateFulfillmentMethodPayload = {
  __typename?: 'UpdateFlatRateFulfillmentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  method: FlatRateFulfillmentMethod;
};

export type UpdateFlatRateFulfillmentRestrictionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  restriction: FlatRateFulfillmentRestrictionInput;
  restrictionId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'UpdateFlatRateFulfillmentRestrictionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  restriction: FlatRateFulfillmentRestriction;
};

export type UpdateFulfillmentOptionsForGroupInput = {
  cartId: Scalars['ID']['input'];
  cartToken?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fulfillmentGroupId: Scalars['ID']['input'];
};

export type UpdateFulfillmentOptionsForGroupPayload = {
  __typename?: 'UpdateFulfillmentOptionsForGroupPayload';
  cart: Cart;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateGlobalSettingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  settingsUpdates: GlobalSettingsUpdates;
};

export type UpdateGlobalSettingsPayload = {
  __typename?: 'UpdateGlobalSettingsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  globalSettings: GlobalSettings;
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroupsForAccountsInput = {
  accountIds: Array<InputMaybe<Scalars['ID']['input']>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type UpdateGroupsForAccountsPayload = {
  __typename?: 'UpdateGroupsForAccountsPayload';
  accounts: Array<Maybe<Account>>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type UpdateMediaRecordPriorityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  mediaRecordId: Scalars['ID']['input'];
  priority: Scalars['Int']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateMediaRecordPriorityPayload = {
  __typename?: 'UpdateMediaRecordPriorityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  mediaRecord: MediaRecord;
};

export type UpdateNavigationItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  navigationItem: NavigationItemInput;
  shopId: Scalars['ID']['input'];
};

export type UpdateNavigationItemPayload = {
  __typename?: 'UpdateNavigationItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationItem?: Maybe<NavigationItem>;
};

export type UpdateNavigationTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  navigationTree: NavigationTreeInput;
  shopId: Scalars['ID']['input'];
};

export type UpdateNavigationTreePayload = {
  __typename?: 'UpdateNavigationTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  navigationTree?: Maybe<NavigationTree>;
};

export type UpdateOrderFulfillmentGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderFulfillmentGroupId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  tracking?: InputMaybe<Scalars['String']['input']>;
  trackingUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderFulfillmentGroupPayload = {
  __typename?: 'UpdateOrderFulfillmentGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateProductInput = {
  product: ProductInput;
  productId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: Product;
};

export type UpdateProductVariantInput = {
  shopId: Scalars['ID']['input'];
  variant: ProductVariantInput;
  variantId: Scalars['ID']['input'];
};

export type UpdateProductVariantPayload = {
  __typename?: 'UpdateProductVariantPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  variant: ProductVariant;
};

export type UpdateProductVariantPricesInput = {
  prices: ProductVariantPricesInput;
  shopId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type UpdateProductVariantPricesPayload = {
  __typename?: 'UpdateProductVariantPricesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  variant: ProductVariant;
};

export type UpdateProductsVisibilityInput = {
  isVisible: Scalars['Boolean']['input'];
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  shopId: Scalars['ID']['input'];
};

export type UpdateProductsVisibilityPayload = {
  __typename?: 'UpdateProductsVisibilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  updatedCount?: Maybe<Scalars['Int']['output']>;
};

export type UpdateShopInput = {
  addressBook?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  allowGuestCheckout?: InputMaybe<Scalars['Boolean']['input']>;
  baseUOL?: InputMaybe<Scalars['String']['input']>;
  baseUOM?: InputMaybe<Scalars['String']['input']>;
  brandAssets?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  defaultParcelSize?: InputMaybe<ShopParcelSizeInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<EmailRecordInput>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  shopLogoUrls?: InputMaybe<ShopLogoUrlsInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storefrontUrls?: InputMaybe<StorefrontUrlsInput>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShopPayload = {
  __typename?: 'UpdateShopPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  shop: Shop;
};

export type UpdateShopSettingsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  settingsUpdates: ShopSettingsUpdates;
  shopId: Scalars['ID']['input'];
};

export type UpdateShopSettingsPayload = {
  __typename?: 'UpdateShopSettingsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  shopSettings: ShopSettings;
};

export type UpdateSimpleInventoryInput = {
  canBackorder?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  inventoryInStock?: InputMaybe<Scalars['Int']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowInventoryWarningThreshold?: InputMaybe<Scalars['Int']['input']>;
  productConfiguration: ProductConfigurationInput;
  shopId: Scalars['ID']['input'];
};

export type UpdateSimpleInventoryPayload = {
  __typename?: 'UpdateSimpleInventoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  inventoryInfo: SimpleInventoryInfo;
};

export type UpdateSurchargeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  surcharge: SurchargeInput;
  surchargeId: Scalars['ID']['input'];
};

export type UpdateSurchargePayload = {
  __typename?: 'UpdateSurchargePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  surcharge: Surcharge;
};

export type UpdateTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  displayTitle?: InputMaybe<Scalars['String']['input']>;
  featuredProductIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heroMediaUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isVisible: Scalars['Boolean']['input'];
  metafields?: InputMaybe<Array<InputMaybe<MetafieldInput>>>;
  name: Scalars['String']['input'];
  shopId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tag: Tag;
};

export type UpdateTaxRateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  shopId: Scalars['ID']['input'];
  sourcing?: InputMaybe<TaxSource>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  taxRateId: Scalars['ID']['input'];
};

export type UpdateTaxRatePayload = {
  __typename?: 'UpdateTaxRatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  taxRate: TaxRate;
};

export type UpdateTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplatePayload = {
  __typename?: 'UpdateTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  template: Template;
};

export type User = {
  __typename?: 'User';
  emails?: Maybe<Array<EmailRecord>>;
  id: Scalars['ID']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  name?: Maybe<Scalars['String']['output']>;
};

export type VendorConnection = {
  __typename?: 'VendorConnection';
  edges?: Maybe<Array<Maybe<VendorEdge>>>;
  nodes?: Maybe<Array<Maybe<Vendor>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VendorEdge = {
  __typename?: 'VendorEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node?: Maybe<Vendor>;
};

export type VerifySmtpEmailSettingsInput = {
  shopId: Scalars['ID']['input'];
};

export type VerifySmtpEmailSettingsInputPayload = {
  __typename?: 'VerifySMTPEmailSettingsInputPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isVerified: Scalars['Boolean']['output'];
};

export type WriteError = {
  __typename?: 'WriteError';
  documentId?: Maybe<Scalars['Int']['output']>;
  errorMsg?: Maybe<Scalars['String']['output']>;
};

export type CatalogItemProductQueryVariables = Exact<{
  shopIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  tagIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type CatalogItemProductQuery = { __typename?: 'Query', catalogItems?: { __typename?: 'CatalogItemConnection', edges?: Array<{ __typename?: 'CatalogItemEdge', node?: { __typename: 'CatalogItemContent' } | { __typename: 'CatalogItemProduct', product?: { __typename?: 'CatalogProduct', _id: string, title?: string | null, slug?: string | null, description?: string | null, primaryImage?: { __typename?: 'ImageInfo', URLs?: { __typename?: 'ImageSizes', original?: string | null } | null } | null, pricing: Array<{ __typename?: 'ProductPricingInfo', displayPrice: string } | null> } | null } | null } | null> | null } | null };

export type GetProductQueryVariables = Exact<{
  shopId: Scalars['ID']['input'];
  slugOrId: Scalars['String']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', catalogItemProduct?: { __typename?: 'CatalogItemProduct', product?: { __typename?: 'CatalogProduct', _id: string, title?: string | null, description?: string | null, pricing: Array<{ __typename?: 'ProductPricingInfo', displayPrice: string } | null>, primaryImage?: { __typename?: 'ImageInfo', URLs?: { __typename?: 'ImageSizes', medium?: string | null, small?: string | null, original?: string | null } | null } | null, variants?: Array<{ __typename?: 'CatalogProductVariant', _id: string, title?: string | null, attributeLabel: string, optionTitle?: string | null, pricing: Array<{ __typename?: 'ProductPricingInfo', displayPrice: string, currency: { __typename?: 'Currency', code: string } } | null> } | null> | null } | null } | null };


export const CatalogItemProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CatalogItemProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shopIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shopIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"tagIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CatalogItemProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"primaryImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"URLs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayPrice"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CatalogItemProductQuery, CatalogItemProductQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slugOrId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogItemProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shopId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}}},{"kind":"Argument","name":{"kind":"Name","value":"slugOrId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slugOrId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"URLs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"original"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"attributeLabel"}},{"kind":"Field","name":{"kind":"Name","value":"optionTitle"}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayPrice"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;