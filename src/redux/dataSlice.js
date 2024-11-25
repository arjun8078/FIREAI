import { createSlice } from '@reduxjs/toolkit';
import mockOrders from '../data/orderData';// Add mock JSON files here

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    orders: mockOrders,
    metrics: {} // Add more mock data as needed
  },
  reducers: {
    // Define any reducers you need here
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.symbol !== action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(order => order.symbol === action.payload.symbol);
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
  },
});

export default dataSlice.reducer;
