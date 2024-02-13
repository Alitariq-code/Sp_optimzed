// components/NavBar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/footer.module.css';
import Logo from '../../public/images/icons/logo.webp';

const Footer = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  //   console.log(logo);

  return (
    <div>
      <hr className={styles.hr_bottom} />

      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <Link href="/" passHref className={styles.footer_logo}>
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              className={styles.logoStyle}
            />
          </Link>

          <ul
            className={
              click
                ? `${styles.footer_menu} ${styles.active}`
                : styles.footer_menu
            }
          >
            <li className={styles.footer_item}>
              <Link
                href="/"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/feature"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                Feature
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/shop"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                Shop
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/enterprise"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                   BeyondOrdinary
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/blog"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                Blogs
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/contact"
                passHref
                className={styles.footer_links}
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            <hr className={styles.hrStyle} />
            <li className={styles.footer_item}>
              <Link
                href="/"
                passHref
                className={styles.footer_btn}
                onClick={handleClick}
              >
                Log in
              </Link>
            </li>
          </ul>

          <ul className={styles.footer_menu_bottom}>
            <li>
              <Link href="/" passHref className={styles.icons_logo}>
                <Image
                  src={'/images/icons/Facebook Icon.webp'}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.icons_logo}
                />
              </Link>
            </li>
            <li>
              <Link href="/" passHref className={styles.icons_logo}>
                <Image
                  src={'/images/icons/Instagram Icon.webp'}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.icons_logo}
                />
              </Link>
            </li>
            <li>
              <Link href="/" passHref className={styles.icons_logo}>
                <Image
                  src={'/images/icons/Twitter Icon.webp'}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.icons_logo}
                />
              </Link>
            </li>
            <li>
              <Link href="/" passHref className={styles.icons_logo}>
                <Image
                  src={'/images/icons/Youtube Icon.webp'}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.icons_logo}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.bottom_footer}>
          <p>Pulse Frontier Copyright 2023. All rights reserved.</p>
          <p>Privacy policy Terms of Use</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
