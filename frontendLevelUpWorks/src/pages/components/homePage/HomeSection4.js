import React, {useState} from "react";

import styles from "./HomeSection4.module.css";
import "./HomeMain.css";
import ButtonHero from "../../../common/ButtonHero";


const HomeSection4 = ({ handleClick }) => {
  const clickButton1 = () => {
    handleClick(1);
  };

  const clickButton2 = () => {
    handleClick(2);
  };
  const clickButton3 = () => {
    handleClick(3);
  };
  const clickButton4 = () => {
    handleClick(4);
  };

  //  ===== change color of button when clicked =====
  const [selectedBtn, setSelectedBtn] = useState(null);
  // console.log("selectedBtn is the : ", selectedBtn);
  const clickBtnS4 = (buttonNumber) => {
    handleClick(buttonNumber);
    // console.log("buttonNumber", buttonNumber);
    setSelectedBtn(buttonNumber);
    console.log("set selectedBtn is the: ", setSelectedBtn);
  };
  return (
    <div className={styles.containerS4}>
      <h2 style={{ textAlign: "center" }}>
        How our programme helps teachers and schools
      </h2>
      <section className={styles.btnGroupS4}>

   

 <ButtonHero
        backgroundColor={selectedBtn === 1 ? "rgb(239, 239, 239)" : "white"}
        border={selectedBtn === 1 ? "rgb(239, 239, 239)" : "rgb(67,192,246)"}
     
          color="#606060"
          text="LEARNING PATHWAYS"
          width="300px"
          className={styles.btnS4}
          onClick={() => clickBtnS4(1)}

        />

        <ButtonHero
        backgroundColor={selectedBtn === 2 ? "rgb(239, 239, 239)" : "white"}
        border={selectedBtn === 2 ? "rgb(239, 239, 239)" : "rgb(67,192,246)"}
     
          color="#606060"
          text="DIGITAL TECHNOLOGIES"
          width="300px"
          className={styles.btnS4}
          onClick={() => clickBtnS4(2)}
        />
        <ButtonHero
        backgroundColor={selectedBtn === 3 ? "rgb(239, 239, 239)" : "white"}
        border={selectedBtn === 3 ? "rgb(239, 239, 239)" : "rgb(67,192,246)"}
    
          color="#606060"
          text="KEY COMPETENCIES"
          width="300px"
          className={styles.btnS4}
          onClick={() => clickBtnS4(3)}
        />
        <ButtonHero
        backgroundColor={selectedBtn === 4 ? "rgb(239, 239, 239)" : "white"}
        border={selectedBtn === 4 ? "rgb(239, 239, 239)" : "rgb(67,192,246)"}
     
          color="#606060"
          text="IR4.0"
          width="300px"
          className={styles.btnS4}
          onClick={() => clickBtnS4(4)}
        />
      </section>
    </div>
  );
};

export default HomeSection4;
