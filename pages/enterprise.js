import React from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';
import Footer from './components/footer';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../public/images/Beyond Ordinary/banner.webp';
import image2 from '../public/images/Beyond Ordinary/Group 3843.webp';
import Image3 from '../public/images/Shop/Group 982.webp';
import Image4 from '../public/images/Shop/Group 983.webp';
import Image5 from '../public/images/Shop/Group 3897 (1).webp';
import image6 from '../public/images/Beyond Ordinary/icons/1 (4).svg';
import styles from '../styles/enterprise.module.css';

function Enterprise() {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          '/public/images/Beyond Ordinary/banner.webp',
          '/public/images/Beyond Ordinary/Group 3843.webp',
          '/public/images/Shop/Group 982.webp',
          '/public/images/Shop/Group 983.webp',
          '/public/images/Shop/Group 3897 (1).webp',
        ];

        // Start loading images asynchronously
        const loadImagePromises = allImageNames.map(async (imageName) => {
          const response = await fetch(
            `/api/images?imageName=${encodeURIComponent(imageName)}`
          );
          console.log(response);
          const blobData = await response.blob();
          // Find the last index of the path separator '/'
          const lastIndex = imageName.lastIndexOf('/');

          // Extract the substring from the beginning to the last index
          const last = imageName.substring(0, lastIndex);
          return { name: last, data: URL.createObjectURL(blobData) };
        });

        // Wait for all images to be loaded
        const loadedImagesData = await Promise.all(loadImagePromises);

        // Set the loaded images in the state
        setImageNames(loadedImagesData);
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2500);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
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
              <img
                src={imageNames[0].data}
                alt="logo"
                className={styles.image1}
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
                <img
                  src={imageNames[1].data}
                  alt="logo"
                  className={styles.image1}
                />
              </div>
            </div>

            <div className={styles.wrapper5}>
              <h2>
                Download App <span className={styles.color_container}>Now</span>
              </h2>
              <img
                src={imageNames[4].data}
                alt="logo"
                className={styles.Image5}
              />
            </div>

            <div className={styles.wrapper5_bottom}>
              <img
                src={imageNames[2].data}
                alt="logo"
                className={styles.Image3}
              />
              <img
                src={imageNames[3].data}
                alt="logo"
                className={styles.Image4}
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
