import './DashboardNav.css';
import { Link } from 'react-router-dom';
import levelUpworksBlue from '../../src-assets/NavBar/LevelUpWorks-blue.png';
import MaoriFlag from '../../src-assets/NavBar/MaoriFlag.png';
import NZFlag from '../../src-assets/NavBar/NZFlag.png';
import ColorButtons from '../ColorButtons/ColorButtons';

export default function DashboardNav() {
  return (
    <div>
      <nav className='teachDashNav'>
        <div className='flexContainerDashNav'>
          <Link to='/'>
            <img
              src={levelUpworksBlue}
              alt='level up works logo blue'
              className='levelUpWorksBlue'
            ></img>
          </Link>
          <div className='dashButtonContainer helpReqPageFlex'>
            <button className='dashNavButton yellowButton'>
              Take Screenshot
            </button>
            <button className='dashNavButton pinkButton'>Help Centre</button>
            <Link to='/' className='dashNavButton'>
              {/* Added ColorButtons component which can be used through the site */}
              <ColorButtons
                buttonWidth='200px'
                buttonColor='var(--primaryMain)'
                buttonText='More Projects'
              ></ColorButtons>
            </Link>
            <div className='dashFlagsContainer helpReqPageFlex'>
              <img src={NZFlag} alt='NZ Flag' className='dashFlags'></img>
              <img src={MaoriFlag} alt='Maori Flag' className='dashFlags'></img>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
