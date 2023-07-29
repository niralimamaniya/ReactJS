import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // const cartItem = state.items.find(
            //     (item) => item.id === action.payload.id
            // );
            // if(cartItem){
            //     cartItem.itemCount++;
            //     cartItem.isAddedToCart = true;
            // } else {
            //     state.items.push({
            //         ...action.payload,
            //         itemCount: 1,
            //     })
            // }
            // mutating the state here
            state.items.push(action.payload);
        },

        // incrementItem: (state,action) => {
        //     const cartItem = state.items.find(
        //         (item) => item.id === action.payload.id
        //     );
        //     cartItem.itemCount++;
        // },
        // decrementItem: (state,action) => {
        //     const cartItem = state.items.find(
        //         (item) => item.id === action.payload.id
        //     );
        //     if (cartItem.itemCount == 1) {
        //         state.items = state.items.filter(
        //           (item) => item.id !== action.payload.id
        //     );
        //     } else {
        //        cartItem.itemCount--;
        //     }
        // },
        removeItem: (state, action) => {
            state.items = state.items.filter((item => item.id !== action.payload.id));
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;  

export default cartSlice.reducer;

