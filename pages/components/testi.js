import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/testi.module.css';

function Testimonials() {
  const sliderRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    // Add a resize event listener to update screenWidth when the window is resized
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 1000);

    // Clear the interval and remove the event listener when the component unmounts
    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [sliderRef]);

  console.log('screen', screenWidth);
  let value = screenWidth - 25;

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: value <= 1024 && value > 250 ? 1 : 2,

    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {data.map((d) => (
        <div key={d.name} className={styles.wrapper}>
          <div className={styles.sm_slider_wrapper}>
            <div className={styles.slider_image}>
              <img src={d.img} alt="" className="" />
            </div>
            <div className={styles.sm_slider_content}>
            <blockquote className={styles.blockquote}>{d.review}</blockquote>
              <h3 className="">{d.name}</h3>
              <div className={styles.title_wrapper}>
                <p className="">{d.designation}</p>
                <p className="">{d.profession}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

const data = [
  {
    img: '/Testimonials/4 mark.webp',
    name: `Mike`,
    review: `As a range coach, I've seen plenty of shot timers, but ShotPulse stands out. Its recoil-based timing system is impressively accurate, giving us an edge in training precision shooters. The ease of setup and use makes it a favorite among my students.`,
    designation: 'Range Coach',
    profession: 'Professional Shooting Instructor',
  },
  {
    img: '/Testimonials/2 jason.webp',
    name: `Jason`,
    review: `As a student on a budget, I appreciate the affordability of ShotPulse. It's user-friendly, and its app has been a great tool for tracking my progress. It's helped me improve my shooting Speedsignificantly.`,
    designation: 'Student and Shooting Enthusiast.',
    profession: 'Student',
  },
  {
    img: '/Testimonials/3 linda.webp',
    name: `Linda`,
    review: `I'm new to shooting and was looking for something to help me practice at home. ShotPulse has been fantastic! It's easy to use, and the app is very intuitive. I love how it helps me track my improvement over time.`,
    designation: 'Recreational Shooter',
    profession: 'Home Maker',
  },
  {
    img: '/Testimonials/4 mark.webp',
    name: `Sgt. Mark`,
    review: `Having served in the military, I've seen the importance of precise shooting. ShotPulse's accuracy and real-time feedback have been invaluable for maintaining my skills. It's as close as you can get to professional-grade equipment for personal use.`,
    designation: 'Retired Military Personnel',
    profession: 'Veteran',
  },
  {
    img: '/Testimonials/1 mile.webp',
    name: `Emily`,
    review: `As a tech entrepreneur, I'm always interested in innovative gadgets. ShotPulse impressed me with its cutting-edge technology and seamless integration with its app. It's not just a tool for shooters; it's a showcase of smart technology in sports.`,
    designation: 'Tech Startup CEO',
    profession: 'Entrepreneur',
  },
  {
    img: '/Testimonials/6 david.webp',
    name: `David`,
    review: `As a parent, I initially bought ShotPulse as an inexpensive tool to introduce my child to shooting with a toy gun. Surprisingly, it's become a valuable asset in teaching discipline and focus. The simplicity and effectiveness of ShotPulse make it an excellent choice for families interested in safe, educational shooting practice.`,
    designation: 'Father and Hobbyist Shooter',
    profession: 'Parent',
  },
];

export default Testimonials;
