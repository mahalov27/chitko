import logo from "../../assets/image/logo.jpg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo chitko" />
      <nav>
        <a href="#" >ПРО НАС</a>
        <a href="#" >ГОЛОВНА ІДЕЯ</a>
        <a href="#" >НАШІ ПЕРЕВАГИ</a>
        <a href="#" >ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#" >КОНТАКТИ</a>
      </nav>
    </header>
  );
};

export default Header;
