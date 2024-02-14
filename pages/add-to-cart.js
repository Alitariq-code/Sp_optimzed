import { useState } from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';

import Footer from './components/footer';
import styles from '../styles/add-to-cart.module.css';
import Image from 'next/image';
import Image1 from '../public/images/add-to-cart/logo.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddToCart() {
  const [email, setEmail] = useState('');
  const [notificationSent, setNotificationSent] = useState(false);
  const [error, setError] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const showToastMessage = () => {
    toast.success('Notification sent successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const errorToast = (str) => {
    toast.error(`${str}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleNotify = async () => {
    if (email === '') {
      errorToast('Please enter your email');
      return;
    }
    try {
      const response = await fetch('http://178.16.142.39:8000/api/v1/notify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        showToastMessage();
        setNotificationSent(true);
        setError(null);
      } else {
        errorToast();
        const data = await response.json();
        setNotificationSent(false);
        errorToast('Failed to send notification');
        // setError(data.message || 'Failed to send notification');
      }
    } catch (err) {
      errorToast();
      setNotificationSent(false);
      // setError('An error occurred while sending the notification');
    }
  };
  return (
    <>
      <MobileNavBar />
      <NavBar />
      <ToastContainer />
      {/* Background video section */}
      <div className={styles.background_video}>
        <video
          autoPlay
          muted
          loop
          style={{
            width: '100%', // Set the width to 100% of the container
            height: '100vh', // Set the height to 100% of the container
            objectFit: 'cover', // Cover the container with the video
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.parent_wrapper}>
        <div className={styles.child_wrapper}>
          <Image
            src={Image1}
            alt="logo"
            className={styles.image1}
            loading="lazy"
          />
          <h3>Revolutionizing the Shooting Industry</h3>
          <p>Introducing Our Groundbreaking Product ShotPulse</p>
          <div className={styles.notify_container}>
            <input
              className={styles.input}
              type="text"
              placeholder="Please enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
            <button className={styles.notify_button} onClick={handleNotify}>
              Notify Me
            </button>
          </div>
          {/* {notificationSent && <p>Notification sent successfully!</p>}
          {error && <p>Error: {error}</p>} */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddToCart;
