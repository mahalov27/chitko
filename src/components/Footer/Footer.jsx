import { LinkedinSvg } from "../../assets/svg/svg";
import googlePlayLinkIcon from "../../assets/image/png/googlePlayLink.png";
import appStoreLinkIcon from "../../assets/image/png/appStoreLink.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.tagline}>
        <h1 className={styles.titleItemOne}>ТРЕНУЙТЕСЬ.</h1>
        <h1 className={styles.titleItemTwo}>ПЛАНУЙТЕ.</h1>
        <h1 className={styles.titleItemThree}>ДОСЯГАЙТЕ.</h1>
      </div>
      <nav>
        <a href="#about-us">ПРО НАС</a>
        <a href="#main-idea">ГОЛОВНА ІДЕЯ</a>
        <a href="#our-advantages">НАШІ ПЕРЕВАГИ</a>
        <a href="#">ЯК ЦЕ ПРАЦЮЄ</a>
        <a href="#contacts">КОНТАКТИ</a>
      </nav>
      <div className={styles.linkToIn}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <LinkedinSvg />
          Follow us on LinkedIn
        </a>
      </div>
      <div className={styles.linksToStores}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={googlePlayLinkIcon} alt="link to Google play" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={appStoreLinkIcon} alt="link to App store" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
