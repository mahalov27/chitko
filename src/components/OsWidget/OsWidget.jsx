import { useState } from "react";
import mockupIOS from "../../assets/image/mockups/mockupMainIdeaIOS.png";
import mockupAndroid from "../../assets/image/mockups/mockupMainIdeaAndroid.png";
import styles from "./OsWidget.module.scss";

const OsWidget = () => {
  const [isIOS, setIsIOS] = useState(true);

  return (
    <div className={styles.content}>
      <img
        src={`${isIOS ? mockupIOS : mockupAndroid}`}
        alt="pic of smartphone"
      />
      <div className={styles.btnBlock}>
        <button
          className={`${styles.btn} ${isIOS && styles.btnActive}`}
          onClick={() => {
            setIsIOS(!isIOS);
          }}
        >
          iOS
        </button>
        <button
          className={`${styles.btn} ${!isIOS && styles.btnActive}`}
          onClick={() => {
            setIsIOS(!isIOS);
          }}
        >
          Android
        </button>
      </div>
    </div>
  );
};

export default OsWidget;
