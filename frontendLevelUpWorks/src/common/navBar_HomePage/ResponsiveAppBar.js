import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import LogoImgWhite from '../../src-assets/NavBar/LevelUpWorks-white.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import FlagNZ from '../../src-assets/NavBar/NZFlag.png' ;
import FlagM from '../../src-assets/NavBar/MaoriFlag.png'; 
import './ResponsiveAppBar.css' ;
import MenuIcon from '@mui/icons-material/Menu';



// let theme = createTheme();
// theme = responsiveFontSizes(theme);




const pages = ['HOME', 'FEATURES', 'TEACHERS'];

function ResponsiveAppBar({handleShow}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedLang, setSelectedLang] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLangSelect = (lang) => {
    // Handle language selection
    setSelectedLang(lang);
    
  };
// //  two functions for the button signup/login : 
//   function handleButtonClickResponsiveBar() {
//   handleOpenUserMenu();
//     handleShow();
//   } 



  return (
    <AppBar position="static" sx={{ backgroundColor: '#43C0F6' }} >
      <Container maxWidth="xl" className="appBarAll">
        <Toolbar  disableGutters className='toolbar' >
      
          <img src={LogoImgWhite} alt="" width="150px%"/>
 
 {/* {/*  ================== HOME  FEATURES TEACHERS   big==========================/} */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "center" } }}>
            {pages.map((page) => (
             <Button
             key={page}
             onClick={handleCloseNavMenu}
             sx={{
               mt: 2,
               mx: 7,
               color: 'white',
               display: 'block',
               fontSize: "1.1rem",
               backgroundColor: '#43C0F6',
               '&:hover': {
                 backgroundColor: '#0099cc'
               }
             }}
           
             variant="contained"
             color="primary"
             disableElevation
           >
                {page}
              </Button>
            ))}
          </Box>
{/* {/*  =======================================================================/} */}



          <Box sx={{ display: "flex", flexGrow: 0 , flexDirection: "column", justifyContent: "flexEnd", my:0}}>
       
       
  {/* {/*  ================== LANG  + flags   big==========================/} */}      
        
          <Box sx={{ display: {  xs: 'none',  md: "none", lg: 'flex', flexDirection: "row", my:0}} } >
            <Button 
            sx={{ml:6, backgroundColor: '#43C0F6',  
            '&:hover': {
              backgroundColor: '#0099cc'
            } }} 
            variant="contained" color="primary" 
            disableElevation>
              LANG
            </Button>

            <div className='flagsNavBar'>
            <img  src={FlagNZ} alt="" width="45px" height="25px" onClick={() => handleLangSelect('en')}
                  style={{ opacity: selectedLang === 'en' ? 1 : 0.5 }}/>
            <img src={FlagM} alt="" width="45px" height="25px"  onClick={() => handleLangSelect('es')}
                   style={{ opacity: selectedLang === 'es' ? 1 : 0.5 }}/>
            </div>
            </Box>
          {/* {/*  =========== REGISTER | LOGIN button big===============/} */}         
            <Button className='loginNavBar'
            startIcon={<AccountCircleIcon/>} 
            sx={{
             display: { xs: 'none',  md: "none", lg: 'flex'},
              backgroundColor: '#43C0F6', 
            '&:hover': {
              backgroundColor: '#0099cc'
            } }} 
            variant="contained" 
            onClick={handleShow}

            disableElevation>REGISTER | LOGIN</Button>
         

{/* {/*  =======================================================================/} */}


</Box> 


{/* {/*  ================== hamburger ICON   small===============/} */} 

          <IconButton
            sx={{ display: { xs:'flex', md:"flex", lg:"none", justifyContent:'flex-end' } }}
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            mr={20}
          >
            <MenuIcon />
          </IconButton>


{/* {/*  ================== hamburger menu  small===============/} */}  
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ mt:1, textAlign: "center", justifyContent: "center", }}
            
          >
 {/* {/*  =========== REGISTER | LOGIN button small===============/} */}            
<Box>
  <Button 
  startIcon={<AccountCircleIcon/>}  
  variant="contained"  
  sx={{ backgroundColor: '#43C0F6', 
            '&:hover': {
              backgroundColor: '#0099cc'
            } }} 
//  onClick={handleOpenUserMenu}
 onClick={handleShow}
//  onClick={handleButtonClickResponsiveBar}
 >
  REGISTER | LOGIN
  </Button>  
</Box>

 {/* {/*  ================== HOME  FEATURES TEACHERS   small=======/} */} 
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                {page}
              </MenuItem>
           
            ))}
 {/* {/*  ================== flags  small==========================/} */}           
<Box sx={{ flexWrap: "wrap",flexGrow: 0, mx:1 , justifyContent: "center"}}>
            <img src={FlagNZ} alt="" width="50px" height="auto"  />
            <img src={FlagM} alt="" width="47px" height="auto"   /> 
</Box>     

         </Menu>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;