import React, {useEffect} from 'react';
import {Button, Stack, TextField} from "@mui/material";

export default function Register() {

    useEffect(() => fetchUsers(), []);

    const [user, setUser] = React.useState({username: "", password: "", role: "USER"});

    const fetchUsers = () => {
        fetch('http://localhost:8080/api/appusers')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    };

    const handleInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const registerUser = (user) => {
        fetch('http://localhost:8080/api/appusers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return (<>
        <h2>Register:</h2>
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
            <Button onClick={() => registerUser(user)}>Register</Button>
        </Stack>
    </>);
}