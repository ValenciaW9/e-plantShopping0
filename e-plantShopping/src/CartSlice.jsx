import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item
      }
    },
   
    removeItem: (state, action) => {
      const { name } = action.payload; // Get the name of the item to remove
      state.items = state.items.filter(item => item.name !== name); // Filter out the item
    },
    
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Get the item name and new quantity
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity if item exists
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default export
export default CartSlice.reducer;
