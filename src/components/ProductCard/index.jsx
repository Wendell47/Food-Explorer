/* eslint-disable react/prop-types */
import { Container, AddToCard, Stepper, ProductFavIcon} from "./styles"
import Button from "../button"
import { FiPlus, FiMinus, FiHeart, FiArrowUpRight, FiEdit}from"react-icons/fi"
import { FiAlertCircle} from "react-icons/fi"
import { toast} from "react-toastify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth} from "../../hooks/auth"
import { api } from "../../services/api"
import imgPlaceHolder  from "../../assets/PlaceHolderDish.svg"


export default function ProductCard({favorited, data, imageURL}){
    const {user} = useAuth()

    const authAdmin = user && user.isAdmin
    const navigate = useNavigate ()
    const [count, setCount] = useState(0)
  
        const dishId = favorited.map(dish =>{

            if(dish.product_id === data.id){
                return dish.id
            }
         
})


    
    async function HandleClick(){
        
        if(dishId <= 1){
            await api.post(`/favoriteDishes/${data.id}`)
            .then(toast("Prato adicionado como favorito"))
            .catch((error) => {
                if (error.response) {
                  alert(error.response.data.message);
                } else {
                  alert("Erro ao editar Prato");
                }
              });
        }
        else{
            const isConfirm = confirm(`tirar como favorito ?`)

            if(isConfirm){
                await api.delete(`/favoriteDishes/${dishId}`)
                .then(toast("você tirou o prato como favorito"))
             }
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
    
    async function handleAddItensToCart(){
        if(!count){
            return toast(` insira uma quantidade para adicionar ao carinho`, {
                icon: FiAlertCircle
            })
        }
        const cartItem = {
            title: data.title,
            quantity: count,
            price: data.price,
            product_id: data.id
        }
        await api.post("/cart", cartItem)
        .then(toast.success("Adicionado com Sucesso !"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            toast("Erro ao cadastrar Prato");
          }
        });

    }
    return(
        
        <Container>
           
           
            <ProductFavIcon>
           {
            authAdmin ?
            <div
            id="btnEdit" 
            onClick={() => handleEditDish(data.id)}
           >
           <FiEdit />
           </div>
           :''
           }
            <div
            id="btnFavorite" 
            onClick={() => HandleClick(data.id)}
            >
            <FiHeart className={dishId.length >= 1 ? "active" : ''}/>
            </div>

            </ProductFavIcon>
            
           
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
                onClick={handleAddItensToCart}
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