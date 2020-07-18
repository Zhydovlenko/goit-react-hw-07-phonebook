import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    theme: themeReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
});

export default store;
