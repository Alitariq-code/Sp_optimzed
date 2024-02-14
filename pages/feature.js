import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MobileNavBar from './components/m_navbar';
import TablePage from './components/table2';

import Footer from './components/footer';
import styles from '../styles/feature.module.css';
import Link from 'next/link';
import Image from 'next/image';

import image7 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/Customize 1.svg';
import image8 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/svgexport-20 1.svg';
import image9 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/Group.svg';
import image10 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/Group-1.svg';
import image11 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/improve 1.svg';

import chose1 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/Customize 1.svg';
import chose2 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/svgexport-20 1.svg';
import chose3 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/Group.svg';
import chose4 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/Group-1.svg';
import chose5 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/improve 1.svg';
import chose6 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Black/smart connections 1.svg';

import image12 from '../public/images/Feature Page Images/Feature Page Icons/Choose Your Drill For Shooting Icons/Light Green/smart connections 1.svg';

import image15 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Light Green/Vector.svg';
import image16 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Light Green/Vector-1.svg';
import image17 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Light Green/Vector-2.svg';
import image18 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Light Green/Vector-3.svg';

import last1 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Black/Vector.svg';
import last2 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Black/Vector-1.svg';
import last3 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Black/Vector-2.svg';
import last4 from '../public/images/Feature Page Images/Feature Page Icons/Progress Requires Section Icons/Black/Vector-3.svg';

import image19 from '../public/images/Feature Page Images/Group 4315.webp';

import CampareTable from '../public/images/Feature Page Images/CampareTable-bg-Image.svg';

// For Coaches vs ShotPulse Member section images
import image21 from '../public/images/Feature Page Images/left.svg';
import image22 from '../public/images/Feature Page Images/right.svg';

// key Features Mobile Section images
import imagekey01 from '../public/images/key-feature-mobile/1-key-section-mobile.svg';
import imagekey02 from '../public/images/key-feature-mobile/2-key-section-mobile.svg';
import imagekey03 from '../public/images/key-feature-mobile/3-key-section-mobile.svg';
import imagekey01middle from '../public/images/key-feature-mobile/key-section-middle-moble.svg';
import imagekey04 from '../public/images/key-feature-mobile/4-key-section-mobile.svg';
import imagekey05 from '../public/images/key-feature-mobile/5-key-section-mobile.svg';
import imagekey06 from '../public/images/key-feature-mobile/6-key-section-mobile.svg';

//

import sm1Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/Group.svg';
import sm1Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/Group-1.svg';
import sm2Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/svgexport-17 (5) 2.svg';
import sm2Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/svgexport-17 (5) 3.svg';
import sm3Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/Group-2.svg';
import sm3Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/Group-3.svg';

