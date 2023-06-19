
 import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './HomeMain.css'

import laptop1 from '../../../src-assets/Home/laptop1.png'
import animation from '../../../src-assets/Home/animation.png'
import augreality from '../../../src-assets/Home/augreality.png'
import chatbots from '../../../src-assets/Home/chatbots.png'
import games from '../../../src-assets/Home/games.png'
import styles from './TestPage.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment >
      <Grid item xs={6} className={styles.section_2}>
      <div className={styles.textLsideS2}>
         <h2>What we offer</h2>
         <br></br>
            <p>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand’s leading IT industry experts and schools. </p>
      </div>
      </Grid>
      <Grid item xs={6}>
        <Item>
            <img src={laptop1} style={{ height:"100%", width:"auto"}} alt=""/> 
 {/* ???????????? not in the center ??????????? */}
 <section  className={styles.laptop1BtnGroup}> 
  <button className={styles.round} ></button>
  <button className={styles.round}></button>
  <button className={styles.round}></button>
  <button className={styles.round}></button>
  </section>
     </Item>
      </Grid>
      
    </React.Fragment>
  );
}

export default function  TestPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid spacing={1} container item xs={12}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        
      </Grid>
    </Box>
  );
}