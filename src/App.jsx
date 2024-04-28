import './App.css'
import {Link, Outlet} from 'react-router-dom';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";


export default function App() {

    return <div className="App" >

        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontWeight: 700,
                            letterSpacing: '2%',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >Dog Shop</Typography>
                    <nav>
                        <Link to={"/"}> Home </Link>
                        <Link to={"/products"}> Products </Link>
                        <Link to={"/about"}> About </Link>
                        <Link to={"/register"}> Register </Link>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
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