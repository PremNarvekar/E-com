import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.carts = action.payload;
        }
    }
})


export default userSlice.reducers;
export const { loadcart } = userSlice.actions;