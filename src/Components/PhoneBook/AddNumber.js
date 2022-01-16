import styles from "./AddNumber.module.css";
import { AddNumberForm } from "./AddNumberForm";

export function AddNumber({ active, setActive }) {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styles.modal__content} ${styles.active}`
            : `${styles.modal__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <AddNumberForm active={active} setActive={setActive} />
      </div>
    </div>
  );
}
