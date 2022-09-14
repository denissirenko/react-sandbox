import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  inCart: boolean;
};

export interface CardsState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardsState = {
  products: [],
  status: 'idle',
};

export const fetchProducts = createAsyncThunk('product/fetchProductsStatus', async () => {
  const { data } = await axios.get('http://localhost:3001/products');
  return data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products = [];
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products = [];
        state.status = 'failed';
      });
  },
});

export const selectProductsData = (state: RootState) => state.products;

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
