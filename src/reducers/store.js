import { configureStore } from "@reduxjs/toolkit";
import SavedPostReducer  from "./indx";

const store = configureStore({
    reducer : {
        savedProduct : SavedPostReducer
    }
})

export default store;