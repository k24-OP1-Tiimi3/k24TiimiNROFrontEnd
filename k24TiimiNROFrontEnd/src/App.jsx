import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import { AppBar, Toolbar, Typography} from '@mui/material';


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
      <ProductList />
    </div>
  )
}

export default App
