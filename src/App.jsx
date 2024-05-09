import './App.css'
import {Link, Outlet} from 'react-router-dom';
import {AppBar, CssBaseline, Toolbar, Typography} from "@mui/material";


export default function App() {
    return <div>
        <AppBar position='static' style={{backgroundColor: 'orange'}}>
            <CssBaseline/>
            <Toolbar>
                <Typography variant="h6" style={{
                    marginRight: '2%',
                    display: 'flex',
                    fontWeight: 700,
                    letterSpacing: '2%',
                    color: 'inherit',
                    textDecoration: 'none'
                }}>
                    Dog Shop
                </Typography>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/products"> Products </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/register"> Register </Link>
                    <Link to="/deleteRegister"> Delete Registration </Link>
                </nav>
            </Toolbar>
        </AppBar>
        <Outlet/>
    </div>
}