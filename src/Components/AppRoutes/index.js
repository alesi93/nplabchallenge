import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Index";
import Home from "../../Pages/Home/";
import Painel from "../../Pages/Painel/";


function AppRoutes () {
    return (
   
        <Routes>
            <Route path="/" element={<Painel/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          
            
            
            </Routes>
       
        );
}
export default AppRoutes;