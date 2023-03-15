import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================
import { contactsReducer } from './contactSlice';
// import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filtersReducer,
  },
});
