import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Toggler.module.css';
import themeActions from '../../redux/theme/themeActions';
import themeSelectors from '../../redux/theme/themeSelectors';
import { themeConfig } from '../../context/ThemeContext';

class Toggler extends Component {
  render() {
    const { theme, toggleTheme, isChecked } = this.props;
    return (
      <div
        style={{
          background:
            theme.themeConfig === 'light'
              ? themeConfig.light.bodyBg
              : themeConfig.dark.bodyBg,
        }}
        className={styles.themeSelector}
      >
        <span className={styles.label}></span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isChecked.isChecked}
            onChange={toggleTheme}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isChecked: themeSelectors.getIsChecked(state),
  theme: themeSelectors.getThemeConfig(state),
});

const mapDispatchToProps = {
  toggleTheme: themeActions.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);
