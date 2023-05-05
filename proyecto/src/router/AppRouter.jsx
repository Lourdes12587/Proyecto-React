import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login1 } from '../Componentes/pages/Login/Login1'
import { Register } from '../Componentes/pages/Login/Login1'
import { Inicio } from '../Componentes/pages/Login/Login1'

export const AppRouter = () => {
  return ( 
    <div>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Login1' element={<Login1/>}/>
            <Route path='/Register' element={<Register/>}/>
        </Routes>
      
    </div>
  )
}

