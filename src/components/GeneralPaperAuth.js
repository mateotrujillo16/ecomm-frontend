import React from 'react';
import { Navbar } from './Navbar'
import { Paper } from '@mui/material';

export const GeneralPaperAuth = (props) =>{

    
    <Paper elevation={3}>
        <Navbar/>
        {props.children}
    </Paper>
    

}