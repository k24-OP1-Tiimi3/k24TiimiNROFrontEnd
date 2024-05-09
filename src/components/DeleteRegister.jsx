import {useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";

export default function DeleteRegister() {
    const [userId, setUserId] = useState("");
    const [deleted, setDeleted] = useState(false);

    const handleInputChange = (event) => {
        setUserId(event.target.value);
    };

    const deleteUser = () => {
        fetch(`http://localhost:8080/api/appusers/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    setDeleted(true);
                } else {
                    console.error("Failed to delete user");
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <h2>Delete Registration:</h2>
            <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    value={userId}
                    autoFocus
                    label="User ID"
                    onChange={handleInputChange}
                />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <Button onClick={deleteUser}>Delete</Button>
            </Stack>
            {deleted && <p>User deleted successfully</p>}
        </>
    );
}
