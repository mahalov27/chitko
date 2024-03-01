import { useState } from "react";
import MockupViewer from "../MockupViewer/MockupViewer";
import { SpringSvg, ButtonLeftSvg, ButtonRightSvg } from "../../assets/svg/svg";
import Button from "../Button/Button";
import { content } from "./content";
import styles from "./ForCoach.module.scss";

const ForCoach = () => {
  const [index, setIndex] = useState(0);

  const handleChangePage = (e) => {
    if (e.currentTarget.name === "increment") {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section id="our-advantages" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.descriptionBlock}>
          <h1>ПЕРЕВАГИ ДЛЯ ТРЕНЕРА</h1>
          <article>
            <h2>{content[index].title}</h2>
            <p>{content[index].description}</p>
          </article>
          <div className={styles.actions}>
            {0 < index && (
              <Button name="decrement" handleClick={handleChangePage}>
                <ButtonLeftSvg />
              </Button>
            )}
            {content.length - 1 > index && (
              <Button name="increment" handleClick={handleChangePage}>
                <ButtonRightSvg />
              </Button>
            )}
          </div>
        </div>
        <div className={styles.widgetBlock}>
          <MockupViewer
            mockup={content[index].mockups}
            styleProp={styles.imgWrapper}
          />
        </div>
      </div>
      <div className={styles.spring}>
        <SpringSvg />
      </div>
    </section>
  );
};

export default ForCoach;
