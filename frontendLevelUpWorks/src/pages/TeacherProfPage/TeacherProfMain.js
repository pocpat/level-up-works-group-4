// MAIN SECTION OF TEACHER PROFILE VIEWER PAGE
import './TeacherProfMain.css';
import ButtonHero from '../../common/ButtonHero.js';
import ColorButtons from '../../common/ColorButtons/ColorButtons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TeacherProfMain() {
  const [getTeacher, setGetTeacher] = useState([]);

  // axios fetch teacher data from api
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/teacher-prof-viewer')
      .then((res) => setGetTeacher(res.data));
  }, []);
  return (
    <div>
      <main className='teachProfMainBody'>
        <div className='teachProfMainFlex'>
          {/* Teacher Profile Image Section */}
          <div className='teachImgCard'>
            {getTeacher && //if data = true then display...
              getTeacher.map((teacher) => (
                <div key={teacher.teacher_id}>
                  <img
                    src={teacher.profile_pic}
                    alt='Teacher profile'
                    className='teachPic'
                  ></img>
                </div>
              ))}
            <div className='teachButtons'>
              {/* Button components */}
              <ButtonHero
                backgroundColor='#fff'
                border='#43c0f6'
                color='#43c0f6'
                text='EDIT PROFILE'
                width='175px'
              ></ButtonHero>
              <ButtonHero
                backgroundColor='#fff'
                border='#43c0f6'
                color='#43c0f6'
                text='CHANGE PHOTO'
                width='175px'
              ></ButtonHero>
              <ButtonHero
                backgroundColor='#fff'
                border='#43c0f6'
                color='#43c0f6'
                text='SETTINGS'
                width='175px'
              ></ButtonHero>
            </div>
          </div>
          {/* Teacher Profile Information Section */}
          <div className='teachInfoCard'>
            {getTeacher &&
              getTeacher.map((teacher) => (
                <div key={teacher.teacher_id}>
                  <h1 className='teachInfoTitle'>{teacher.name}</h1>
                </div>
              ))}
            {/* <h1 className='teachInfoTitle'>Jasmina Salvador</h1> */}
            <div className='teachInfoContainerFlex'>
              <div className='teachInfoFlex teachLight'>
                <p>School</p>
                <p>Courses Purchased</p>
                <p>Date of Birth</p>
                <p>Contact No</p>
                <p>Email Address</p>
              </div>
              <div className='teachInfoFlex teachGrey'>
                {getTeacher &&
                  getTeacher.map((teacher) => (
                    <div key={teacher.teacher_id}>
                      <p>{teacher.school}</p>
                      <p>Beginner</p>
                      <p>{teacher.date_of_birth}</p>
                      <p>{teacher.contact_number}</p>
                      <p>{teacher.email}</p>
                    </div>
                  ))}
                {/* <p>Homai School</p>
                <p>Beginner</p>
                <p>25 June 1986</p>
                <p>027 754 28 00</p>
                <p>jsalvador@homai.edu</p> */}
              </div>
            </div>
          </div>
        </div>
        {/* Teacher Profile bottom buttonsSection */}
        <div className='teachBotButtons'>
          <div className='teachBotButton'>
            <Link to='/'>
              <ColorButtons
                buttonColor='#e5ab2c'
                buttonWidth='200px'
                buttonText='BACK TO PROJECTS'
              ></ColorButtons>
            </Link>
          </div>
          <div className='teachBotButton'>
            <Link to='/progress-tracker'>
              <ColorButtons
                buttonColor='#f91c85'
                buttonWidth='220px'
                buttonText='BACK TO DASHBOARD'
              ></ColorButtons>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
