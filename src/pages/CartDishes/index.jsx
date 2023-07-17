import { Container, Content, ListCard, ContentCart, Payment, PaymentContent  } from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/image-3.png"
import pixImage from "../../assets/pixImage.svg"
import Button from "../../components/button";

import {MdPix} from "react-icons/md"
import {AiFillCreditCard} from "react-icons/ai"
import CreditCard from "../../components/CreditCard";

export default function CartDishes(){
    const navigate = useNavigate ()
const [products, setProducts] = useState([])
const [cartItem, setCartItems] = useState([])
const [search, setSearch] = useState("")
const [update,setUpdated] = useState(0)
const [showPix, setShowPix] = useState(true)
const [showCreditCard, setShowCreditCard] = useState(false)
//const [total, setTotal] = useState(0)

useEffect(()=>{
    
    async function fetchProducts(){

        const response = await api.get(`/products?title=${search}&tags=${search}`)
        setProducts(response.data)
    }
    fetchProducts()
    
},[search])

useEffect(() => {
    async function fetchCartItems(){
        const {data} = await api.get("/cart")
        setCartItems(data)
    }
    fetchCartItems()
},[update])

console.log(update)

async function handleRemoveItem(id){
  
    await api.delete(`/cart/${id}`)
    
    setUpdated(cartItem)
}

function handleDishDetails(id){

    navigate(`/FoodInfo/${id}`)
}                    

function handlePaymentMethod(){

    setShowPix(false)
    setShowCreditCard(true)
}
function handlePixMethod(){

    setShowCreditCard(false)
    setShowPix(true)
}
let sum 
let total = 0
    return(
        <Container>
            <Header 
            item={cartItem}
            onChange ={e => setSearch(e.target.value)}/>
            <Content
            
            >
                <ContainerContent>
               
               <div className="flexContainer">
               <Section
                title="Meu Pedido"
                >
                    <ContentCart>
                       {
                        cartItem ? cartItem.map(cartItem =>{

                            const filteredDishes = products.filter(dish => dish.id === cartItem.product_id)
                            let imageURL 

                            filteredDishes.map(dish =>(
                                
                                imageURL = `${api.defaults.baseURL}/files/${dish.Image}`


                               ))
                                sum =  Number(cartItem.price) 
                                total = sum + total

                                    
                            return(
                            <ListCard
                            key={cartItem.id}
                            >
                            <img src={imageURL} alt="" 
                            
                            onClick={() => handleDishDetails(cartItem.product_id)}
                            />
                            <div>
                                <h4>{cartItem.quantity} x {cartItem.title} <span>R$ {Number(cartItem.price).toFixed(2).replace(".", ",")}</span></h4>
                                <span
                                onClick={() => handleRemoveItem(cartItem.id)}
                                >Excluir</span>
                            </div>
                        </ListCard>
                        )}
                        )
                        :
                        <p>Não tem pratos adicionados nos pedidos ainda!</p>
                       }
                      
                    </ContentCart>
                   <p>R$ {Number(total).toFixed(2).replace(".", ",")}</p>
                </Section>

                <Section
                title="Pagamento"
                >
  
                       <Payment>
                       
                       <Button
                        btn="transparent"
                        title="Pix"
                        className={showPix ? 'active' : ''}
                        icon={MdPix}
                        onClick ={handlePixMethod}
                        />

                         <Button
                        btn="transparent"
                        title="Credit"
                        className={showCreditCard ? 'active' : ''}
                        icon={AiFillCreditCard}
                        onClick ={handlePaymentMethod}
                        />
                     
                        <PaymentContent>
                        <div className={showPix ? '': "hide"}>
                        <img src={pixImage} alt=""/>
                        </div>
                        <div 
                        className={showCreditCard ? '':"hide"}>
                        <CreditCard/>
                        </div>
                        </PaymentContent>
                       </Payment>
                 
                </Section>
               </div>
              
                
                </ContainerContent>
                <Footer/>
                
            </Content>
            
        </Container>

    )
}