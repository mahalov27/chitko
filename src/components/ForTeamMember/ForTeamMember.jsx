import { useState } from "react";
import Snowflake from "../CoachWay/Snowflake/Snowflake";
import { content } from "./content";
import Button from "../Button/Button";
import MockupViewer from "../MockupViewer/MockupViewer";
import {
  ButtonLeftSvg,
  ButtonRightSvg,
  SpringSmallOneSvg,
  SpringSmallTwoSvg,
} from "../../assets/svg/svg";
import styles from "./ForTeamMember.module.scss";

const ForTeamMember = () => {
  const [index, setIndex] = useState(0);
  const points = [
    "Введіть ID, надісланий вам тренером",
    "Зареєструйтесь",
    "Заповніть профіль",
    "Розпочніть взаємодію",
  ];

  const handleChangePage = (e) => {
    if (e.currentTarget.name === "increment") {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <section className={styles.teamMemberWaySection}>
          <h1>ШЛЯХ УЧАСНИКА КОМАНДИ</h1>
          <div className={styles.brakePointLine}>
            <div className={styles.line}></div>
            {points.map((name, idx) => (
              <Snowflake key={idx} id={idx + 1} name={name} colorMode />
            ))}
          </div>
        </section>
        <section className={styles.forTeamMemberSection}>
          <h1>ПЕРЕВАГИ ДЛЯ КОРИСТУВАЧА</h1>
          <div className={styles.containerContent}>
            <div className={styles.descriptionBlock}>
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
        </section>
      </div>
      <div className={styles.springOne}>
        <SpringSmallOneSvg />
      </div>
      <div className={styles.springTwo}>
        <SpringSmallTwoSvg />
      </div>
    </section>
  );
};

export default ForTeamMember;
