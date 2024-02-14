// pages/index.js

import React from 'react';
import styles from '../styles/index.module.css';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';
import Footer from './components/footer';
import Image from 'next/image';

// key Feater section images.
import keyFeaterHeroImage from '../public/images/Home-images/key-Feater-Image/keyFeaterHeroImage.webp';
import keyFeaterIcon1 from '../public/images/Home-images/key-Feater-Image/keyFeaterIcon1.webp';
import keyFeaterIcon2 from '../public/images/Home-images/key-Feater-Image/keyFeaterIcon2.webp';
import keyFeaterIcon3 from '../public/images/Home-images/key-Feater-Image/keyFeaterIcon3.webp';
import keyFeaterIcon4 from '../public/images/Home-images/key-Feater-Image/keyFeaterIcon4.webp';

// Tiny Yet Mighty section image for tablet and mobile. MB-Tiny-Yet-wrapper
import SmallerScreenTinyYetImage from '../public/images/Home-images/SmallerScreenTinyYetImage.webp';

// Ultimate Shooting Companion section image for tablet and mobile.
import SmallerScreenUltimateShooting from '../public/images/Home-images/SmallerScreenUltimateShooting.webp';

// Elevate Your Marksmanship section gif
// import ElevateYourMarksmanship from '../public/images/Home-images/Elevate-Your-Marksmanship/ElevateYourMarksmanship.gif';

// Elevate Your Marksmanship wrapper Google play and App store images
import GooglePlayImage from '../public/images/Home-images/Elevate-Your-Marksmanship/GooglePlayImage.webp';
import AppStoreImage from '../public/images/Home-images/Elevate-Your-Marksmanship/AppStoreImage.webp';

// Empowering Coaches, Enhancing Training section Product Image
import tiny_Yet_image from '../public/images/Home-images/Product Image.webp';

import Testimonials from './components/testi';
import SliderDesktop from './components/slider1';
import MobileSlider from './components/mobile-slider';
import Link from 'next/link';

