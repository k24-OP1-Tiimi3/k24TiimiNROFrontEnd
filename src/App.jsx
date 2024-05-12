import './App.css'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Register from "./components/Register.jsx";
import ProductList from "./components/ProductList.jsx";
import DeleteRegister from './components/DeleteRegister.jsx';
import {useState} from "react";
import Box from "@mui/material/Box";


export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home/>;
            case 'ProductList':
                return <ProductList/>;
            case 'About':
                return <About/>;
            case 'Register':
                return <Register/>;
            case 'DeleteRegister':
                return <DeleteRegister/>;
            default:
                return <Home/>;
        }
    }

    return (
        <div>
            <AppBar position='static' style={{backgroundColor: 'orange'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        style={{
                            marginRight: '2%',
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '2%',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => setCurrentPage('Home')}
                    >
                        Dog Shop
                    </Typography>
                    <Button color="inherit" onClick={() => setCurrentPage('ProductList')}>Product List</Button>
                    <Button color="inherit" onClick={() => setCurrentPage('About')}>About</Button>
                    <Box sx={{flexGrow: 1}}/>
                    <Button color="inherit" onClick={() => setCurrentPage('Register')}>Register</Button>
                    <Button color="inherit" onClick={() => setCurrentPage('DeleteRegister')}>Delete Registration</Button>
                </Toolbar>
            </AppBar>
            {renderPage()}
        </div>
    );
}