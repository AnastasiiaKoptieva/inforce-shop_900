import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface ProductsState {
    items: Product[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
    items: [],
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
     },
});

export default productsSlice.reducer;