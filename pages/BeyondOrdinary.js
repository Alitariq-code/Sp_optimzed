import React from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';
import Footer from './components/footer';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PrecisionPerfectedImage from '../public/images/Beyond Ordinary/PrecisionPerfectedImage.webp';
import GooglePlayImage from '../public/images/Shop/GooglePlayImage.webp';
import AppStoreImage from '../public/images/Shop/AppStoreImage.webp';
import styles from '../styles/enterprise.module.css';
import banner from '../public/images/Beyond Ordinary/banner.webp';
import download from '../public/images/Shop/DownloadAppNow.webp';
function Enterprise() {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          '/public/images/Beyond Ordinary/banner.webp',

          '/public/images/Shop/DownloadAppNow.webp',
        ];

        setTimeout(() => {
          setLoading(false);
        }, 1500);

        // Set the loaded images in the state

        // const timeoutId = setTimeout(() => {
        //   setLoading(false);
        // }, 2500);

        // // Clear the timeout when the component unmounts
        // return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    // Start fetching images when the component mounts
    fetchImages();
  }, []);

  return (
    <>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}

      <div>
        {!loading && (
          <>
            <MobileNavBar />
            <NavBar />
            <hr className={styles.hr_bottom} />

            <div className={styles.wrapper1}>
              <h2>
                The Future of Shooting{' '}
                <span className={styles.color_container}>Training</span>
              </h2>
              <Image
                src={banner}
                alt="logo"
                className={styles.image1}
                loading="lazy"
              />
            </div>

            <div className={styles.wrapper2}>
              <div className={styles.wrapper2_left}>
                <h2>
                  <span className={styles.color_container}>
                    Precision Perfected:{' '}
                  </span>
                </h2>
                <h2>The ShotPulse Recoil Timer Revolution</h2>
                <ul>
                  <li class="dotted_paragraph">
                    Break free from the confines of traditional sound-based
                    timers. The ShotPulse Recoil Timer presents a game-changing
                    advantage for serious marksmen.
                  </li>

                  <li class="dotted_paragraph">
                    <span class="bold"> ShotPulse </span> transcends sound
                    reliance – it captures the precise moment of trigger
                    actuation, offering unmatched accuracy that sound alone
                    cannot provide.
                  </li>

                  <li class="dotted_paragraph">
                    Equipped with STMicroelectronics' cutting-edge recoil
                    sensors and Nordic's BLE technologies,{' '}
                    <span class="bold"> ShotPulse </span> consistently detects
                    even the tiniest{' '}
                    <span class="bold">
                      {' '}
                      recoil movement, guaranteeing precise timing{' '}
                    </span>{' '}
                    without the disruption of ambient noise or extraneous
                    gunfire.
                  </li>

                  <li class="dotted_paragraph">
                    Train with assurance in any setting, from the live-fire
                    cacophony of a bustling range to the silent focus required
                    for dry fire in your home.
                  </li>

                  <li class="dotted_paragraph">
                    Enhance your experience with the{' '}
                    <span class="bold"> ShotPulse </span> App, which enables you
                    to host and partake in shot timing competitions, either
                    online or onsite. With <span class="bold"> ShotPulse </span>
                    , you're not merely tracking shots—you're refining your
                    skills.
                  </li>

                  <li class="dotted_paragraph">
                    {' '}
                    Ditch the limitations, and experience the
                    <span class="bold"> ShotPulse </span> difference – where
                    concentration fuels precision and every rep unlocks a new
                    level of skill.
                  </li>
                </ul>
              </div>

              <div className={styles.wrapper2_right}>
                <Image
                  src={PrecisionPerfectedImage}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.wrapper5}>
              <h2>
                Download App <span className={styles.color_container}>Now</span>
              </h2>
              <Image
                src={download}
                alt="logo"
                className={styles.Image5}
                loading="lazy"
              />
            </div>

            <div className={styles.wrapper5_bottom}>
              <Image
                src={AppStoreImage}
                alt="logo"
                className={styles.Image3}
                loading="lazy"
              />
              <Image
                src={GooglePlayImage}
                alt="logo"
                className={styles.Image4}
                loading="lazy"
              />
            </div>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Enterprise;
