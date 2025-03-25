import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    //class styling based on type,conditionally adding a class
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
