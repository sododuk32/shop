/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './Footer.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function Footer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      {' '}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>footer1</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>footer2</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>footer3</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>footer4</Item>
          </Grid>
        </Grid>
      </Box>{' '}
    </div>
  );
}

export default Footer;
