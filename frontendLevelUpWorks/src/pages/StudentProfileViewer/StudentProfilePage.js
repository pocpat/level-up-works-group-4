// COMPLETE STUDENT PROFILE VIEWER PAGE
import StudentProfile from './StudentProfile';
import Footer from '../../common/Footer/Footer';
import NavBarHomePageMain from '../../common/navBar_HomePage/NavBarHomePageMain';

export default function StudentProfilePage() {
  return (
    <div>
      <NavBarHomePageMain />
      <StudentProfile />
      <Footer />
    </div>
  );
}
