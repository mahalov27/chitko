import {Link} from "react-router-dom";
import logo from "../../assets/image/logo.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo chitko" />
      <nav>
        <a href="#about-us" >ПРО НАС</a>
        <a href="#main-idea" >ГОЛОВНА ІДЕЯ</a>
        <a href="#our-advantages" >НАШІ ПЕРЕВАГИ</a>
        <a href="#" >ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#contacts" >КОНТАКТИ</a>
      </nav>
    </header>
  );
};

export default Header;
