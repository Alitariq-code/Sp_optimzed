// components/NavBar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/NavBar.module.css';
import Logo from '../../public/images/icons/logo.webp';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setShowProfileDropdown(false); // Close profile dropdown when clicking on other links
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <Link href="/" passHref className={styles.nav_logo}>
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className={styles.logoStyle}
          />
        </Link>

        <ul
          id="ul1"
          className={
            click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
          }
        >
          <li className={styles.nav_item}>
            <Link
              href="/"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/feature"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              Feature
            </Link>
          </li>

          <li className={styles.nav_item}>
            <Link
              href="/shop"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              Shop
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/enterprise"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
                 BeyondOrdinary
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/blog"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              Blogs
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/contact"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <ul
          id="ul2"
          className={
            click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
          }
        >
          <li className={styles.nav_item}>
            <Link
              href="/"
              passHref
              className={styles.shopButtonStyle}
              onClick={handleClick}
            >
              Login
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/" passHref className={styles.nav_add_to_card}>
              <Image
                src={'/images/icons/add-to-card.webp'}
                alt="logo"
                width={100}
                height={100}
                className={styles.logoStyle_add_to_card}
              />
            </Link>
          </li>
          <li>
          <Image
                src={'/images/icons/profile.png'}
                alt="logo"
                width={100}
                height={100}
                className={styles.profile_image}
              /></li>
                
         
          {/* <li className={styles.nav_item} onClick={handleProfileClick}>
            <div className={styles.nav_add_to_card}>
              <Image
                src={'/images/icons/profile.png'}
                alt="logo"
                width={100}
                height={100}
                className={styles.profile_image}
              />
            </div>
            {showProfileDropdown && (
              <div className={styles.profileDropdown}>
                <Image
                  src={'/Icons/Banner-For-Mobile-App.webp'}
                  alt="banner"
                  width={200}
                  height={100} // Adjust the height based on your design
                  className={styles.banner_image}
                />
                <Image
                  src={'/images/icons/profile.png'}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.profile_image}
                />
                <ul className={styles.dropdownList}>
                  <li>Profile</li>
                  <li>Analytics</li>
                  <li>My Competition</li>
                  <li>Tutorials</li>
                  <li>Store</li>
                  <li>Sign Out</li>
                </ul>
              </div>
            )}
          </li> */}
        </ul>

        <div className={styles.nav_icon} onClick={handleClick}>
          {click ? (
            <Image
              src="/Icons/close-fill.webp"
              alt="close"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/Icons/hamburger-lg.webp"
              alt="close"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
    </nav>

   

  );
};

export default NavBar;
