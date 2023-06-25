import { Container, AddToCard, Stepper, ProductFavIcon} from "./styles"
import img from "../../assets/image-3.png"
import Button from "../button"
import {FiPlus, FiMinus, FiHeart}from"react-icons/fi"
import { useState } from "react"

export default function ProductCard({FoodPicture,FoodTitle, Description, Price}){
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
                </div>
            </AddToCard>

        </Container>
    )
}