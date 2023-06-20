import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Register from './Pages/Register'
import PortfolioDetails from './Pages/PortfolioDetails'
import PortfolioEditDetails from './Pages/PortfolioEditDetails'
import PortfolioMain from './Pages/PortfolioMain'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/portfoliodetails' element={<PortfolioDetails/>}/>
      <Route path='/portfolioeditdetails' element={<PortfolioEditDetails/>}/>
      <Route path='/portfoliomain' element={<PortfolioMain/>}/>
    </Routes>
  )
}

export default AllRoutes