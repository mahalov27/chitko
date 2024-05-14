import { useState, useEffect } from "react";
import logo from "../../assets/image/logo.jpg";
import styles from "./Header.module.scss";
import React from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.tagName === "NAV") {
      return;
    }
    setActive(false);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo chitko" />
      <nav className={styles.nav}>
        <a href="#about-us">ПРО НАС</a>
        <a href="#main-idea">ГОЛОВНА ІДЕЯ</a>
        <a href="#our-advantages">НАШІ ПЕРЕВАГИ</a>
        <a href="#more-advantages">ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#contacts">КОНТАКТИ</a>
      </nav>
      <nav
        className={`${styles.mobileNav} ${active && styles.navActive}`}
        onClick={handleClick}
      >
        <a href="#about-us">ПРО НАС</a>
        <a href="#main-idea">ГОЛОВНА ІДЕЯ</a>
        <a href="#our-advantages">НАШІ ПЕРЕВАГИ</a>
        <a href="#more-advantages">ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#contacts">КОНТАКТИ</a>
      </nav>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className={active && styles.btnActive}></div>
      </button>
    </header>
  );
};

export default Header;
