// pages/index.js

import React, { useEffect, useState } from 'react';
import styles from '../../styles/slider1.module.css';

const SliderDesktop = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    const slider = document.getElementById('slider');
    const container = document.getElementById('container');
    let frontImg = document.getElementById('front');
    let side1 = document.getElementById('side1');
    let side2 = document.getElementById('side2');
    const div2 = document.getElementById('div2');
    const div1 = document.getElementById('div1');
    const div3 = document.getElementById('div3');
    frontImg.style.objectFit = 'fill';
    frontImg.style.zIndex = '1';
    frontImg.style.height = '503px';
    frontImg.style.width = '400px';
    side1.style.height = '415px';
    side1.style.width = '415px';

    side2.style.height = '415px';
    side2.style.width = '415px';

    ///////
    div2.style.backgroundColor = '#FFFFFF';

    ///
    let clickedImg;
    let frontImgage;
    let clickedIndex;

    if (screenWidth > 1900) {
      frontImg.style.height = '650px';
      frontImg.style.width = '580px';
      side1.style.height = '540px';
      // side1.style.width = '450px';

      side2.style.height = '540px';
      // side2.style.width = '450px';
    }

    //// funtions///
    function sideImage1(frontImgage, clickedImg) {
      if (clickedImg.classList.contains('img3')) {
        div2.style.backgroundColor = '#A4A4A4';
        div1.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#FFFFFF';
      } else if (clickedImg.classList.contains('img2')) {
        div1.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#A4A4A4';
        div2.style.backgroundColor = '#FFFFFF';
      }
      if (clickedImg.classList.contains('img1')) {
        div2.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#A4A4A4';
        div1.style.backgroundColor = '#FFFFFF';
      }
      frontImgage.id = clickedImg.id;
      clickedImg.id = 'front';
      // slider.insertBefore(frontImg, clickedImg);
      clickedImg.style.objectFit = 'fill';
      clickedImg.style.zIndex = '1';
      clickedImg.style.height = '503px';
      frontImgage.style.objectFit = '';
      frontImgage.style.height = '415px';
      frontImgage.style.zIndex = '';
      if (screenWidth > 1900) {
        clickedImg.style.height = '650px';
        clickedImg.style.width = '550px';
        // frontImgage.style.height = '490px';
        frontImgage.style.height = '540px';
      }

      slider.insertBefore(frontImgage, clickedImg);
    }

    function sideImage2(frontImgage, clickedImg) {
      // console.log(clickedImg);
      if (clickedImg.classList.contains('img3')) {
        div2.style.backgroundColor = '#A4A4A4';
        div1.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#FFFFFF';
      } else if (clickedImg.classList.contains('img2')) {
        div1.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#A4A4A4';
        div2.style.backgroundColor = '#FFFFFF';
      }
      if (clickedImg.classList.contains('img1')) {
        div2.style.backgroundColor = '#A4A4A4';
        div3.style.backgroundColor = '#A4A4A4';
        div1.style.backgroundColor = '#FFFFFF';
      }
      frontImgage.id = clickedImg.id;
      clickedImg.id = 'front';

      clickedImg.style.objectFit = 'fill';
      clickedImg.style.height = '503px';
      clickedImg.style.zIndex = '1';
      // slider.insertBefore(clickedImg, frontImg);
      frontImgage.style.height = '415px';

      frontImgage.style.objectFit = '';
      frontImgage.style.zIndex = '';
      if (screenWidth > 1900) {
        clickedImg.style.height = '650px';
        clickedImg.style.width = '580px';
        // frontImgage.style.height = '490px';
        frontImgage.style.height = '540px';
        // frontImgage.style.width = '450px';
      }

      slider.insertBefore(clickedImg, frontImgage);
    }

    const handleClick = (event) => {
      clickedImg = event.target;
      // console.log(clickedImg);
      frontImgage = document.getElementById('front');
      let frontIndex = Array.from(slider.children).indexOf(frontImg);
      clickedIndex = Array.from(slider.children).indexOf(clickedImg);

      if (clickedImg.id === 'front' && clickedIndex === 1) {
      } else if (clickedImg.id === 'side2') {
        // console.log('clicked', clickedImg);
        sideImage2(frontImgage, clickedImg);
      } else if (clickedImg.id === 'side1') {
        // console.log('clicked', clickedImg);
        sideImage1(frontImgage, clickedImg);
      }
    };

    //
    const images = Array.from(document.getElementById('slider').children);
    let currentIndex = 1;
    const changeImages = () => {
      // Simulate a click on the next image in the slider every 2 seconds
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImage = images[nextIndex];
      nextImage.click();
      currentIndex = nextIndex; // Update the current index
    };
    const intervalId = setInterval(changeImages, 3000);

    slider.addEventListener('click', handleClick);

    return () => {
      slider.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);
  // console.log('screen', screenWidth - 25);

  return (
    <div className={styles['laptop_slider']}>
      <div className={styles['main-section']}>
        <div className={styles['slider-container']}>
          <div className={styles['slider']} id="slider">
            <img
              className={`${styles.img} ${styles.image1} img1`}
              id="side1"
              src="/images/Home-hero-section-slider/left.webp"
              alt="Side Image 1"
            />

            <img
              className={`${styles.img} ${styles.image2} img2`}
              id="front"
              src="/images/Home-hero-section-slider/middle.webp"
              alt="Front Image"
            />
            <img
              className={`${styles.img} ${styles.image3} img3`}
              id="side2"
              src="/images/Home-hero-section-slider/right.webp"
              alt="Side Image 2"
            />
          </div>
        </div>
      </div>
      <div className={styles.container} id="container">
        <div className={styles.div1} id="div1"></div>
        <div className={styles.div1} id="div2"></div>
        <div className={styles.div1} id="div3"></div>
      </div>
    </div>
  );
};

export default SliderDesktop;
