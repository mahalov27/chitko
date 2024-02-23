import styles from "./WhatWhy.module.scss";

const WhatWhy = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.blockWhat}>
          <h1 id="about-us">ЩО ТАКЕ CHITKO?</h1>
          <p>
            ChitKo - це мобільний застосунок, який створений для того,<br></br>{" "}
            аби полегшити процес планування та комунікації між тренером та
            <br></br> командою, а також організацію тренувань та турнірів.
          </p>
        </div>
        <div className={styles.blockWhy}>
          <h1>ЧОМУ САМЕ CHITKO?</h1>
          <p>
            Легкий та зрозумілий інтерфейс, CHITKA структура розкладу,<br></br>{" "}
            всі учні водному місці, легка комунікація між учасниками та
            тренером.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWhy;
