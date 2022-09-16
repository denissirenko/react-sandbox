import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type CartItem = {
  id: string;
  count: number;
  title: string;
  description: string;
  price: number;
  inCart: boolean;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push({
        ...action.payload,
        count: 1,
      });

      state.totalPrice = [...state.items].reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
    plusItem(state, action: PayloadAction<String>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count++;
        state.totalPrice += Number(findItem.price);
      }
    },
    minusItem(state, action: PayloadAction<String>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
        state.totalPrice -= Number(findItem.price);
      }
    },
    removeItem(state, action: PayloadAction<String>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = [...state.items].reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, minusItem, removeItem, plusItem } = cartSlice.actions;

export default cartSlice.reducer;
