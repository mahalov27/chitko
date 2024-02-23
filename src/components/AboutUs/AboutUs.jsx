// import { motion } from "framer-motion";
// import mockups from "../../assets/image/mockups/mockupAbout.png"
import styles from "./AboutUs.module.scss";
import promo from "../../assets/video/App_Presentation_White_Version_changed.mp4"

const animation = {
  hidden: {
    x: -250,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.25,
    },
  }),
};

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <video
          src={promo}
          className={styles.video}
          preload="auto"
          no-controls="true"
          autoPlay
          loop
          muted
        ></video>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className={styles.title}>
        <motion.h1 variants={animation} custom={2} className={styles.titleItemOne}>ТРЕНУЙТЕСЬ.</motion.h1>
        <motion.h1 variants={animation} custom={1} className={styles.titleItemTwo}>ПЛАНУЙТЕ.</motion.h1>
        <motion.h1 variants={animation} custom={3} className={styles.titleItemThree}>ДОСЯГАЙТЕ.</motion.h1>
      </motion.div> 
      <div className={styles.content}>
        <img src={mockups} alt="pic with two phones"/>
        <p>РАЗОМ З CHITKO</p>
      </div> */}
    </section>
  );
};

export default AboutUs;
