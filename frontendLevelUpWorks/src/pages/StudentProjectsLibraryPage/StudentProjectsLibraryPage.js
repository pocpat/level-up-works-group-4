import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer/Footer";
import ColorButtons from "../../common/ColorButtons/ColorButtons";
import NavBarHomePageMain from "../../common/navBar_HomePage/NavBarHomePageMain";
import styles from "./StudentProjectsLibraryPage.module.css";
import axios from "axios";


export default function StudentProjectsLibraryPage() {

  const [data, setData] = useState([]);                                           //#### state to store data coming from REST API
  const [selectedSubscription, setSelectedSubscription] = useState({});           //#### state to store the selected checkboxes (Subscription checkbox)
  const [selectedActivity, setSelectedActivity] = useState([]);                   //#### state to store the selected checkboxes (Other checkbox)  
  const [filteredData, setFilteredData] = useState([]);                           //#### state to store the filtered data
  const [filteredBtn, setFilteredBtn] = useState([]);                             //#### state to store the clicked btn value

  useEffect(() => {                                       //#### fetch data from REST API using axios
    axios.get('http://localhost:4000/api/projects')
      .then(response => setData(response.data))
      .catch(error => console.log(error));      
  }, []);

  useEffect(() => {                                       //#### group the data by subscription using reduce method  
    const groupedData = data.reduce((acc, item) => {      //#### (how to loop with other props e.g activity_level, year_level, subject_matter, course???)
      if (!acc[item.subscription]) {
        acc[item.subscription] = [];
      }
      acc[item.subscription].push(item);
      return acc;
    }, {});
    setFilteredData(data);
    setSelectedSubscription(Object.fromEntries(Object.keys(groupedData).map(subscription => [subscription, false])));
  }, [data]);

  const handleCheckboxChange = (subscription) => {         //#### function to filter data based on selected checkbox
    console.log(subscription)
    const updatedSelectedSubscription = { ...selectedSubscription, [subscription]: !selectedSubscription[subscription] };
    setSelectedSubscription(updatedSelectedSubscription);
    const filtered = data.filter(item => updatedSelectedSubscription[item.subscription]);
    setFilteredData(filtered); 
  };

  useEffect(() => {                                       //#### fetch data from REST API using axios  
    axios.post('http://localhost:4000/api/selectRemainingCheckbox', {selectedActivity:selectedActivity.length? selectedActivity:["animation", "game", "chatbot", "augmented reality"]})
      .then(response => console.log(response.data))
      .catch(error => console.log(error));      
      
    }, [selectedActivity]);

  const handleCheckboxChangev2=(e)=>{
    console.log(e.target.id)
    // if array already has the checkbox we're selecting, remove it
    if (selectedActivity.includes(e.target.id)) {
      setSelectedActivity((prevState)=>{ return prevState.filter((selection)=>selection!==e.target.id)})
    }  else {
    // else add it
      setSelectedActivity((prevState)=>[...prevState,e.target.id])
    }
    console.log(selectedActivity)
  }

  const categories = Object.keys(selectedSubscription); 

  const checkboxGroupCategory = ['SUBSCRIPTION', 'ACTIVITY TYPE', 'YEAR LEVEL', 'SUBJECT MATTER'];   //array of group filters

  //#### handleClick functions for the buttons: (to be done)
  const handleBeginnerClick = () => {
    setFilteredBtn('beginner');
  };
  
const handleIntermediateClick = () => {
  setFilteredBtn('intermediate');
}

const handleAdvancedClick = () => {
  setFilteredBtn('advanced');
}

//#### filter data based on course button filter (it doesn't work!!!)
const filteredData1 = data.filter(obj => {
  if (filteredBtn && obj.course !== filteredBtn) {
    return false;
  }
  return true;
});

  // #### RENDER MAIN CONTENT
  return (
  
    <div className={styles.pageContainer}>                        
      <NavBarHomePageMain /> <br /> <br />
      <h1 style={{ marginLeft: "500px" }}>PROJECTS</h1>
       <p style={{ marginLeft: "500px" }}>
        Welcome to the project library. You can use the filters on the left to
         help you search for specific projects. </p>  

        
      {/* #### buttons to display project COURSE level --- Beginner / Advanced / Intermediate #### */}

       <span className={styles.btnGroup1}>
         
        <button className={styles.btnWidth1} onClick= {() => setFilteredBtn('Beginner')}>BEGINNER</button>
        <button className={styles.btnWidth1} onClick= {() => setFilteredBtn('Intermediate')}>INTERMEDIATE</button>
        <button className={styles.btnWidth1} onClick= {() => setFilteredBtn('Advanced')}>ADVANCED</button>
        
      </span>
      
      <span style={{ marginLeft: "400px" }}>SHOW</span>

       {/* buttons to display selected batch of projects */}
       <span style={{ marginLeft: "50px" }}>
        <button className={styles.btnWidth2} onClick={() => handleBeginnerClick('25')}>25</button>
        <button className={styles.btnWidth2} onClick={() => handleIntermediateClick('50')}>50</button>
        <button className={styles.btnWidth2} onClick={() => handleAdvancedClick('100')}>100</button>   
       </span>           
       
       <ul>{filteredData1.map(obj => (
        <li key={obj.proj_id}>{obj.name}</li>
       ))}
      </ul>
  
{/* #### RENDER ALL CHECKBOX FILTER #### */}
       <div className={styles.mainContents}>
        <div>
          <div className={styles.row}>
            <form>     
              <div className={styles.checkboxGroupContainer}>
                <h5 className={styles.formHeadContactH5}>{checkboxGroupCategory[0]}</h5>
                  <div>
                    {categories.map(subscription => (                 
                        <>
                          <input key={subscription}
                            type="checkbox"
                            checked={selectedSubscription[subscription]}
                            onChange={() => {handleCheckboxChange(subscription)}}
                          />                       
                          <label className={styles.formCheckLabel} htmlFor="flexCheckDefault" style={{fontSize: "14px"}}>{subscription}</label><br />
                        </> 
                    ))}
                  </div>
                <hr/><br/>
                <h5 className={styles.formHeadContactH5}>{checkboxGroupCategory[1]}</h5>
                  <div>
                    <input type="checkbox" id='animation' onChange={handleCheckboxChangev2} />
                      <label className={styles.formCheckLabel} htmlFor="animation" style={{fontSize: "14px"}}>Animation</label><br />
                    <input type="checkbox"  id='game' onChange={handleCheckboxChangev2} />    
                      <label className={styles.formCheckLabel} htmlFor="game" style={{fontSize: "14px"}}>Game</label><br />      
                    <input type="checkbox" id='chatbot' onChange={handleCheckboxChangev2} />     
                      <label className={styles.formCheckLabel} htmlFor="chatbot" style={{fontSize: "14px"}}>Chatbot</label><br />   
                    <input type="checkbox" id='augmentedReality' onChange={handleCheckboxChangev2} />  
                      <label className={styles.formCheckLabel} htmlFor="augmentedReality" style={{fontSize: "14px"}}>Augmented Reality</label><br />
                  </div>  
                  <hr/><br/>
                  <h5 className={styles.formHeadContactH5}>{checkboxGroupCategory[2]}</h5>
                  <div>
                    <input type="checkbox" id='1to4' onChange={handleCheckboxChangev2}/>
                      <label className={styles.formCheckLabel} htmlFor="1-4" style={{fontSize: "14px"}}>1 - 4</label><br />
                    <input type="checkbox" id='5to6' onChange={handleCheckboxChangev2} />
                      <label className={styles.formCheckLabel} htmlFor="5-6" style={{fontSize: "14px"}}>5 - 6</label><br />
                    <input type="checkbox" id='7to8' onChange={handleCheckboxChangev2} />   
                      <label className={styles.formCheckLabel} htmlFor="7-8" style={{fontSize: "14px"}}>7 - 8</label><br />    
                    <input type="checkbox" id='9to13' onChange={handleCheckboxChangev2}/> 
                      <label className={styles.formCheckLabel} htmlFor="9-13" style={{fontSize: "14px"}}>9 - 13</label><br /> 
                  </div>
                  <hr/><br/>
                  <h5 className={styles.formHeadContactH5}>{checkboxGroupCategory[3]}</h5>
                  <div>
                    <input type="checkbox" id='computerScience' onChange={handleCheckboxChangev2} />      
                      <label className={styles.formCheckLabel} htmlFor="computerScience" style={{fontSize: "14px"}}>Computer Science</label><br />
                    <input type="checkbox" id='maths' onChange={handleCheckboxChangev2} />      
                      <label className={styles.formCheckLabel} htmlFor="maths" style={{fontSize: "14px"}}>Maths</label><br />
                    <input type="checkbox" id='science' onChange={handleCheckboxChangev2} /> 
                      <label className={styles.formCheckLabel} htmlFor="science" style={{fontSize: "14px"}}>Science</label><br />
                    <input type="checkbox" id='language' onChange={handleCheckboxChangev2} /> 
                      <label className={styles.formCheckLabel} htmlFor="language" style={{fontSize: "14px"}}>Language</label><br />
                    <input type="checkbox" id='art' onChange={handleCheckboxChangev2} />
                      <label className={styles.formCheckLabel} htmlFor="art" style={{fontSize: "14px"}}>Art</label><br />
                    <input type="checkbox" id='music' onChange={handleCheckboxChangev2} />  
                      <label className={styles.formCheckLabel} htmlFor="music" style={{fontSize: "14px"}}>Music</label><br />
                  </div>
              </div>             
            </form>
          </div>
        </div>       

{/* #### RENDER FILTERED OBJECTS  #### */}
    
      <ul className={styles.cardsContainer}>
        {filteredData.map(item => (
          <div key={item.id} className={styles.card}>
            <img
              className={styles.avatar}
              src={item.project_pic}
              alt="project"
            />
            <br />
            <h4 style={{ textAlign: "center", margin: "10px 0 10px 0", fontWeight: "400" }} >{item.name}</h4>
            <h5 style={{ textAlign: "center" }}>{item.course} | {item.activity_type}</h5>
          </div>
        ))}
      </ul>
    </div>
    {/* button for top page scrolling */}

    <div className="studentBotButtons">
      <div className="studentBotButton">
        <Link to="/student-projects-library"          
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <ColorButtons
            buttonColor="#E5AB2C"
            buttonWidth="220px"
            buttonText="BACK TO TOP"
          ></ColorButtons>
        </Link>
      </div>

      {/* button to navigate to progress-tracker page) */}

      <div className="studentBotButton">
        <Link to="/progress-tracker">
          <ColorButtons
            buttonColor="#F91C85"
            buttonWidth="220px"
            buttonText="BACK TO DASHBOARD"
          ></ColorButtons>
        </Link>
      </div>
    </div>

    {/* Footer component */}

    <Footer />
    </div>    
  );
   
 }


