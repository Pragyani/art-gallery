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

export const popularPostSlice = createSlice({
    name: 'popularPost',
    initialState: [],
    reducers: {
        addPopularPost: (state, action) => {
            if (!state.find(product => product.id === action.payload.id)) {
                state.push(action.payload);
            }
        },
        removePopularPost: (state, action) => {
            return state.filter(product => product.id !== action.payload.id);
        }
    }
})

export const { addPopularPost, removePopularPost } = popularPostSlice.actions;

export const inputSliceIndex = createSlice({
    name: 'inputslice',
    initialState: '',
    reducers: {
        setInput: (state, action) => action.payload
    }
})

export const { setInput } = inputSliceIndex.actions;

export default {
    savedPostsReducer: SavedPostSlice.reducer,
    cartProductsReducer: cartProductsSlice.reducer,
    popularPostReducer: popularPostSlice.reducer,
    inputSliceIndexReducer: inputSliceIndex.reducer
};