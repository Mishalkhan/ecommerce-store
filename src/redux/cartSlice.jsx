import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState , 
    reducers : {
        addToCart : (state,action)=>{
            const findindex = state.carts.findIndex((item)=> item._id === action.payload._id)
            if( findindex >= 0){
                state.carts[findindex].quantity +=1;
            }else{
                let newentery = {...action.payload, quantity : 1}
                state.carts = [...state.carts, newentery]
            }
        },
        removeFromCart : (state,action)=>{
            const findindex = state.carts.findIndex((item)=> item._id === action.payload._id)
            if(state.carts[findindex].quantity > 1){
                state.carts[findindex].quantity -=1
            }else{
                state.carts = state.carts.filter((item)=> item._id !== action.payload._id)
            }
        },
        removeCart : (state,action)=>{
             state.carts = state.carts.filter((item)=> item._id !== action.payload._id)
        }
    }
})

export const { addToCart , removeFromCart , removeCart} = cartSlice.actions;
export default cartSlice.reducer;