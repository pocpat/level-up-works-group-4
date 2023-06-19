

 import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './HomeMain.css'
import heroImg from '../../../src-assets/Home/hero.png'
import ButtonHero from '../../../common/ButtonHero.js'
import styles from "./HomeSection1.module.css";

import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 })); 

export default function  HomeSection1({ handleShow }) {
    const theme = useTheme();
    const isMidScreen = useMediaQuery(theme.breakpoints.down('lg'));
 
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundImage: `url(${heroImg})` }}>
      <Grid container spacing={2} >
     
      <Grid item md={isMidScreen ? 12 : 6} >
          <Item sx={{bgcolor:"transparent", boxShadow:"none", mx:" 20%", textAlign:"left"}}>
          
      <article >
      <h1> Prepare young minds for a better <span style={{color: "#43c0f6", fontWeight: 'bold'}}>future.</span>
         </h1>
        <p>
        Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.
        </p>
        <br>
        </br>
    <section className={styles.homeS1btns}>
        <ButtonHero  
        backgroundColor="white"
        border="#43c0f6"
        color="#606060"
        text="LERN MORE"/>

        <ButtonHero  
        backgroundColor="#F91C85"
        border="#F91C85"
        color="#EFEFEF"
        text="SIGN UP"
        id="open-modal-login"
        onClick={handleShow}/>
         
         
         <section className={styles.star}>
        <p >*Basic subscription includes the first 15 projects free of charge.</p>
        </section>
        </section>
        </article>
      

          </Item>
        </Grid>
        <Grid item md={isMidScreen ? 1 : 6}>
          <Item sx={{bgcolor:"transparent", boxShadow:"none"}}></Item>
        </Grid>
       
        
      </Grid>
    </Box>
  );
}