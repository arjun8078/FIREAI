import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import paginationReducer from './paginationSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    data: dataReducer,
  },
});

export default store;
