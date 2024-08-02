import React from 'react'
import Nav from './components/Nav'
import "./resource/global.css"
 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import ViewProduct from './components/ViewProduct'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'

const App = () => {
  return (
    <div>
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewproduct' element={<ViewProduct/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/updateproduct/:id' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App