/* eslint-disable react/prop-types */
import { Container, AddToCard, Stepper, ProductFavIcon} from "./styles"
import Button from "../button"
import {FiPlus, FiMinus, FiHeart, FiArrowUpRight, FiEdit}from"react-icons/fi"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import imgPlaceHolder  from "../../assets/PlaceHolderDish.svg"
export default function ProductCard({ data, imageURL,...rest}){
    const {user} = useAuth()
    const navigate = useNavigate ()
    const [count, setCount] = useState(0)
    const [activeButton, setActiveButton] = useState("")

    function HandleClick(){
        
        if(activeButton == "active"){
            setActiveButton("")
        }
        else{
            setActiveButton("active")
        }
            
    }
    
    function HandleCountAdd(){
        
        setCount(count + 1)
    }
    function HandleCountRemove(){
        count == 0 ? 0 : setCount(count - 1)
    }

    function handleEditDish(id){
        navigate(`/editDish/${id}`)
    }

    function handleDishDetails(id){

        navigate(`/FoodInfo/${id}`)
    }

    return(
        
        <Container>
           {
            user.isAdmin ?
            <ProductFavIcon 
            id="btnEdit" 
            onClick={() => handleEditDish(data.id)}
            >
            <FiEdit className={activeButton}/>
            </ProductFavIcon>
            
            :

            <ProductFavIcon 
            id="btnFavorite" 
            onClick={HandleClick}
            >
            <FiHeart className={activeButton}/>
            </ProductFavIcon>

           }

            <img 
            src={data.Image ? imageURL : imgPlaceHolder} 
            alt={data.image && data.description} 
            />
            <h4>{data.title}</h4>
            <div className="description">
                <p>{data.description}</p>
            </div>

            <span>
                R$ {data.price == null ? '00,00' : Number(data.price).toFixed(2).replace(".",",") }
            </span>
            {
            user.isAdmin ?

            <Button
            btn="primary"
            title="Ver Produto"
            onClick={() => handleDishDetails(data.id)}
            />
            :

            <AddToCard>
            <div>
            <Stepper id="CountValue">

                <Button
                icon={FiMinus}
                btn="transparent"
                onClick={HandleCountRemove}
                />

                <input value={count} readOnly/>
                <Button
                icon={FiPlus}
                btn="transparent"
                onClick={HandleCountAdd}
                />

            </Stepper>
            </div>
            <div>

                <Button
                title="incluir"
                btn="primary"
                />

                <Button
                title=""
                btn="btnDark"
                icon={FiArrowUpRight}
                onClick={() => handleDishDetails(data.id)}
                />

            </div>
            </AddToCard>
            }

        </Container>
     
    )
}