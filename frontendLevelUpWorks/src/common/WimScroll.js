import styles from "./WimScroll.module.css";

export default function Scrollbar() {
  return (
    <div>
      <div className={styles.scrollBarTest}>
        <div className={styles.scrollBarInner}></div>
      </div>
    </div>
  );
}
