import { createSlice } from "@reduxjs/toolkit";

export const SavedPostSlice = createSlice({
    name: 'savedPosts',
    initialState: [],
    reducers: {
        addPosts: (state, action) => {
            if (!state.find(product => product.id === action.payload.id)) {
                state.push(action.payload)
            }
        },
        addCartPost: (state, action) => {
            const postExists = state.filter(product => product.id === action.payload.id);
            if (postExists.length === 0) {
                state.push(action.payload);
            }
        }
    }
})

export const { addPosts, addCartPost } = SavedPostSlice.actions;
export default SavedPostSlice.reducer;