import { useState } from "react";
import googlePlayLinkIcon from "../../assets/image/png/googlePlayLink.png";
import appStoreLinkIcon from "../../assets/image/png/appStoreLink.png";
import mockupAndroid from "../../assets/image/mockups/mockupMainIdeaAndroid.png";
import mockupIOS from "../../assets/image/mockups/mockupMainIdeaIOS.png";
import { SnowSvg } from "../../assets/svg/svg";
import styles from "./MainIdea.module.scss";

const MainIdea = () => {
  const [isIOS, setIsIOS] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.blockTitle}>
        <h1>ГОЛОВНА ІДЕЯ</h1>
        <p>
          Забезпечення зручної та швидкої комунікації між тренером та командою,
          завдяки зручним сповіщенням, переглядом та плануванням тренувань та
          турнірів, а також надання можливості зберігати всю необхідну
          інформацію в одному місці.
        </p>
        <div className={styles.links}>
          <a href="#">
            <img src={googlePlayLinkIcon} alt="link to Google play" />
          </a>
          <a href="#">
            <img src={appStoreLinkIcon} alt="link to Play store" />
          </a>
        </div>
        <h5>Сежте за оновленнями! Наш застосунок скоро<br></br> з’явиться в Google Play та App Store.</h5>
      </div>
      <div className={styles.blockContent}>
        <div className={styles.content}>
          <img src={`${isIOS ? mockupIOS : mockupAndroid}`} alt="pic of smartphone" />
          <div className={styles.btnBlock}>
            <button className={`${styles.btn} ${isIOS && styles.btnActive}`} onClick={() => {setIsIOS(!isIOS)}}>iOS</button>
            <button className={`${styles.btn} ${!isIOS && styles.btnActive}`} onClick={() => {setIsIOS(!isIOS)}}>
              Android
            </button>
          </div>
        </div>
        <div className={styles.snowAnimation}>
          <SnowSvg />
        </div>
      </div>
    </section>
  );
};

export default MainIdea;
