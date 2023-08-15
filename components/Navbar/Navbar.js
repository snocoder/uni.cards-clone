"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "@/public/logo.svg";
import Link from "next/link";
import rightArrow from "@/public/right_arrow.svg";

const Navbar = () => {
  const [hamClicked, setHamburgeClicked] = useState(false);
  return (
    <div className={`${styles.navbar} ${"flex flex__justifyContentCenter"}`}>
      <div className={`${styles.navbar__wrapper}`}>
        <ul
          className={`${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
        >
          <li>
            <Link className={`${styles.navbar__logo}`} href="/">
              <Image src={logo} alt="Uni.cards logo" />
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.navbar__button}`}
              href="https://paychek.uni.club/"
            >
              Uni Paychek
            </Link>
          </li>

          <li>
            <div
              className={`${styles.hamburger} ${
                hamClicked ? styles.active : ""
              } `}
              onClick={() => setHamburgeClicked(!hamClicked)}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </li>
        </ul>
      </div>

      {hamClicked && (
        <div className={styles.dropDown}>
          <Link
            className={`${
              styles.link
            } ${"flex flex__justifyContentSpaceBetween flex__alignItemsCenter"}`}
            href="https://paychek.uni.club/"
          >
            <span>Uni Paychek</span>
            <span>
              <Image src={rightArrow} alt="Right Arrow" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
