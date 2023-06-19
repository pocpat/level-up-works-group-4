import './App.css';

import { Routes, Route } from 'react-router-dom';
import ProgressTracker from './pages/ProgressTracker/ProgressTracker';
import HelpReqPage from './pages/HelpReqPage/HelpReqPage';
import HomeMain from './pages/components/homePage/HomeMain';
import TeacherProfPage from './pages/TeacherProfPage/TeacherProfPage';
import StudentProfilePage from './pages/StudentProfileViewer/StudentProfilePage';
import StudentProjectsLibraryPage from './pages/StudentProjectsLibraryPage/StudentProjectsLibraryPage';
import Login from './pages/components/loginHome/Login';
import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import ModalLogin from './pages/components/homePage/ModalLogin/ModalLogin';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/modalLogin' element={<ModalLogin />} />
        <Route path='/progress-tracker' element={<ProgressTracker />} />
        <Route path='/help-requests' element={<HelpReqPage />} />
        <Route
          path='/student-profile-viewer'
          element={<StudentProfilePage />}
        />
        <Route path='/teacher-profile-viewer' element={<TeacherProfPage />} />
        <Route
          path='/student-projects-library'
          element={<StudentProjectsLibraryPage />}
        />
        <Route path='/student-profiles' element={<StudentProfiles />} />
      </Routes>
    </div>
  );
}

export default App;
