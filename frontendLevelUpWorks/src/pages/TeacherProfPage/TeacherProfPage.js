// COMPLETE TEACHER PROFILE VIEWER PAGE
import TeacherProfMain from './TeacherProfMain';
import ResponsiveAppBar from '../../common/navBar_HomePage/ResponsiveAppBar';
import Footer from '../../common/Footer/Footer';
export default function TeacherProfPage() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <TeacherProfMain></TeacherProfMain>
      <Footer></Footer>
    </div>
  );
}
