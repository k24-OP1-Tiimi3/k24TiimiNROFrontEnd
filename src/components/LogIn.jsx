import {useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    // ToDo: Proper Login and Register functionality
    const handleRequest = async (url, e) => {
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST', headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });
            if (response.ok) {
                console.log('Request successful');
            } else {
                setError('Request failed');
                console.error('Request failed');
            }
        } catch (error) {
            console.error('Error during request:', error);
            setError('Error during request');
        }
    };

    return (<>
        <h2>Login or Register:</h2>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
            <TextField
                autoFocus
                label="Email"
                onChange={handleEmailChange}
            />
            <TextField
                label="Password"
                onChange={handlePasswordChange}
            />
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Button onClick={(e) => handleRequest('http://localhost:8080/api/login', e)}>Log In</Button>
            <Button onClick={(e) => handleRequest('http://localhost:8080/api/register', e)}>Register</Button>
        </Stack>
    </>);
}
/*
return (
    <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} required/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} required/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
);
}
 */
