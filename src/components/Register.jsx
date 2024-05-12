import React, {useState} from 'react';
import {Button, Snackbar, Stack, TextField} from "@mui/material";

export default function Register() {
    const [user, setUser] = React.useState({username: "", password: "", role: "USER"});
    const [snackbar, setSnackbar] = useState({open: false, msg: ""});


    const handleInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const validateInput = () => {
        if (user.username === "" || user.password === "") {
            setSnackbar({open: true, msg: "Username and password cannot be empty"});
            return false;
        }
        if (user.password.length < 5) {
            setSnackbar({open: true, msg: "Password must be at least 5 characters long"});
            return false;
        }
        return true;
    };


    const handleRegisterClick = () => {
        if (validateInput()) {
            registerUser(user);
        }
    };

    const registerUser = async (user) => {
        // TODO: VAIHDA URL RAHDIN URLIIN!!! -- DONE
        try {
            const response = await fetch('http://k24tiimi3backend-tiimi3.rahtiapp.fi/api/appusers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(user)
            });
            if (response.ok) {
                setSnackbar({open: true, msg: "User registered successfully!"});
                setUser({username: "", password: "", role: "USER"});
            } else {
                setSnackbar({open: true, msg: "Failed to register user"});
            }
        } catch (error) {
            setSnackbar({open: true, msg: `Failed to register user, error: ${error}`});
        }
    };

    return <>
        <h2 style={{textAlign: 'center', marginTop: '20px'}}>Register:</h2>
        <br/>
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
            <TextField
                name="username"
                value={user.username}
                autoFocus
                label="Username"
                onChange={handleInputChange}
            />
            <TextField
                name="password"
                value={user.password}
                label="Password"
                type="password"
                onChange={handleInputChange}
            />
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Button onClick={handleRegisterClick}>Register</Button>
        </Stack>
        <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => setSnackbar({open: false, msg: ""})}
            message={snackbar.msg}
        />
    </>;
}