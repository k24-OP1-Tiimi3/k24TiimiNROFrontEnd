import {useEffect, useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => fetchUsers(), []);


    // Temporary function to fetch users from the API
    const fetchUsers = () => {
        fetch('http://localhost:8080/api/appusers')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }


    // ToDo: Figure out the COSR issue ASAP!
    const registerUser = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/appusers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password, role: 'USER'}), // Always set role to 'USER'
            });

            if (!response.ok) {
                const data = await response.json();
                console.error('Error:', data);
                setError('Error registering user!');
            } else {
                console.log('User registered');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (<>
        <h2>Login or Register:</h2>
        {error && <p>{error}</p>}
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
            <TextField
                autoFocus
                label="Username"
                onChange={handleUsernameChange}
            />
            <TextField
                label="Password"
                type="password"
                onChange={handlePasswordChange}
            />
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Button onClick={registerUser}>Register</Button>
        </Stack>
    </>);
}