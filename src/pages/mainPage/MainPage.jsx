import AboutUs from "../../components/AboutUs/AboutUs"
import WhatWhy from "../../components/WhatWhy/WhatWhy";
import MainIdea from "../../components/MainIdea/MainIdea";
import ForCoach from "../../components/ForCoach/ForCoach";
import CoachWay from "../../components/CoachWay/CoachWay";
import Form from "../../components/Form/Form";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <AboutUs />
      <WhatWhy />
      <MainIdea />
      <ForCoach />
      <CoachWay />
      <Form />
    </div>
  );
};

export default MainPage;
