import styles from "./Button.module.scss";

const Button = ({ children, name, styleProp, handleClick }) => {
  return (
    <button
      name={name}
      onClick={handleClick}
      className={styleProp && styleProp}
    >
      {children}
    </button>
  );
};

export default Button;
