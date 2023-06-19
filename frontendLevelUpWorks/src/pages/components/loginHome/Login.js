import React from 'react'
import './Login.css'
import LoginTemplate from './LoginTemplate'
import teachersPic from '../../../src-assets/LoginSignup/teachers.png'
import studentsPic from '../../../src-assets/LoginSignup/students.png'
import StudentLogSign from './StudentLogSign'
import TeacherLogSign from './TeacherLogSign'

const Login = () => {
  return (
    <div className='login-page'>
    <div className='popup-container'>
     <div className='popup'>
      <section className='student' >
     <StudentLogSign title="Students" pic={studentsPic} />
  </section> 
    <section className='teacher' >
    <TeacherLogSign title="Teachers" pic={teachersPic}/>
    </section>
    </div>
    </div>
    </div>


  )
}

export default Login