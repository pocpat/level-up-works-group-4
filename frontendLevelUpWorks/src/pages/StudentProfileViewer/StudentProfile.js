// MAIN SECTION OF STUDENT PROFILE VIEWER PAGE
import './StudentProfile.css';
import ButtonHero from '../../common/ButtonHero.js';
import ColorButtons from '../../common/ColorButtons/ColorButtons';
import { Link } from 'react-router-dom';

export default function StudentProfile() {
  return (
    <div>
      <main className='studentProfMainBody'>
        <div className='studentProfMainFlex'>
          {/* student Profile Image Section */}
          <div className='studentImgCard'>
            <img
              src='public-images/students/RawiriFletcher.png'
              alt='student profile'
              className='studentPic'
            ></img>
            <div className='studentButtons'>
              <ButtonHero
                backgroundColor='#fff'
                border='#43c0f6'
                color='#43c0f6'
                text='EDIT PROFILE'
              ></ButtonHero>
              <ButtonHero
                backgroundColor='#fff'
                border='#43c0f6'
                color='#43c0f6'
                text='CHANGE PHOTO'
              ></ButtonHero>
             
            </div>
          </div>
          {/* student Profile Information Section */}
          <div className='studentInfoCard'>
            <h1 className='studentInfoTitle'>Rawiri Fletcher</h1>
            <div className='studentInfoContainerFlex'>
              <div className='studentInfoFlex studentLight'>
                <p>School</p>
                <p>Teacher</p>
                <p>Course</p>
                <p>Date of Birth</p>
                <p>Contact No</p>
                <p>Email Address</p>
              </div>
              <div className='studentInfoFlex studentGrey'>
                <p>Homai School</p>
                <p>Jasmina Salvador</p>
                <p>Beginner</p>
                <p>25 June 2010</p>
                <p>022 524 63 09</p>
                <p>fletchy.r@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* student Profile bottom buttonsSection */}
        <div className='studentBotButtons'>
          
          <div className='studentBotButton'>
            <Link to='/progress-tracker'>
              <ColorButtons
                buttonColor='#f91c85'
                buttonWidth='220px'
                buttonText='BACK TO PROJECTS'
              ></ColorButtons>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