import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);
  const [loadingState, setLoadingState] = useState(0);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          'public/images/Home-images/key-Feater-Image/keyFeaterHeroImage.webp',
          'public/images/Home-images/key-Feater-Image/keyFeaterIcon1.webp',
          'public/images/Home-images/key-Feater-Image/keyFeaterIcon2.webp',
          '/public/images/Home-images/Elevate-Your-Marksmanship/ElevateYourMarksmanship.gif',
        ];

        // Initialize loading state
        let loadingState = 0;

        // Start loading images asynchronously
        const loadImagePromises = allImageNames.map(async (imageName) => {
          const response = await fetch(
            `/api/images?imageName=${encodeURIComponent(imageName)}`
          );
          const blobData = await response.blob();

          // Find the last index of the path separator '/'
          const lastIndex = imageName.lastIndexOf('/');

          const last = imageName.substring(0, lastIndex);

          loadingState += 100 / allImageNames.length;
          console.log(loadingState);

          setLoadingState(loadingState);

          return { name: last, data: URL.createObjectURL(blobData) };
        });

        const loadedImagesData = await Promise.all(loadImagePromises);

        // Set the loaded images in the state
        setImageNames(loadedImagesData);

        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 100);

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
          <Spinner loading={loadingState} />
        </div>
      )}
      {!loading && (
        <div className={styles.bg_main}>
          <div className={styles.parent_container}>
            <MobileNavBar />
            <NavBar />

            <div className={styles.parent_container_main_wrapper}>
              <div className={styles.parent_container_left_wrapper}>
                <h2>
                  Ready to Improve Your{' '}
                  <span className={styles.color_container}>
                    Shooting Speed?
                  </span>
                </h2>
                <p>
                  Take your shooting Speed to the next level with the ShotPulse
                  Timer.
                </p>
                <Link href="/shop" passHref>
                  <button className={styles.learn_more_button}>
                    Explore more
                  </button>
                </Link>
              </div>

              <div className={styles.parent_container_right_wrapper}>
                <SliderDesktop />
              </div>
              <div className={styles.parent_container_mobile_wrapper}>
                <MobileSlider />
              </div>
            </div>
          </div>

          {/*  */}
          <div className={styles.middle_wrapper}>
            <p>
              <span className={styles.color_container}>
                Welcome to ShotPulse,
              </span>{' '}
              The inaugural innovation in the Pulse Frontier Series, dedicated
              to timing, scoring, and a suite of advanced shooting training
              tools. Here, precision merges seamlessly with groundbreaking
              technology, as our state-of-the-art device revolutionizes the
              training landscape for shooters at every skill level, and every
              age group.
            </p>
          </div>

          {/*  */}

          <div className={styles.Key_Features_wrapper}>
            <div className={styles.Key_Features_image_wrapper}>
              <img
                src={imageNames[0].data}
                alt="logo"
                className={styles.keyFeater_image}
              />
            </div>

            <div className={styles.Key_Features_content_main_wrapper}>
              <div className={styles.Key_Features_content_wrapper}>
                <div>
                  <h3>Key Features</h3>
                </div>

                {/* for display flex */}
                <div className={styles.KF_main_sub_wrapper}>
                  {/* 1 */}
                  <div className={styles.Key_Features_sub_wrapper}>
                    <img
                      src={imageNames[1].data}
                      alt="logo"
                      className={styles.keyFeater_image1}
                    />
                    <h4>Silent Technology</h4>
                    <p>
                      ShotPulse Timer: Precision in shooting speed, independent
                      of sound, minimizes false readings.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className={styles.Key_Features_sub_wrapper}>
                    <img
                      src={imageNames[2].data}
                      alt="logo"
                      className={styles.keyFeater_image2}
                    />
                    <h4>User-friendly Wristband</h4>
                    <p>
                      Comfortably wear the ShotPulse wristband for convenient
                      access during training or competition.
                    </p>
                  </div>

                  {/* 3 */}

                  <div className={styles.Key_Features_sub_wrapper}>
                    <Image
                      src={keyFeaterIcon3}
                      alt="logo"
                      className={styles.keyFeater_image1}
                      loading="lazy"
                    />
                    <h4>Versatile and Portable</h4>
                    <p>
                      The ShotPulse Timer suits all skill levels and works
                      indoors or outdoors seamlessly.
                    </p>
                  </div>

                  {/* 4 */}

                  <div className={styles.Key_Features_sub_wrapper}>
                    <Image
                      src={keyFeaterIcon4}
                      alt="logo"
                      className={styles.keyFeater_image1}
                      loading="lazy"
                    />
                    <h4>Advanced App Integration</h4>
                    <p>
                      Enhance shooting insights with ShotPulse app's advanced
                      data analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.new_main_content_wrapper}>
            <div className={styles.container_position}>
              <h3>
                Tiny Yet <span className={styles.color_container}>Mighty</span>
              </h3>
              <p>
                The ShotPulse is about the size of a thumbnail, ensuring it
                never hinders your practice. Despite its compact size, it's
                packed with advanced technology that provides detailed analysis
                and feedback to improve your shooting Speed.
              </p>
              <h3>
                Ultimate Shooting
                <span className={styles.color_container}> Companion</span>
              </h3>
              <p>
                Compatible with all firing types, from live and dry fire to
                airsoft and even toy guns, ShotPulse is designed to be your
                ultimate training companion. It's the perfect tool for everyone,
                from seasoned marksmen to young enthusiasts and even kids in
                training.
              </p>
            </div>
          </div>

          {/* <div className={styles.new_main_content1_wrapper}>
            <div className={styles.container1_position}>
              <h3>
                Ultimate Shooting
                <span className={styles.color_container}> Companion</span>
              </h3>
              <p>
                Compatible with all firing types, from live and dry fire to
                airsoft and even toy guns, ShotPulse is designed to be your
                ultimate training companion. It's the perfect tool for everyone,
                from seasoned marksmen to young enthusiasts and even kids in
                training.
              </p>
            </div>
          </div> */}

          {/*  */}
          <div className={styles.main_content_wrapper}>
            <div className={styles.content_wrapper_left}>
              <h3>
                Tiny Yet <span className={styles.color_container}>Mighty</span>
              </h3>
              <p>
                The ShotPulse is about the size of a thumbnail, ensuring it
                never hinders your practice. Despite its compact size, it's
                packed with advanced technology that provides detailed analysis
                and feedback to improve your shooting Speed.
              </p>
            </div>
            <div className={styles.content_wrapper_right}>
              <Image
                src={SmallerScreenTinyYetImage}
                alt="logo"
                className={styles.MainContentImage1}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.main_content1_wrapper}>
            <div className={styles.content_wrapper1_left}>
              <h3>
                Ultimate Shooting
                <span className={styles.color_container}> Companion</span>
              </h3>
              <p>
                Compatible with all firing types, from live and dry fire to
                airsoft and even toy guns, ShotPulse is designed to be your
                ultimate training companion. It's the perfect tool for everyone,
                from seasoned marksmen to young enthusiasts and even kids in
                training.
              </p>
            </div>
            <div className={styles.content_wrapper1_right}>
              <Image
                src={SmallerScreenUltimateShooting}
                alt="logo"
                className={styles.MainContent1Image1}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.scroll_container}>
            <div className={styles.scroll_text}>
              <h3>
                Discover Unmatched{' '}
                <span className={styles.color_container}>
                  Versatility With ShotPulse
                </span>
              </h3>
              <p>
                Discover unmatched versatility with ShotPulse and step into a
                new realm of precision and skill development. Embrace the future
                of shooting training today!
              </p>
            </div>
          </div>

          <div className={styles.main_content3_wrapper}>
            <div className={styles.content_wrapper3_left}>
              <h3>Elevate Your Marksmanship: Unleash Speed with Our App</h3>
              <p>
                Step into a world of precision and rapidity your journey to
                becoming a shooting prodigy starts here!
              </p>
              <div className={styles.content_wrapper_main_bottom}>
                <h4>
                  Download App{' '}
                  <span className={styles.color_container}>Now</span>
                </h4>
                <div className={styles.content_wrapper3_bottom}>
                  <Image
                    src={GooglePlayImage}
                    alt="logo"
                    className={styles.MainContent3Image1}
                    loading="lazy"
                  />
                  <Image
                    src={AppStoreImage}
                    alt="logo"
                    className={styles.MainContent3Image1}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className={styles.content_wrapper3_right}>
              <img
                src={imageNames[3].data}
                alt="logo"
                className={styles.MainContent3Image1}
              />
            </div>
          </div>

          <div className={styles.tiny_Yet}>
            <div className={styles.tiny_Yet1}>
              <h3>
                Empowering Coaches, Enhancing{' '}
                <span className={styles.color_container}>Training</span>
              </h3>
              <p>
                The ShotPulse is about the size of a thumbnail, ensuring it
                never hinders your practice.
              </p>
              <Link href="/shop" passHref>
                <button className={styles.tiny_Yet_btn}>Learn More</button>
              </Link>
            </div>

            <div>
              <Image
                src={tiny_Yet_image}
                alt="logo"
                className={tiny_Yet_image}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.wrapper_6}>
            <h3>
              Frequently Asked{' '}
              <span className={styles.color_container}>Questions</span>
            </h3>

            <div className={styles.page_wrapper}>
              <div className={styles.accordion}>
                <details>
                  <summary>
                    Q. How does the ShotPulse Timer measure shooting speed
                    without using sound?
                  </summary>
                  <p>
                    That's exactly the reason we created this random question
                    generator. There are hundreds of random questions to choose
                    from so you're able to find the perfect random question to
                    ask friends, family and people you want to get to know
                    better.
                  </p>
                </details>
                <details>
                  <summary>
                    Q. Is the ShotPulse Timer app compatible with both Android
                    and iOS devices?
                  </summary>
                  <p>
                    This generator doesn't include most common questions. The
                    thought is that you can come up with common questions on
                    your own so most of the questions in this generator are
                    questions that elicit a bit more information that a typical
                    common question.
                  </p>
                </details>
                <details>
                  <summary>
                    Q. How long does the battery life last for the ShotPulse
                    Timer?
                  </summary>
                  <p>
                    Yes! there are two ways that you can use this question
                    generator depending on what you're after. You can indicate
                    that you want 21 questions generated and you'll instantly
                    have a random list of 21 questions to use. If you want to
                    curate the 21 questions to use, you can spend some time on
                    the generator until you find 21 questions you like, then use
                    those the next time you play the 21 questions game.
                  </p>
                </details>
                <details>
                  <summary>
                    Q. How long does the battery life last for the ShotPulse
                    Timer?
                  </summary>
                  <p>
                    The questions in this generator are gender neutral and can
                    be used to ask either male of females (or any other gender
                    the person identifies with). These questions were created to
                    elicit interesting and thoughtful answers and aren't
                    specific to a specific type of person.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className={styles.testimonials_wrapper}>
            <h2>Testimonials</h2>
            <div>
              <Testimonials />
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
