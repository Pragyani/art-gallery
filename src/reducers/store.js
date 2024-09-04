import { configureStore } from "@reduxjs/toolkit";
import reducer from './indx';

const store = configureStore({
    reducer: {
        savedPosts: reducer.savedPostsReducer,
        cartProducts: reducer.cartProductsReducer
    }
});

export default store;
