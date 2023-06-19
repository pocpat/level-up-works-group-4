import React from "react";

import styles from "./ButtonHero.module.css";

const ButtonHero = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.heroBtn}
      type="submit"
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.border,
        color: props.color,
        width: props.width,
      }}
    >
      {props.text}
    </button>
  );
};
export default ButtonHero;
