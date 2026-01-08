"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name?: string;
  image?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  isLoading: boolean;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CART'; payload: { items: CartItem[]; total: number } }
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'UPDATE_ITEM'; payload: { productId: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  total: 0,
  isLoading: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_CART':
      return { ...state, items: action.payload.items, total: action.payload.total, isLoading: false };
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      let newItems;

      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        newItems = [...state.items, action.payload];
      }

      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: newItems, total: newTotal };
    }
    case 'UPDATE_ITEM': {
      const newItems = state.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: newItems, total: newTotal };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.productId !== action.payload);
      const newTotal = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return { ...state, items: newItems, total: newTotal };
    }
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addToCart: (productId: string, quantity: number, price: number, name?: string, image?: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Generate or get session ID
  const getSessionId = () => {
    if (typeof window === 'undefined') return '';
    let sessionId = localStorage.getItem('cartSessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('cartSessionId', sessionId);
    }
    return sessionId;
  };

  const getCart = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const sessionId = getSessionId();
      const response = await fetch(`/api/cart?sessionId=${sessionId}`);

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'SET_CART', payload: { items: data.items || [], total: data.total || 0 } });
      } else {
        console.error('Failed to fetch cart:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addToCart = async (productId: string, quantity: number, price: number, name?: string, image?: string) => {
    console.log('addToCart called with:', { productId, quantity, price, name, image });
    try {
      const sessionId = getSessionId();
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, productId, quantity, price, name, image }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'SET_CART', payload: { items: data.items, total: data.total } });
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      const sessionId = getSessionId();
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, productId, quantity }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'SET_CART', payload: { items: data.items, total: data.total } });
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      const sessionId = getSessionId();
      const response = await fetch(`/api/cart?sessionId=${sessionId}&productId=${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'SET_CART', payload: { items: data.items, total: data.total } });
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    dispatch({ type: 'CLEAR_CART' });
    try {
      const sessionId = getSessionId();
      // Clear cart from database
      await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });
      localStorage.removeItem('cartSessionId');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
