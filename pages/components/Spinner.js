import React from 'react';
import styles from '../../styles/spinner.module.css';

const Spinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const imgStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={spinnerContainerStyle} className={styles.spinnerContainer}>
      <img src="/preloader.gif" alt="Loading..." style={imgStyle} />
    </div>
  );
};

export default Spinner;
