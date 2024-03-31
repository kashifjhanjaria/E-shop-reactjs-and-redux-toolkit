import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0, // Initializing quantity
  totalPrice : 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const newItem = action.payload;
      // console.log(newItem[0].price);
      // Incrementing quantity when a new item is added to cart
      const quantity = state.quantity + 1;
      const totalPrice = state.cartItems.reduce((acc, item) => acc + item[0].price, 0) + newItem[0].price;

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
        quantity: quantity,
        totalPrice: totalPrice
      };
    }
  }
});

export const { addToCartReducer } = cartSlice.actions;
export default cartSlice.reducer;
