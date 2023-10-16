import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import { LandingPage } from '../LandingPage/LandingPage';
export const RouterPage: React.FC = () => {
    const [role,setRole]=useState('')
    const [data,setData]:any=useState()
    const setRoleLogin=(role:string,dataLogin:any)=>
    {
        setRole(role)
        setData(dataLogin)
    }
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<LoginPage role={setRoleLogin}/>}></Route>
            <Route path='/landingPage'element={<LandingPage role={role} data={data}/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}