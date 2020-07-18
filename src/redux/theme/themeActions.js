import { createAction } from '@reduxjs/toolkit';

const toggleTheme = createAction('theme/toggleTheme', (theme, isChecked) => ({
  payload: {
    theme: {
      isChecked: false,
      themeConfig: 'light',
    },
  },
}));

export default {
  toggleTheme,
};
