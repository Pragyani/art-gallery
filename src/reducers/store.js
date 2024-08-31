import { configureStore } from "@reduxjs/toolkit";
import SavedPostReducer from "./indx";
import SavedCartReducer from './indx'

const store = configureStore({
    reducer: {
        savedProduct: SavedPostReducer,
        cartedProducts : SavedCartReducer
    }
});

export default store;
