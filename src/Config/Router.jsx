import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Navbar from '../Components/Navbar'
import PageNotFound from '../Pages/PageNotFound'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='/' element={<Navbar><Home /></Navbar>} />
                    <Route path='/signup' element={<Navbar><Signup /></Navbar>} />
                    <Route path='/login' element={<Navbar><Login /></Navbar>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
