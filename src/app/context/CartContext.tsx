"use client";
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Pricing } from "../components/types";

interface Product {
  _id: string;
  title: string;
  primaryImage?: {
    URLs?: {
      original?: string;
    };
  };
}

export type CartItem = {
  id: string;
  product: {
    _id: string;
    title: string;
    primaryImage: {
      URLs: {
        medium: string;
        small: string;
        original: string;
      };
    };
  };
  variant: {
    _id: string;
    title: string;
    pricing: Pricing[];
    optionTitle: string;
  };
  quantity: number;
};

export type CartState = {  // Exporting CartState
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_ITEM"; item: CartItem };

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExists = state.items.find(
        (item) =>
          item.product._id === action.item.product._id &&
          item.variant._id === action.item.variant._id
      );
      if (itemExists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product._id === action.item.product._id &&
              item.variant._id === action.item.variant._id
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item
          ),
        };
      } else {
        return { ...state, items: [...state.items, action.item] };
      }
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    case "UPDATE_ITEM": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id ? action.item : item
        ),
      };
    }
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
