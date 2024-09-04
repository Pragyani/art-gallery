import { createSlice } from "@reduxjs/toolkit";

export const SavedPostSlice = createSlice({
    name: 'savedPosts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            if (!state.find(product => product.id === action.payload.id)) {
                state.push(action.payload);
            }
        },
        removePost: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        }
    }
})
export const { addPost, removePost } = SavedPostSlice.actions;

export const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
        addCartProducts: (state, action) => {
            if (!state.find(product => product.id === action.payload.id)) {
                state.push(action.payload);
            }
        },
        removeCartProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        }
    }
})

export const { addCartProducts, removeCartProduct } = cartProductsSlice.actions;

export default {
    savedPostsReducer: SavedPostSlice.reducer,
    cartProductsReducer: cartProductsSlice.reducer
};