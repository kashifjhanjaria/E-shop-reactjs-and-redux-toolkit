import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carttoggle:false,
}
const CartSidebarSlice = createSlice({
    name :'cartsidebar',
    initialState,
    reducers: {
        cartToggler: (state) => {
            return { ...state, carttoggle: !state.carttoggle }; // Corrected return statement
        }
    }
})


export const {cartToggler} = CartSidebarSlice.actions
export default CartSidebarSlice.reducer


