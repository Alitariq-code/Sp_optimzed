import React from 'react';
import styles from '../styles/blog.module.css';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';

import Footer from './components/footer';
import Image from 'next/image';
import blog_image from '../public/images/blog-images/blog-1.webp';
import Spinner from './components/Spinner';
import { Container } from 'postcss';
import { useState, useEffect } from 'react';

function blog() {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = ['/public/images/Beyond Ordinary/banner.webp'];

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
            <div className={styles.parent_container}>
              <MobileNavBar />

              <NavBar />
              <div className={styles.parent_container_main_wrapper}>
                <div className={styles.parent_container_left_wrapper}>
                  <h2>
                    Tips for Improving Your{' '}
                    <span className={styles.color_container}>
                      Shooting Accuracy
                    </span>
                  </h2>
                  <p>
                    Accuracy is key in shooting sports. Here are some expert
                    tips and exercises you can practice to improve your shooting
                    accuracy, featuring insights from ShotPulse.
                  </p>
                  <button className={styles.read_more_btn}>Read More</button>
                </div>

                <div className={styles.parent_container_right_wrapper}>
                  {/* here to put the mobile slider  */}
                </div>
              </div>
            </div>

            <div className={styles.latest_blogs}>
              <h3>
                Latest <span className={styles.color_container}>Blogs</span>
              </h3>
              <p>
                Read our latest blogs to get more tips to enhance your shooting
                skills
              </p>
            </div>
            <div className={styles.latest_btn_wrapper}>
              <button className={styles.latest_btn}>All</button>

              <button className={styles.latest_btn}>Training Tips</button>

              <button className={styles.latest_btn}>Product Reviews</button>

              <button className={styles.latest_btn}>Shooting Techniques</button>

              <button className={styles.latest_btn}>Shooting Techniques</button>

              <button className={styles.latest_btn}>Industry News</button>
            </div>

            {/* <div className={styles.container}>
    <div className={styles.card}>
    <Image
        src={blog_image}
        alt="logo"
        className={blog_image} />
      <h4>
      The Future of Shooting Training
      </h4>
      <p>
      Discover how technology like ShotPulse is revolutionizing the way we approach shooting training. In this post, we explore the latest trends and innovations.
      </p>
      <button className={styles.btn}>
        Read More
      </button>
    </div>
  </div> */}
            {/* ... (similar structure for other cards) */}

            <div className={styles.coming_soon}>
              <h2>
                <span className={styles.color_container}>Coming Soon</span>
              </h2>

              <p>We are Working on it</p>
            </div>

            <div className={styles.features_blogs}>
              <h3>
                Features <span className={styles.color_container}>Blogs</span>
              </h3>
              <p>
                Read our latest blogs to get more tips to enhance your shooting
                skills
              </p>
            </div>
            <div className={styles.features_btn_wrapper}>
              <button className={styles.features_btn}>All</button>

              <button className={styles.features_btn}>Training Tips</button>

              <button className={styles.features_btn}>Product Reviews</button>

              <button className={styles.features_btn}>
                Shooting Techniques
              </button>

              <button className={styles.features_btn}>
                Shooting Techniques
              </button>

              <button className={styles.features_btn}>Industry News</button>
            </div>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default blog;
