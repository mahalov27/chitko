import { SpringSvg } from "../../assets/svg/svg";
import styles from "./ForCoach.module.scss";

const ForCoach = () => {
  return (
    <section className={styles.section}>
      <h1>ПЕРЕВАГИ ДЛЯ ТРЕНЕРА</h1>
      <div className={styles.description}>
        
      </div>
      <div className={styles.spring}>
        <SpringSvg />
      </div>
    </section>
  );
};

export default ForCoach;
