import { React, useState } from "react";

// import { NavLink } from 'react-router-dom'
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import ModalLogin from "./ModalLogin/ModalLogin";
import Footer from "../../../common/Footer/Footer";
import ResponsiveAppBar from "../../../common/navBar_HomePage/ResponsiveAppBar";



function HomeMain() {
  // modalLogin open/close
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false) };
  const handleShow = () => {
    setShow(true)};

  //  buttons from HomeSection4 change the text in HomeSection5
  const [textIndex, setTextIndex] = useState(3);
  const handleClickInHome = (idx) => {
    setTextIndex(idx);
  };
  

  return (
    <div>
      <ResponsiveAppBar handleShow={handleShow}/>
      <HomeSection1 handleShow={handleShow}/>
      <ModalLogin show={show}  handleClose={handleClose} /> 

      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 handleClick={handleClickInHome} />

      <HomeSection5 textIndex={textIndex} />
      <HomeSection6 handleShow={handleShow}/>
      <Footer />
    </div>
  );
}

export default HomeMain;
