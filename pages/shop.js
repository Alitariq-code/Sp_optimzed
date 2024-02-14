import React from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';

import Footer from './components/footer';
import Image from 'next/image';
import ImageGallery from '../pages/components/shop_slider';
import styles from '../styles/shop.module.css';

import tiny_Yet_image from '../public/images/Home-images/Product Image.webp';
// import hardware from '../public/images/Shop/Hardware-Details-icons'


import Testimonials from './components/testi';
import TablePage from './components/table';
import Link from 'next/link';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';

function shop() {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);
  const [loadingState, setLoadingState] = useState(0);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          '/public/images/Shop/SmallerScreenProductOverview.webp',
          '/public/images/Shop/DownloadAppNow.webp',
          '/public/images/Shop/AppStoreImage.webp',
          '/public/images/Shop/GooglePlayImage.webp',
          '/public/images/Home-images/Product Image.webp',
          '/public/images/Shop/Hardware-Details-icons/Hardware-icons (6).webp',
          '/public/images/Shop/Hardware-Details-icons/Hardware-icons (1).webp',
          '/public/images/Shop/Hardware-Details-icons/Hardware-icons (2).webp',
          '/public/images/Shop//Hardware-Details-icons/Hardware-icons (3).webp',
          '/public/images/Shop/Group 3843.webp',
          '/public/images/Shop/Hardware-Details-icons/Hardware-icons (4).webp',
          '/public/images/Shop/Hardware-Details-icons/Hardware-icons (5).webp',
        ];
          // Initialize loading state
          let loadingState = 0;

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
          loadingState += 100 / allImageNames.length;
          console.log(loadingState);

          setLoadingState(loadingState);
          return { name: last, data: URL.createObjectURL(blobData) };
        });

        // Wait for all images to be loaded
        const loadedImagesData = await Promise.all(loadImagePromises);

        // Set the loaded images in the state
        setImageNames(loadedImagesData);
        setLoading(false);
        // const timeoutId = setTimeout(() => {
        //   setLoading(false);
        // }, 2500);

        // Clear the timeout when the component unmounts
        
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    // Start fetching images when the component mounts
    fetchImages();
  }, []);
  console.log(imageNames);

  return (
    <>
      {loading && (
        <div>
        <Spinner loading={loadingState} />
      </div>
      )}
      <div>
        {!loading && (
          <>
            <MobileNavBar />
            <NavBar />
            <hr className={styles.hr_bottom} />

            <div className={styles.wrapper1}>
              <div className={styles.wrapper1_left}>
                <h2>
                  ShotPulse Shot{' '}
                  <span className={styles.color_container}>Timer</span>
                </h2>
                <p>
                  Elevate your shooting Speedwith the ShotPulse Shot Timer – the
                  ultimate tool for precision and accuracy. Compact,
                  lightweight, and packed with advanced technology, ShotPulse is
                  designed for shooters who demand the best in Speed tracking.
                  Whether you're a competitive marksman, a law enforcement
                  professional, or a shooting enthusiast, ShotPulse offers
                  unparalleled insights into every shot you take.
                </p>
                <div className={styles.wrapper1_btn}>
                  <Link href="/coming-soon" passHref>
                    <button className={styles.btn_cart}>Add To Cart</button>
                  </Link>

                  <h3>$48.00</h3>
                </div>
              </div>

              <div className={styles.wrapper1_right}>
                <ImageGallery />
              </div>
            </div>

            <div className={styles.new_main_content_wrapper}>
              <div className={styles.container_position}>
                <h2>
                  Product{' '}
                  <span className={styles.color_container}>Overview</span>
                </h2>
                <p>
                  The ShotPulse Shot Timer redefines the capabilities of a
                  shooting timer. It's not just about measuring speed; it's
                  about providing a detailed analysis of your shooting
                  mechanics. From the moment you pull the trigger to the instant
                  a bullet is fired, ShotPulse captures every detail with
                  meticulous precision. Its compact design means it won't get in
                  your way, but its impact on your shooting practice will be
                  unmistakable. With ShotPulse, you’re not just practicing;
                  you’re evolving your Speedwith every shot.
                </p>
              </div>
            </div>

            <div className={styles.wrapper2}>
              <div className={styles.wrapper2_right}>
                <h2>
                  Product{' '}
                  <span className={styles.color_container}>Overview</span>
                </h2>
                <p>
                  The ShotPulse Shot Timer redefines the capabilities of a
                  shooting timer. It's not just about measuring speed; it's
                  about providing a detailed analysis of your shooting
                  mechanics. From the moment you pull the trigger to the instant
                  a bullet is fired, ShotPulse captures every detail with
                  meticulous precision. Its compact design means it won't get in
                  your way, but its impact on your shooting practice will be
                  unmistakable. With ShotPulse, you’re not just practicing;
                  you’re evolving your Speedwith every shot.
                </p>
              </div>

              <div className={styles.wrapper2_left}>
                <img
                  src={imageNames[0].data}
                  className={styles.image2}
                  alt="image"
                />
              </div>
            </div>

            <div className={styles.wrapper3}>
              <h2>
                Hardware <span className={styles.color_container}>Details</span>
              </h2>
              <div className={styles.wrapper3_main}>
                <div className={styles.wrapper3_left}>
                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[6].data}
                      className={styles.image7}
                      alt="image"
                    />
                    <h4>Unparalleled Precision and Sensitivity:</h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Equipped with three high-sensitivity accelerometers and
                        three gyroscopes
                      </p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Precise measurement of trigger pull and shot execution.
                      </p>
                    </div>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Enhanced with precision STMicroelectronics sensors for
                        unparalleled Speed.
                      </p>
                    </div>
                  </div>

                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[7].data}
                      className={styles.image7}
                      alt="image"
                      loading="lazy"
                    />
                    <h4>Cutting-Edge Connectivity </h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Features a Bluetooth module from Nordic Semiconductors.
                      </p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Ensures seamless, low-energy connectivity for real-time
                        data transmission.
                      </p>
                    </div>
                  </div>

                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[8].data}
                      className={styles.image7}
                      alt="image"
                    />
                    <h4>Powerful Microprocessor </h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Rapid processing of thousands of data points per second
                      </p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Provides comprehensive analysis of shooting technique,
                        including trigger pulls, recoil patterns, and shot
                        timing.
                      </p>
                    </div>
                  </div>
                </div>

            

                <div className={styles.wrapper3_right}>
                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[10].data}
                      className={styles.image7}
                      alt="image"
                      // loading="lazy"
                    />
                    <h4>Lightweight and Unobtrusive Design </h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Ultra-compact size, similar to a thumbnail, and weighs
                        just 6 grams (0.2 oz)
                      </p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Durable construction for regular use in various
                        environments
                      </p>
                    </div>
                  </div>

                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[11].data}
                      className={styles.image7}
                      alt="image"
                    />
                    <h4>User-Friendly Experience </h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>Easy integration with smartphones.</p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Intuitive app interface for Speed review, progress
                        tracking, and goal setting.
                      </p>
                    </div>
                  </div>

                  <div className={styles.wrapper3_border}>
                    <img
                      src={imageNames[5].data}
                      className={styles.image7}
                      alt="image"
                    />
                    <h4>Transforming Shooting Practice </h4>

                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Offers a comprehensive training assistant for
                        competitive shooters, law enforcement officers, and
                        shooting enthusiasts.
                      </p>
                    </div>
                    <div className={styles.wrapper3_dot}>
                      <span className={styles.wrapper3_border_span}></span>
                      <p>
                        Elevates shooting practice by providing detailed
                        insights and analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.wrapper4}>
              <h2>
                Additional
                <span className={styles.color_container}>Details</span>
              </h2>
            </div>
            <TablePage />

            <div className={styles.wrapper5}>
              <h2>
                Download App <span className={styles.color_container}>Now</span>
              </h2>
              <img
                src={imageNames[1].data}
                alt="logo"
                className={styles.Image5}
              />
            </div>

            <div className={styles.wrapper5_bottom}>
              <img
                src={imageNames[2].data}
                alt="logo"
                className={styles.Image3}
                // loading="lazy"
              />
              <img
                src={imageNames[3].data}
                alt="logo"
                className={styles.Image4}
                // loading="lazy"
              />
            </div>

            <div className={styles.tiny_Yet}>
              <div className={styles.tiny_Yet1}>
                <h3>
                  Empowering Coaches, Enhancing{' '}
                  <span className={styles.color_container}>Training</span>
                </h3>
                <p>
                  the ShotPulse is about the size of a thumbnail, ensuring it
                  never hinders your practice.
                </p>
                <button className={styles.tiny_Yet_btn}>Learn More</button>
              </div>

              <div>
                <img
                  src={imageNames[4].data}
                  alt="logo"
                  className={tiny_Yet_image}
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.testimonials_wrapper}>
              <h2>Testimonials</h2>
              <div>
                <Testimonials />
              </div>
            </div>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default shop;
