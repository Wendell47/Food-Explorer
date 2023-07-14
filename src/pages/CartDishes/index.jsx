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
const [favoriteDishes, setFavoriteDishes] = useState([])
const [search, setSearch] = useState("")
const [image, setImage] = useState([])
const params = useParams()
const [showPix, setShowPix] = useState("")
const [showCreditCard, setShowCreditCard] = useState("hide")


useEffect(()=>{
    
    async function fetchProducts(){

        const response = await api.get(`/products?title=${search}&tags=${search}`)
        setProducts(response.data)
    }
    fetchProducts()
    
},[search])


useEffect(()=>{

    async function fetchFavoriteDishes(){
        const {data} = await api.get(`/favoriteDishes`)
        setFavoriteDishes(data)
    }
    fetchFavoriteDishes()

    
},[favoriteDishes])




async function handleRemoveFavorite(id){
    const isConfirm = confirm("Tem certeza que deseja remover?")

    if(isConfirm) {
    
    await api.delete(`/favoriteDishes/${id}`)

}
}

function handleDishDetails(id){

    navigate(`/FoodInfo/${id}`)
}                    

function handlePaymentMethod(){

    setShowPix("hide")
    setShowCreditCard("")
}
function handlePixMethod(){

    setShowCreditCard("hide")
    setShowPix("")
}

    return(
        <Container>
            <Header 
         
            onChange ={e => setSearch(e.target.value)}/>
            <Content
            
            >
                <ContainerContent>
               
               <div>
               <Section
                title="Meu Pedido"
                >
                    <ContentCart>
                        <ListCard>
                            <img src={img} alt="" />
                            <div>
                                <h4>1 x salada Radish <span>R$ 25,97</span></h4>
                                <span>Excluir</span>
                            </div>
                        </ListCard>
                        <ListCard>
                            <img src={img} alt="" />
                            <div>
                                <h4>title</h4>
                                <span>Excluir</span>
                            </div>
                        </ListCard>
                        <ListCard>
                            <img src={img} alt="" />
                            <div>
                                <h4>title</h4>
                                <span>Excluir</span>
                            </div>
                        </ListCard>
                    </ContentCart>
                   <p>Total: R$ 40,00</p>
                </Section>

                <Section
                title="Pagamento"
                >
   <ContentCart>
                       <Payment>
                       
                       <Button
                        btn="transparent"
                        title="Pix"
                        icon={MdPix}
                        onClick ={handlePixMethod}
                        />

                         <Button
                        btn="transparent"
                        title="Credit"
                        icon={AiFillCreditCard}
                        onClick ={handlePaymentMethod}
                        />
                     
                        <PaymentContent>
                        <div className={showPix}>
                        <img src={pixImage} alt=""/>
                        </div>
                        <div className={showCreditCard}>
                            <CreditCard
                            
                            />
                        </div>
                        </PaymentContent>
                       </Payment>
                    </ContentCart>  
                </Section>
               </div>
              
                
                </ContainerContent>
                <Footer/>
                
            </Content>
            
        </Container>

    )
}