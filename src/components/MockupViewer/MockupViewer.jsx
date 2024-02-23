import { useState } from "react";
import styles from "./MockupViewer.module.scss"

const MockupViewer = ({ mockup, styleProp }) => {
  const [isIOS, setIsIOS] = useState(true);

  return (
    <div className={styles.content}>
      <div className={`${styles.imgWrapper} ${styleProp && styleProp}`}>
      <img
        src={`${isIOS ? mockup.iOS : mockup.android}`}
        alt="pic of smartphone"
      />
      </div>
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

export default MockupViewer;
