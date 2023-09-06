import React from 'react';
import { Navbar } from './Navbar'
import { Paper } from '@mui/material';
export const GeneralPaper = (props) =>{

    return(
    <Paper elevation={3}>
        <Navbar/>
        {props.children}
    </Paper>
    )
}