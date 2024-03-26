import MockupViewer from "../MockupViewer/MockupViewer";
import { BasketBallSvg, FootBallSvg } from "../../assets/svg/svg";
import { content } from "./content";
import styles from "./MoreForAll.module.scss";

const MoreForAll = () => {
  return (
    <section id="more-advantages" className={styles.section}>
      <div className={styles.container}>
        <h1>ЩЕ БІЛЬШЕ ПЕРЕВАГ</h1>
        <div className={styles.one}>
          <div className={styles.text}>
            <h2>{content[0].title}</h2>
            <p>{content[0].description}</p>
          </div>
          <div className={styles.widget}>
            <MockupViewer mockup={content[0].mockups} btnAlt />
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.text}>
            <h2>{content[1].title}</h2>
            <p>{content[1].description}</p>
          </div>
          <div className={styles.widget}>
            <div className={styles.ballRed}><FootBallSvg /></div>
            <MockupViewer mockup={content[1].mockups} btnAlt />
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.text}>
            <h2>{content[2].title}</h2>
            <p>{content[2].description}</p>
          </div>
          <div className={styles.widget}>
            <div className={styles.ballWhite}><BasketBallSvg/></div>
            <MockupViewer mockup={content[2].mockups} btnAlt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreForAll;
