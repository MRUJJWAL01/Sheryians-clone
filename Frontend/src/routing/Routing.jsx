import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import Home from '../Pages/Home'

const Routing = () => {

  
  return (
    <>
    <Routes>
      <Route path='/signin' element={<LoginPage />} />
      <Route path='/' element={<Home />} />
    </Routes>
      
    </>
  )
}

export default Routing