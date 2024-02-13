import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './../../styles/mobile-slider.module.css';
const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && !isPaused) {
        sliderRef.current.slickNext();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      if (next === images.length - 1) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
        }, 2000);
      }
    },
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Image
            src={image}
            width={500}
            height={500}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  );
};

const images = ['/images/Home-hero-section-slider/middle.webp', '/images/Home-hero-section-slider/left.webp', '/images/Home-hero-section-slider/right.webp'];

export default function MobileSlider() {
  return <ImageSlider images={images} />;
}
