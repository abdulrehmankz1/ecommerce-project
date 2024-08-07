"use client"
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export interface FavoriteItem {
  id: string;
  title: string;
  imageUrl: string;
  pricing: { displayPrice: string }[];
  href: string; 
}

interface FavoritesState {
  items: FavoriteItem[];
}

type FavoritesAction = 
  | { type: 'ADD_TO_FAVORITES'; payload: FavoriteItem }
  | { type: 'REMOVE_FROM_FAVORITES'; id: string };

const initialState: FavoritesState = {
  items: [],
};

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
