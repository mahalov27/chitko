import { useState } from "react";
import styles from "./MockupViewer.module.scss";

const MockupViewer = ({ mockup, styleProp, variable, unFixedWidth }) => {
  const [isIOS, setIsIOS] = useState(true);

  return (
    <div className={`${styles.content} ${unFixedWidth && styles.unFixedWidth}`}>
      <div className={`${styles.imgWrapper} ${styleProp && styleProp} ${variable && styles.large}`}>
        {Array.isArray(mockup) && mockup.map(item => {
          return (
            <img
            key={item.iOS}
              src={`${isIOS ? item.iOS : item.android}`}
              alt="pic of smartphone"
            />
          );
        })}
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
