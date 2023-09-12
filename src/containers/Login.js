import React, { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
import { Box, Link, Grid, Typography, Container, Checkbox, Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { DefaultInstance } from "../utils/DefaultInstance";

export const Login = (Props) => {
    const [username,setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        DefaultInstance.post('users/login',{"username":username,
        "password":pass})
        .then( response =>{
            //This happens after a successful response
            console.log("worked")
        }

        ).catch(
            //This happens if unsuccessful or error
            console.log("failed")
        )
    }

    
    // const dispatch = useDispatch()
    // const data = useSelector(state =>state.reducerName.property)

    return(
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                required
                fullWidth
                id ="username"
                name="username"
                label="Username"
                defaultValue="Username"
                autoFocus
                margin="normal"
                value={username}
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                />
                <TextField
                required
                fullWidth
                id ="password"
                name="password"
                label="Password"
                defaultValue="********"
                margin="normal"
                value={pass}
                onChange={(e)=>{
                    setPass(e.target.value)
                }}
                />

                <Button
                type="submit"
                variant="contained">
                    Sign In
                </Button>

            </Box>
        </Container>
    )
}
