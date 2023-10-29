import { Route } from "react-router"
import { Routes } from "react-router-dom"
import {Input} from './pages/Input/index'
import {Output} from './pages/Output/index'
import {Home} from './pages/Home/index'

export function Router(){
    return(
        <Routes>
        <Route path="/">
            <Route path="/home" element={<Home/>}/>
            <Route path="/input/:id" element={<Input/>}/>
            <Route path="/output/:id" element={<Output/>}/>
        </Route>
    </Routes> 
    )
}