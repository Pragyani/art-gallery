import { createSlice } from "@reduxjs/toolkit";
import DesignDummyData from "../utils";

// Saved Posts Slice
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
});

export const { addPost, removePost } = SavedPostSlice.actions;

// Cart Products Slice
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
        },
        toggleCartProduct: (state, action) => {
            const existingProduct = state.find(product => product.id === action.payload.id);
            if (existingProduct) {
                return state.filter(product => product.id !== action.payload.id);
            } else {
                state.push(action.payload);
            }
        },
        setCartProducts: (state, action) => {
            return action.payload;
        }
    }
});

export const { addCartProducts, removeCartProduct, toggleCartProduct, setCartProducts } = cartProductsSlice.actions;

// Popular Posts Slice
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
});

export const { addPopularPost, removePopularPost } = popularPostSlice.actions;

// Input Slice
export const inputSliceIndex = createSlice({
    name: 'inputslice',
    initialState: '',
    reducers: {
        setInput: (state, action) => action.payload
    }
});

export const { setInput } = inputSliceIndex.actions;

//getting DEesignDummyData from the store nd also filter functionlity
export const productDetailsSlice = createSlice({
    name: 'products',
    initialState: {
        productList: DesignDummyData,
    },
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
        },
        clearProducts: (state) => {
            state.productList = DesignDummyData;
        },
        setFilter: (state, action) => {
            const filter = action.payload;

            const filteredProducts = DesignDummyData.filter((product) => {
                return (
                    product.name.toLowerCase().includes(filter.toLowerCase()) ||
                    product.brand.toLowerCase().includes(filter.toLowerCase()) ||
                    product.postedTime.toLowerCase().includes(filter.toLowerCase())
                );
            });

            state.productList = filteredProducts;
        }

    }
});
export const { setProducts, clearProducts, setFilter } = productDetailsSlice.actions;

// Export reducers
export default {
    savedPostsReducer: SavedPostSlice.reducer,
    cartProductsReducer: cartProductsSlice.reducer,
    popularPostReducer: popularPostSlice.reducer,
    inputSliceIndexReducer: inputSliceIndex.reducer,
    productSliceReducer: productDetailsSlice.reducer,
};
