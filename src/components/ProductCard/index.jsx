import { Container, AddToCard, Stepper, ProductFavIcon} from "./styles"
import img from "../../assets/image-3.png"
import Button from "../button"
import {FiPlus, FiMinus, FiHeart, FiArrowUpRight}from"react-icons/fi"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

export default function ProductCard({FoodPicture,FoodTitle, Description, Price}){

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

    function handleFoodDetails(){
        navigate(`/FoodInfo`)
    }
    return(
        
        <Container>
            <ProductFavIcon 
            id="btnFavorite" 
            className={activeButton}

            onClick={HandleClick}
            >
                <FiHeart/>
            </ProductFavIcon>
            <img src={FoodPicture} alt={Description} />
            <h4>{FoodTitle}</h4>
            <p>{Description}</p>

            <span>
                R$ {Price == null ? '00,00' : Price }
            </span>
            <AddToCard>
                <div>
                <Stepper>
                    <Button
                    icon={FiMinus}
                    btn="transparent"
                    onClick={HandleCountRemove}
                    />
                    <span>{count}</span>
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
                    onClick={handleFoodDetails}
                    />
                </div>
            </AddToCard>

        </Container>
     
    )
}