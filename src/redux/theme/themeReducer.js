import { createReducer, combineReducers } from '@reduxjs/toolkit';

import themeActions from './themeActions';

const toggleTheme = state => {
  return {
    ...state,
    themeConfig: state.themeConfig === 'light' ? 'dark' : 'light',
  };
};

const toggleChecked = state => {
  return {
    ...state,
    isChecked: !state.isChecked,
  };
};

const themeConfig = createReducer(
  { themeConfig: 'light' },
  {
    [themeActions.toggleTheme]: toggleTheme,
  },
);

const isChecked = createReducer(
  { isChecked: false },
  {
    [themeActions.toggleTheme]: toggleChecked,
  },
);

export default combineReducers({
  themeConfig,
  isChecked,
});
