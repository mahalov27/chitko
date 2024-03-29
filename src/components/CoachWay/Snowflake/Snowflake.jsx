import { useEffect, useState } from "react";
import styles from "./Snowflake.module.scss";

const Snowflake = ({ id, activeItem, name, colorMode }) => {
  const [currentActiveItem, setCurrentActiveItem] = useState(0);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    if (activeItem > currentActiveItem) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
    setCurrentActiveItem(activeItem);
  }, [activeItem]);

  return (
    <div
      attr={name}
      className={`${styles.snowflakeWrapper} ${
        id === activeItem && styles.active
      } ${colorMode && styles.colorMode}`}
    >
      <div
        className={`${styles.snowflake} ${
          id === activeItem && isNext && styles.activeRight
        } ${id === activeItem && !isNext && styles.activeLeft}`}
      >
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            data-attr={`${idx + 1}`}
            className={`${activeItem === id && styles.activeItem} ${
              colorMode && styles.colorMode
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Snowflake;