import sm4Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/Vector-1.svg';
import sm4Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/Vector.svg';
import sm5Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/Group-1.svg';
import sm5Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/Group.svg';
import sm6Black from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Black/Group 4338.svg';
import sm6Green from '../public/images/Feature Page Images/Feature Page Icons/ShotPulse Versatility is Unmatched/Light Green/Group 4337.svg';
import Spinner from './components/Spinner';
function Feature() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);

  const [isHovered13, setIsHovered13] = useState(false);
  const [isHovered14, setIsHovered14] = useState(false);
  const [isHovered15, setIsHovered15] = useState(false);
  const [isHovered16, setIsHovered16] = useState(false);
  const [loadingState, setLoadingState] = useState(0);
  function handleHover(status, id) {
    let isHovered = status;

    if (isHovered && id === 1) {
      setIsHovered1(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 1) {
      setIsHovered1(status);
      console.log('Not Hovered!');
      // Add any additional actions you want to perform on mouse out
    }
    if (isHovered && id === 2) {
      setIsHovered2(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 2) {
      setIsHovered2(status);
      console.log('Not Hovered!');
      // Add any additional actions you want to perform on mouse out
    }

    if (isHovered && id === 3) {
      setIsHovered3(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 3) {
      setIsHovered3(status);
      console.log('Not Hovered!');
      // Add any additional actions you want to perform on mouse out
    }

    if (isHovered && id === 4) {
      setIsHovered4(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 4) {
      setIsHovered4(status);
      console.log('Not Hovered!');
      // Add any additional actions you want to perform on mouse out
    }
    if (isHovered && id === 5) {
      setIsHovered5(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 5) {
      setIsHovered5(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 6) {
      setIsHovered6(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 6) {
      setIsHovered6(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 7) {
      setIsHovered7(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 7) {
      setIsHovered7(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 8) {
      setIsHovered8(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 8) {
      setIsHovered8(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 9) {
      setIsHovered9(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 9) {
      setIsHovered9(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 10) {
      setIsHovered10(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 10) {
      setIsHovered10(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 11) {
      setIsHovered11(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 11) {
      setIsHovered11(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 12) {
      setIsHovered12(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 12) {
      setIsHovered12(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 13) {
      setIsHovered13(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 13) {
      setIsHovered13(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 14) {
      setIsHovered14(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 14) {
      setIsHovered14(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 15) {
      setIsHovered15(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 15) {
      setIsHovered15(status);
      console.log('Not Hovered!');
    }
    if (isHovered && id === 16) {
      setIsHovered16(status);
      console.log('Hovered!');
    } else if (!isHovered && id === 16) {
      setIsHovered16(status);
      console.log('Not Hovered!');
    }
  }
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          '/public/images/Feature Page Images/Powerhouse of Technology.webp',
          '/public/images/Feature Page Images/Versatility is Unmatched.webp',
          '/public/images/Feature Page Images/Powerhouse of Technology.webp',

          '/public/images/Feature Page Images/Gaming Meets Training.webp',
          '/public/images/Feature Page Images/Quantitative Assessment.webp',
          '/public/images/Feature Page Images/Choose Your Drill.svg',
        ];

        // Start loading images asynchronously
        const loadImagePromises = allImageNames.map(async (imageName) => {
          const response = await fetch(
            `/api/images?imageName=${encodeURIComponent(imageName)}`
          );
          console.log(response);
          let loadingState = 0;
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
      <div>
        {!loading && (
          <>
            <MobileNavBar />

            <NavBar />
            <hr className={styles.hr_bottom} />
            <div className={styles.main_wrapper}>
              <div className={styles.parent_container_left_wrapper}>
                <h2>
                  ShotPulse Shot
                  <span className={styles.color_container}> Timer</span>
                </h2>
                <p>
                  Elevate your shooting skills with the ShotPulse Shot Timer –
                  the ultimate tool for precision and accuracy
                </p>
                <Link href="/shop" passHref>
                  <button className={styles.learn_more_button}>
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.wrapper1}>
              <div className={styles.wrapper1_left}>
                <img
                  src={imageNames[0].data}
                  alt="logo"
                  className={styles.image1}
                />
              </div>

              <div className={styles.wrapper1_right}>
                <h2>
                  The ShotPulse is a Powerhouse of{' '}
                  <span className={styles.color_container}> Technology </span>
                </h2>
                <p>
                  The ShotPulse epitomizes the essence of compact and efficient
                  design. It's astonishingly small, roughly the size of a thumb
                  nail, ensuring it remains unobtrusive during your shooting
                  practice. Despite its miniature stature, the ShotPulse is a
                  powerhouse of technology, ingeniously packing state-of-the-art
                  features into a lightweight, portable package.
                </p>

                <div className={styles.wrapper1_right_bottom}>
                  <h4>Connects to a smartphone app</h4>
                  <p>
                    When paired with the intuitive ShotPulse app on your
                    smartphone, this diminutive device transforms into a
                    comprehensive shooting analysis tool. It offers a plethora
                    of customizable options, detailed performance breakdowns,
                    and tailored feedback, all designed to elevate your shooting
                    prowess.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.wrapper2}>
              <div className={styles.wrapper2_left}>
                <h2>
                  ShotPulse's Versatility is{' '}
                  <span className={styles.color_container}> Unmatched</span>
                </h2>
                <p>
                  It's engineered to accurately detect and analyze all types of
                  firing activities, from live fire and dry fire to airsoft and
                  even toy guns, making it the perfect training companion for
                  shooters at any level. Whether you're a seasoned marksman or a
                  young enthusiast honing your skills, the ShotPulse is your
                  gateway to a new realm of precision and skill development.
                </p>
                <div className={styles.wrapper2_left_bottom}>
                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 1)}
                    onMouseOut={() => handleHover(false, 1)}
                  >
                    {isHovered1 ? (
                      <Image
                        src={sm1Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm1Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Highest Accuracy</h5>
                  </div>
                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 2)}
                    onMouseOut={() => handleHover(false, 2)}
                  >
                    {isHovered2 ? (
                      <Image
                        src={sm2Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm2Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Versatile Detection</h5>
                  </div>

                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 3)}
                    onMouseOut={() => handleHover(false, 3)}
                  >
                    {isHovered3 ? (
                      <Image
                        src={sm3Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm3Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Easy Navigation</h5>
                  </div>
                </div>
              </div>

              <div className={styles.wrapper2_right}>
                <img
                  src={imageNames[1].data}
                  alt="logo"
                  className={styles.image2}
                />
              </div>
            </div>

            <div className={styles.wrapper1}>
              <div className={styles.wrapper1_left}>
                <img
                  src={imageNames[2].data}
                  alt="logo"
                  className={styles.image1}
                />
              </div>

              <div className={styles.wrapper1_right}>
                <h2>
                  Insightful Analysis With{' '}
                  <span className={styles.color_container}> Any Firearm</span>
                </h2>
                <p>
                  Moreover, its advanced recoil detection technology is
                  caliber-agnostic, guaranteeing precise timing and insightful
                  analysis with any firearm. This feature positions the
                  ShotPulse as an indispensable tool for anyone serious about
                  improving their shooting performance. Embrace the ShotPulse
                  experience and witness a transformation in your shooting
                  abilities, all with a device that's as inconspicuous as it is
                  powerful.
                </p>

                <div className={styles.wrapper1_right_bottom}>
                  <h4>Recoil</h4>
                  <p>
                    Method relies on sensing the physical movement of the gun as
                    it is fired. It detects the exact moment the gun fires. It
                    is not affected by external factors like sound travel time.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.wrapper2}>
              <div className={styles.wrapper2_left}>
                <h2>
                  The Ultimate Shooting Performance
                  <span className={styles.color_container}> Enhancer</span>
                </h2>
                <p>
                  Meet ShotPulse, the innovative shot timer that's changing the
                  game for shooters around the world. Our device, the first of
                  its kind, utilizes groundbreaking non-sound based technology
                  to provide the most accurate and detailed feedback on your
                  shooting performance. Whether you're a seasoned professional
                  or a beginner, ShotPulse is designed to elevate your skills to
                  new heights.
                </p>
                <div className={styles.wrapper2_left_bottom}>
                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 4)}
                    onMouseOut={() => handleHover(false, 4)}
                  >
                    {isHovered4 ? (
                      <Image
                        src={sm4Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm4Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>East to Setup</h5>
                  </div>

                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 5)}
                    onMouseOut={() => handleHover(false, 5)}
                  >
                    {isHovered5 ? (
                      <Image
                        src={sm5Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm5Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Customizability</h5>
                  </div>

                  <div
                    className={styles.wrapper2_left_box1}
                    onMouseOver={() => handleHover(true, 6)}
                    onMouseOut={() => handleHover(false, 6)}
                  >
                    {isHovered6 ? (
                      <Image
                        src={sm6Black}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={sm6Green}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Data Analysis</h5>
                  </div>
                </div>
              </div>

              <div className={styles.wrapper2_right}>
                <img
                  src={imageNames[1].data}
                  alt="logo"
                  className={styles.image2}
                />
              </div>
            </div>

            <div className={styles.wrapper3}>
              <div className={styles.wrapper3_left}>
                <img
                  src={imageNames[5].data}
                  alt="logo"
                  className={styles.image1}
                />
              </div>

              <div className={styles.wrapper3_right}>
                <h2>
                  Choose Your Drill For{' '}
                  <span className={styles.color_container}> Shooting </span>
                </h2>
                <p>
                  Select the drill & par time menu to set drill for your
                  shooting game. You can choose for Dry Fire and Live Fire.
                </p>

                <div className={styles.wrapper3_left_bottom}>
                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 7)}
                    onMouseOut={() => handleHover(false, 7)}
                  >
                    {isHovered7 ? (
                      <Image
                        src={chose1}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image7}
                        alt="logo"
                        className={styles.image5}
                        loading="lazy"
                      />
                    )}

                    <h5>Customize Your Drill</h5>
                  </div>

                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 8)}
                    onMouseOut={() => handleHover(false, 8)}
                  >
                    {isHovered8 ? (
                      <Image
                        src={chose2}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image8}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Track Your Performance</h5>
                  </div>

                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 9)}
                    onMouseOut={() => handleHover(false, 9)}
                  >
                    {isHovered9 ? (
                      <Image
                        src={chose3}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image9}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Challenges Other</h5>
                  </div>

                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 10)}
                    onMouseOut={() => handleHover(false, 10)}
                  >
                    {isHovered10 ? (
                      <Image
                        src={chose4}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image10}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Compare You Record</h5>
                  </div>

                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 11)}
                    onMouseOut={() => handleHover(false, 11)}
                  >
                    {isHovered11 ? (
                      <Image
                        src={chose5}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image11}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Improve Shooting Skills</h5>
                  </div>

                  <div
                    className={styles.wrapper3_left_box1}
                    onMouseOver={() => handleHover(true, 12)}
                    onMouseOut={() => handleHover(false, 12)}
                  >
                    {isHovered12 ? (
                      <Image
                        src={chose6}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image12}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Connect With Your Smartphone</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.parent_new_wrapper}>
              <h2>
                Key
                <span className={styles.color_container}> Features</span>
              </h2>
            </div>
            <div className={styles.new_wrapper4}>
              <div className={styles.new_wrapper4_card1_left}>
                <h3>Power Up Coaching</h3>
                <p>
                  From backyard battles to global glory, coach epic shot time
                  tournaments in real-time.
                </p>
              </div>

              <div className={styles.new_wrapper4_card2_left}>
                <h3>Comprehensive Analysis</h3>
                <p>The ShotPulse app unlocks a world of insights.</p>
              </div>

              <div className={styles.new_wrapper4_card3_left}>
                <h3>Versatility at Its Core</h3>
                <p>
                  Live fire, dry fire, airsoft, even your neighbor's nerf war -
                  ShotPulse tracks it all.
                </p>
              </div>

              <div className={styles.new_wrapper4_card1_right}>
                <h3>Global Competition Ready</h3>
                <p>
                  From your backyard, to Mondana or Wyoming, to the UK, South
                  America or Singapore. Buckle up, the ShotPulse showdown
                  stretches across continents.
                </p>
              </div>

              <div className={styles.new_wrapper4_card2_right}>
                <h3>The Ultimate Shooting Game</h3>
                <p>
                  Beyond the screen, beyond the joystick. ShotPulse games are
                  real training that builds muscle memory and reflexes for
                  real-world challenges. Sharpen your focus, boost your speed,
                  become a Pulse Acer.
                </p>
              </div>

              <div className={styles.new_wrapper4_card3_right}>
                <h3>Ready for Any Environment</h3>
                <p>
                  Anywhere, anytime, in a sandstorm or drenched in pouring rain.
                  No excuses. Defying the elements, ShotPulse tracks your every
                  shot.
                </p>
              </div>
            </div>

            {/* key Features section for mobile 
    i am using the short forms which is give below 
    m means mobile 
    r means right 
    l means left 
    n means new

*/}

            <div className={styles.n_m_wrapper4_main}>
              {/* 1 */}

              <div className={styles.n_m_wrapper4_card1}>
                <Image
                  src={imagekey01}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card1_content}>
                  <h3>Power Up Coaching</h3>
                  <p>
                    From backyard battles to global glory, coach epic shot time
                    tournaments in real-time.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className={styles.n_m_wrapper4_card2}>
                <Image
                  src={imagekey02}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card2_content}>
                  <h3>Comprehensive Analysis</h3>
                  <p>The ShotPulse app unlocks a world of insights.</p>
                </div>
              </div>

              {/* 3 */}
              <div className={styles.n_m_wrapper4_card3}>
                <Image
                  src={imagekey03}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card3_content}>
                  <h3>Versatility at Its Core</h3>
                  <p>
                    Live fire, dry fire, airsoft, even your neighbor's nerf war
                    - ShotPulse tracks it all.
                  </p>
                </div>
              </div>

              {/* middle picture */}

              <div className={styles.n_m_wrapper4_middle}>
                <Image
                  src={imagekey01middle}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
              </div>

              {/* 4 */}

              <div className={styles.n_m_wrapper4_card4}>
                <Image
                  src={imagekey04}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card4_content}>
                  <h3>Global Competition Ready</h3>
                  <p>
                    From your backyard, to Mondana or Wyoming, to the UK, South
                    America or Singapore. Buckle up, the ShotPulse showdown
                    stretches across continents.
                  </p>
                </div>
              </div>

              {/* 4 surface duo */}

              <div className={styles.n_m_wrapper4_card4_m}>
                <Image
                  src={imagekey04}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card4_content_m}>
                  <h3>Global Competition Ready</h3>
                  <p>
                    ShotPulse Showdown" is an exciting, global competition,
                    connecting local communities to international arenas.
                  </p>
                </div>
              </div>

              {/* 5 */}

              <div className={styles.n_m_wrapper4_card5}>
                <Image
                  src={imagekey05}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card5_content}>
                  <h3>The Ultimate Shooting Game</h3>
                  <p>
                    Beyond the screen, beyond the joystick. ShotPulse games are
                    real training that builds muscle memory and reflexes for
                    real-world challenges. Sharpen your focus, boost your speed,
                    become a Pulse Acer.
                  </p>
                </div>
              </div>

              {/* 5 surface duo */}

              <div className={styles.n_m_wrapper4_card5_m}>
                <Image
                  src={imagekey05}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card5_content_m}>
                  <h3>The Ultimate Shooting Game</h3>
                  <p>
                    ShotPulse games: Real training for real-world skills, honing
                    focus and speed.
                  </p>
                </div>
              </div>

              {/* 6 */}

              <div className={styles.n_m_wrapper4_card6}>
                <Image
                  src={imagekey06}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card6_content}>
                  <h3>The Ultimate Shooting Game</h3>
                  <p>
                    Beyond the screen, beyond the joystick. ShotPulse games are
                    real training that builds muscle memory and reflexes for
                    real-world challenges. Sharpen your focus, boost your speed,
                    become a Pulse Acer.
                  </p>
                </div>
              </div>

              {/* 6 surface duo */}

              <div className={styles.n_m_wrapper4_card6_m}>
                <Image
                  src={imagekey06}
                  alt="logo"
                  className={styles.image1}
                  loading="lazy"
                />
                <div className={styles.n_m_wrapper4_card6_content_m}>
                  <h3>The Ultimate Shooting Game</h3>
                  <p>
                    ShotPulse: relentless training in any condition, tracking
                    your progress without excuses.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className={styles.wrapper4}>
        
        <h2>
        Key 
              <span className={styles.color_container}> Features</span>
            </h2>
  <div className={styles.wrapper4_main}>
  <div className={styles.wrapper4_left}>
  
  
  <div className={styles.wrapper4_card2}>
  
  <div className={styles.wrapper4_card2_left}> 
    <h3>Power Up Coaching</h3>
    <p>From backyard battles to global glory, coach epic shot time tournaments in real-time.</p>
  </div >
  
  </div>  



  <div className={styles.wrapper4_card1}>
  
  <div className={styles.wrapper4_card1_left}> 
    <h3>Comprehensive Analysis</h3>
    <p>The ShotPulse app unlocks a world of insights.</p>
  </div >
  
  </div> 




  <div className={styles.wrapper4_card3}>
  
  <div className={styles.wrapper4_card3_left}> 
    <h3>Versatility at Its Core</h3>
    <p>Live fire, dry fire, airsoft, even your neighbor's nerf war - ShotPulse tracks it all.</p>
  </div >
  
  </div> 
  </div>
  
  
     
  
  
  
           
            <div className={styles.wrapper4_middle}>
            <Image src={image19} alt="logo" className={styles.image19} />
  
  
            </div>
            <div className={styles.wrapper4_right}>
  
              
  <div className={styles.wrapper4_card4}>
  
  <div className={styles.wrapper4_card4_right}> 
    <h3>Power Up Coaching</h3>
    <p>From backyard battles to global glory, coach epic shot time tournaments in real-time.</p>
  </div >
  
  </div>  

  <div className={styles.wrapper4_card5}>
  
  <div className={styles.wrapper4_card5_right}> 
    <h3>The Ultimate Shooting Game</h3>
    <p>Beyond the screen, beyond the joystick. ShotPulse games are real training that builds muscle memory and reflexes for real-world challenges. Sharpen your focus, boost your speed, become a Pulse Acer.</p>
  </div >
  
  </div>  



  <div className={styles.wrapper4_card6}>
  
  <div className={styles.wrapper4_card6_right}> 
    <h3>Ready for Any Environment</h3>
    <p>Anywhere, anytime, in a sandstorm or drenched in pouring rain. No excuses. Defying the elements, ShotPulse tracks your every shot.</p>
  </div >
  
  </div>  


            </div>
            </div>
        </div> */}

            {/* <div className={styles.test}>
        <h2>
        Key 
              <span className={styles.color_container}> Features</span>
            </h2>


            <div className={styles.wrapper_4_left}>
  
  
  <div className={styles.wrapper_4_card2}>
  <div className={styles.wrapper_4_image}>
  <Image src={image23} alt="logo" className={styles.image23} />
  
  </div>

  
  <div className={styles.wrapper_4_card2_left}> 
    <h3>Power Up Coaching</h3>
    <p>From backyard battles to global glory, coach epic shot time tournaments in real-time.</p>
  </div >
  
  </div>  




  </div>
  
  
     
  
  
  
           
            <div className={styles.wrapper4_middle}>
             <Image src={image19} alt="logo" className={styles.image19} /> 
  
  
            </div>
            <div className={styles.wrapper4_right}>
  
              
 
            </div>

          



        </div> */}

            <div className={styles.wrapper5}>
              <h2>
                The ShotPulse Shot Time{' '}
                <span className={styles.color_container}>Competition</span>
              </h2>

              <h3>For Coaches vs ShotPulse Member</h3>

              <Image
                src={CampareTable}
                alt="logo"
                className={styles.image20}
                loading="lazy"
              />

              <Image
                src={image21}
                alt="logo"
                className={styles.image21}
                loading="lazy"
              />

              <Image
                src={image22}
                alt="logo"
                className={styles.image22}
                loading="lazy"
              />
            </div>

            <div className={styles.wrapper6}>
              <div className={styles.wrapper6_left}>
                <img
                  src={imageNames[4].data}
                  alt="logo"
                  className={styles.image8}
                />
              </div>

              <div className={styles.wrapper6_right}>
                <h2>
                  Progress Requires Quantitative
                  <span className={styles.color_container}> Assessment</span>
                </h2>
                <p>
                  Enhance your shooting skills with historical data as stunning
                  plots and charts. This user-friendly visual aid makes tracking
                  and analyzing your shooting performance effortless,
                  highlighting key areas for improvement. Transform your past
                  performances into a strategic guide for future success, and
                  refine your skills with precision and ease.
                </p>

                <div className={styles.wrapper6_left_bottom}>
                  <div
                    className={styles.wrapper6_left_box1}
                    onMouseOver={() => handleHover(true, 13)}
                    onMouseOut={() => handleHover(false, 13)}
                  >
                    {isHovered13 ? (
                      <Image
                        src={last1}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image15}
                        alt="logo"
                        className={styles.image5}
                        loading="lazy"
                      />
                    )}

                    <h5>Skill Enhancement</h5>
                  </div>

                  <div
                    className={styles.wrapper6_left_box1}
                    onMouseOver={() => handleHover(true, 14)}
                    onMouseOut={() => handleHover(false, 14)}
                  >
                    {isHovered14 ? (
                      <Image
                        src={last2}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image16}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Performance Analysis</h5>
                  </div>

                  <div
                    className={styles.wrapper6_left_box1}
                    onMouseOver={() => handleHover(true, 15)}
                    onMouseOut={() => handleHover(false, 15)}
                  >
                    {isHovered15 ? (
                      <Image
                        src={last3}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image17}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>Improvement Focus</h5>
                  </div>

                  <div
                    className={styles.wrapper6_left_box1}
                    onMouseOver={() => handleHover(true, 16)}
                    onMouseOut={() => handleHover(false, 16)}
                  >
                    {isHovered16 ? (
                      <Image
                        src={last4}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={image18}
                        alt="logo"
                        className={styles.image4}
                        loading="lazy"
                      />
                    )}

                    <h5>User - Friendly</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.wrapper7}>
              <div className={styles.wrapper7_top}>
                <h2>
                  Unite, Compete, Conquer
                  <span className={styles.color_container}>
                    {' '}
                    Anytime, Anywhere
                  </span>
                </h2>
                <p>
                  Join the fray from your apartment, farm, range, or even the
                  beach. With ShotPulse, step into a worldwide arena, competing
                  with real-time scores. Real-time rivals, global glory. Unleash
                  your aim, own the leaderboard.{' '}
                </p>
              </div>

              <TablePage />
            </div>

            <div className={styles.wrapper8}>
              <div className={styles.wrapper8_left}>
                <h2>
                  From Virtual to Reality - Where
                  <span className={styles.color_container}>
                    {' '}
                    Gaming Meets Training
                  </span>
                </h2>
                <p>
                  Video games are fun, but they don't really prepare you for
                  real shooting drills. ShotPulse Games, however, offer the
                  adrenaline rush of gaming while building the muscle memory of
                  an ace shooter.
                </p>
                <p>
                  Go beyond high scores in video games. Reach new levels in dry
                  fire or live fire shooting games while building real-world
                  shooting skills.
                </p>
              </div>

              <div className={styles.wrapper8_right}>
                <img
                  src={imageNames[3].data}
                  alt="logo"
                  className={styles.image8}
                />
              </div>
            </div>

            <div className={styles.last_wrapper}>
              <h2>
                Need <span className={styles.color_container}> help? </span>
              </h2>

              <p>
                Go to our Q&A section for any questions you might have, or
                contact us for any further assistance
              </p>
              <Link href="/contact" passHref>
                <button className={styles.learn_more_button}>Contact</button>
              </Link>
            </div>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Feature;
