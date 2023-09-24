import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
};


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.cartItems.push(action.payload); // Push the new user to the array
          },
    },
  })
  
  export const { addCartItem } = CartSlice.actions;
  export const selectCartItems = (state) => state.cart.cartItems;
  
  export const selectTotalPriceForUser = (userId) => (state) => {
    const itemsForUser = state.cart.cartItems.filter((item) => item.userId === userId);
    const totalPrice = itemsForUser.reduce((total, item) => total + item.price, 0);
  
    return totalPrice;
  };

  export default CartSlice.reducer;

  