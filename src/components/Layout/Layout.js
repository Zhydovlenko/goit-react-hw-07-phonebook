import React from 'react';
import { connect } from 'react-redux';

import { themeConfig } from '../../context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import themeSelectors from '../../redux/theme/themeSelectors';

import styles from './Layout.module.css';
const Layout = ({ children, theme }) => (
  <div
    style={{
      background:
        theme.themeConfig === 'light'
          ? themeConfig.light.bodyBg
          : themeConfig.dark.bodyBg,
      color:
        theme.themeConfig === 'light'
          ? themeConfig.light.fontColor
          : themeConfig.dark.fontColor,
    }}
    className={styles.container}
  >
    {children}
  </div>
);

const mapStateToProps = state => ({
  theme: themeSelectors.getThemeConfig(state),
  isChecked: themeSelectors.getIsChecked(state),
});

export default connect(mapStateToProps)(Layout);
