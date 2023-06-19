import {React, useState, useEffect} from "react";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";



const HomeSection45 = () => {
    const [textIndex, setTextIndex] = useState(3);
    // const handleClick = (index) => {
    //   setTextIndex(index);
    // };
    const handleClick = (index) => {
        console.log(`handleClick called with index: ${index}`);
        setTextIndex(index);
      };
    useEffect(() => {
        console.log(`textIndex updated to: ${textIndex}`);
      }, [textIndex]);



  return (
    <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(4)}>4</button> 
<HomeSection4   />
<HomeSection5 />





    </div>
  )
}

export default HomeSection45