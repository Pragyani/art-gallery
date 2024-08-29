import { createSlice } from "@reduxjs/toolkit";

export const SavedPostSlice = createSlice({
    name:'savedPosts',
    initialState:[],
    reducers:{
        addPosts : (state , action) =>{
            if(!state.find(product => product.id === action.payload.id)){
               state.push(action.payload)
            }
        }
    }
})  

export const {addPosts} = SavedPostSlice.actions;
export default SavedPostSlice.reducer;