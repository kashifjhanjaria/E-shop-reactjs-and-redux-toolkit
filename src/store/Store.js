import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/cartSlice";
import CartSidebarSlice from "../Slices/CartSidebarSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartsidebar : CartSidebarSlice,
  }
});

export default store;