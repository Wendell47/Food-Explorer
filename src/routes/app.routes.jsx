import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import FoodInfo from '../pages/FoodInfo'


export default function AppRoutes(){
    return(
      
    
        <Routes>
            
            <Route path='/' element={<Home/>}/> 
            <Route path="/foodInfo/:id" element={<FoodInfo/>}/> 
             
        </Routes>
       
    )
}