import googlePlayLinkIcon from "../../assets/image/png/googlePlayLink.png";
import appStoreLinkIcon from "../../assets/image/png/appStoreLink.png";
import { BallSvg } from "../../assets/svg/svg";
import MockupViewer from "../MockupViewer/MockupViewer";
import { mockups } from "./mockups";
import styles from "./MainIdea.module.scss";

const MainIdea = () => {
  return (
    <section id="main-idea" className={styles.section}>
      <article className={styles.blockTitle}>
        <h1>ГОЛОВНА ІДЕЯ</h1>
        <p>
          Забезпечення зручної та швидкої комунікації між тренером та командою,
          завдяки зручним сповіщенням, переглядом та плануванням тренувань та
          турнірів, а також надання можливості зберігати всю необхідну
          інформацію в одному місці.
        </p>
        <div className={styles.links}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={googlePlayLinkIcon} alt="link to Google play" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={appStoreLinkIcon} alt="link to Play store" />
          </a>
        </div>
        <h5>
          Сежте за оновленнями! Наш застосунок скоро<br></br> з’явиться в Google
          Play та App Store.
        </h5>
      </article>
      <div className={styles.blockContent}>
        <MockupViewer mockup={mockups} />
        <div className={styles.snowAnimation}>
          <BallSvg />
        </div>
      </div>
    </section>
  );
};

export default MainIdea;
