import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/Preloader.json';
import styles from '../../styles/spinner.module.css';

const Spinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Added flexDirection to display items vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Adjust this based on your preference
    },
  };

  const textStyle = {
    fontSize: '24px', // Adjust the font size as needed
    marginTop: '10px',
    color: 'white', // Adjust the spacing from the Lottie animation
  };

  return (
    <div style={spinnerContainerStyle} className={styles.spinnerContainer}>
      <Lottie options={lottieOptions} height={300} width={300} />
    </div>
  );
};

export default Spinner;
