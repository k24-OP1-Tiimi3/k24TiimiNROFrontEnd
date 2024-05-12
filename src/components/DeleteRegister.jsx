import {useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";

export default function DeleteRegister() {
    const [userId, setUserId] = useState("");
    const [deleted, setDeleted] = useState(false);

    const handleInputChange = (event) => {
        setUserId(event.target.value);
    };

    const handleDelete = async (userId) => {
        try{
            const response = await fetch(`http://localhost:8080/api/appusers/${userId}`, {
                method: 'DELETE'
            })
            if (response.ok) {
                setDeleted(true);
            } else {
                console.error("Failed to delete user");
            }
        } catch (error) {
            console.error("Failed to delete user, error: ", error);
        }

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
                <Button onClick={() => handleDelete(userId)}>Delete</Button>
            </Stack>
            {deleted && <p>User deleted successfully</p>}
        </>
    );
}
