import './App.css'
import {Link, Outlet} from 'react-router-dom';
// import {AppBar, Toolbar, Typography} from '@mui/material';


export default function App() {

    return <div className="App">
        <nav>
            <Link to={"/"}> Home </Link>
            <Link to={"/products"}> Products </Link>
            <Link to={"/about"}> About </Link>
            <Link to={"/login"}> Login </Link>
        </nav>
        <Outlet />
    </div>
}

/*
function App() {

    return (
        <div className="App">
            <AppBar position="static" color=''>
                <Toolbar>
                    <Typography variant="h6">
                        Dog Shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <ProductList/>
        </div>
    )
}
*/