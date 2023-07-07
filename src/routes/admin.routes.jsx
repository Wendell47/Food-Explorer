import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import FoodInfo from '../pages/FoodInfo'
import CreateNewProduct from '../pages/CreateNewProduct'

export default function AdminRoutes(){
    return(
        <>
    
        <Routes>
            
            <Route path='/' element={<Home/>}/> 
            <Route path='/FoodInfo/:id' element={<FoodInfo/>}/> 
            <Route path='/CreateNewProduct' element={<CreateNewProduct/>}/> 
            <Route path='/editDish/:id' element={<CreateNewProduct/>}/> 
          
        </Routes>
        </>
    )
}