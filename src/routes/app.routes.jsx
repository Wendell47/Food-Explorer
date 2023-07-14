import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import FoodInfo from '../pages/FoodInfo'
import FavoriteDishes from '../pages/FavoritesDishes'
import CartDishes from '../pages/CartDishes'
export default function AppRoutes(){
    return(
      
    
        <Routes>
            
            <Route path='/' element={<Home/>}/> 
            <Route path="/foodInfo/:id" element={<FoodInfo/>}/> 
            <Route path="/FavoriteDishes" element={<FavoriteDishes/>}/> 
            <Route path="/Pedidos" element={<CartDishes/>}/> 
             
        </Routes>
       
    )
}