import { useState } from "react";
import Button from "../Button/Button";
import Snowflake from "./Snowflake/Snowflake";
import MockupViewer from "../MockupViewer/MockupViewer";
import { ButtonLeftSvg, ButtonRightSvg } from "../../assets/svg/svg";
import { content } from "./content";
import styles from "./CoachWay.module.scss";

const CoachWay = () => {
  const [count, setCount] = useState(1);
  const points = [
    "Зареєструйтесь",
    "Заповніть власний профіль",
    "Додайте команди",
    "Поширте код і додайте гравців",
    "Розпочніть взаємодію",
  ];

  const handleChangePage = (e) => {
    if (e.currentTarget.name === "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>ШЛЯХ ТРЕНЕРА</h1>
        <div className={styles.brakePointLine}>
          <div className={styles.line}></div>
          {points.map((name, idx) => (
            <Snowflake key={idx} id={idx + 1} name={name} activeItem={count} />
          ))}
        </div>
        <div className={styles.content}>
          <MockupViewer
            mockup={content[count - 1].mockups}
            styleProp={styles.widget}
            unFixedWidth={true}
          />
        </div>
        {count > 1 && (
          <Button
            name="decrement"
            styleProp={styles.btnLeft}
            handleClick={handleChangePage}
          >
            <ButtonLeftSvg />
          </Button>
        )}
        {count < 5 && (
          <Button
            name="increment"
            styleProp={styles.btnRight}
            handleClick={handleChangePage}
          >
            <ButtonRightSvg />
          </Button>
        )}
      </div>
    </section>
  );
};

export default CoachWay;
