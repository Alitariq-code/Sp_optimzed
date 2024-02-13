// components/NavBar.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/m_navbar.module.css";
import Logo from "../../public/images/icons/logo.webp";

const MobileNavBar = () => {
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
          id="ul"
          className={
            click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
          }
        >
          <span className={styles.profile_header}>
            <li>
              <Image
                src={"/images/icons/profile.png"}
                alt="logo"
                width={100}
                height={100}
                className={styles.profile_image}
              />
            </li>

            <li className={styles.nav_item}>
              <Link href="/" passHref className={styles.nav_add_to_card}>
                <Image
                  src={"/images/icons/add-to-card.webp"}
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.logoStyle_add_to_card}
                />
              </Link>
            </li>
          </span>

          <span className={styles.box}>
            <Link
              href="/"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector.svg"
                alt="Home Icon"
                width={24}
                height={24}
              />
              <li className={styles.nav_item}>Home</li>
            </Link>
          </span>

          <span className={styles.box}>
            <Link
              href="/feature"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector (2).svg"
                alt="Home Icon"
                width={24}
                height={24}
              />

              <li className={styles.nav_item}>Feature</li>
            </Link>
          </span>

          <span className={styles.box}>
            <Link
              href="/shop"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector (4).svg"
                alt="Home Icon"
                width={24}
                height={24}
              />
              <li className={styles.nav_item}>Shop</li>
            </Link>
          </span>

          <span className={styles.box}>
            <Link
              href="/BeyondOrdinary"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector (5).svg"
                alt="Home Icon"
                width={24}
                height={24}
              />
              <li className={styles.nav_item}>BeyondOrdinary</li>
            </Link>
          </span>

          <span className={styles.box}>
            <Link
              href="/blog"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector (3).svg"
                alt="Home Icon"
                width={24}
                height={24}
              />
              <li className={styles.nav_item}>Blogs</li>
            </Link>
          </span>

          <span className={styles.box}>
            <Link
              href="/contact"
              passHref
              className={styles.nav_links}
              onClick={handleClick}
            >
              <Image
                src="/Icons/Vector (1).svg"
                alt="Home Icon"
                width={24}
                height={24}
              />
              <li className={styles.nav_item}>Contact</li>
            </Link>
          </span>

          <span className={styles.login}>
            <li className={styles.nav_item}>
              <Link
                href="/login"
                passHref
                className={styles.shopButtonStyle}
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
          </span>
        </ul>

        <div className={styles.nav_icon} onClick={handleClick}>
          {click ? (
            <Image
              src="/Icons/Layer 22.svg"
              alt="close"
              width={24}
              height={24}
            />
          ) : (
            <Image src="/Icons/Group.svg" alt="close" width={24} height={24} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
