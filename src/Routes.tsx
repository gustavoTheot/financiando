import { Route } from "react-router";
import { Routes } from "react-router-dom";
import {Controle} from './pages/Controle/index'
import {Home} from './pages/Home/index'

export function Router(){
    return(
        <Routes>
        <Route path="/">
            <Route path="/home" element={<Home/>}/>
            <Route path="/controle" element={<Controle/>}/>
        </Route>
    </Routes> 
    )
}