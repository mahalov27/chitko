import { motion } from "framer-motion";
import useForm from "./useForm";
import Loader from "../Loader/Loader";
import styles from "./Form.module.scss";

const Form = () => {
  const { mail, error, requestStatus, pending, setMail, handlSubmit } =
    useForm();

  return (
    <section className={styles.section}>
      <h1>БАЖАЄТЕ ВСТАНОВИТИ ЗАСТОСУНОК?</h1>
      <form onSubmit={handlSubmit}>
        <div className={styles.inputWrapper}>
          <input
            value={mail}
              type="mail"
            onChange={(e) => {
              setMail(e.target.value);
            }}
            placeholder="Введіть Ваш Email"
          />
          {error && error.length > 0 && (
            <motion.label
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 1,
                x: [-4, 4, -4, 4, -4, 0],
              }}
              transition={{ duration: 0.2 }}
              className={styles.error}
            >
              {error}
            </motion.label>
          )}
          {pending && <Loader />}
        </div>
        <button
          className={requestStatus ? styles.didRequest : ""}
          disabled={requestStatus}
        >
          {requestStatus ? "Заявка була подана" : "Дізнатись деталі"}
        </button>
      </form>
    </section>
  );
};

export default Form;
