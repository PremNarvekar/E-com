import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.carts = action.payload;
        }
    }
})


export default productSlice.reducers;
export const { loadcart } = productSlice.actions;