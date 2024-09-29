import { configureStore } from "@reduxjs/toolkit";
import reducer from './indx';

const store = configureStore({
    reducer: {
        savedPosts: reducer.savedPostsReducer,
        cartProducts: reducer.cartProductsReducer,
        popularPost: reducer.popularPostReducer,
        inputSlice: reducer.inputSliceIndexReducer
    }
});

export default store;