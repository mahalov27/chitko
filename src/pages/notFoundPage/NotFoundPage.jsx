import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <h1>Page Not Found: 404</h1>
      <Link to="/">Повернутись на головну сторінку</Link>
    </section>
  );
};

export default NotFoundPage;
