import { Container, Content, FavCard, ContentFav } from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/image-3.png"


export default function FavoriteDishes(){
    const navigate = useNavigate ()
const [products, setProducts] = useState([])
const [favoriteDishes, setFavoriteDishes] = useState([])
const [search, setSearch] = useState("")
const [image, setImage] = useState([])
const params = useParams()


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



console.log(favoriteDishes)
async function handleRemoveFavorite(id){
    const isConfirm = confirm("Tem certeza que deseja remover?")

    if(isConfirm) {
    
    await api.delete(`/favoriteDishes/${id}`)

}
}

function handleDishDetails(id){

    navigate(`/FoodInfo/${id}`)
}                    


    return(
        <Container>
            <Header 
         
            onChange ={e => setSearch(e.target.value)}/>
            <Content
            
            >
                <ContainerContent>
               
                <Section
                title="Meus Favoritos"
                >
                     <ContentFav>
                   

                    {
                        favoriteDishes.map(favDish =>{
                            const filteredDishes = products.filter(dish => dish.id === favDish.product_id)
                            

                          
                            let imageURL 
                            
                            filteredDishes.map(dish =>(
                                
                                 imageURL = `${api.defaults.baseURL}/files/${dish.Image}`


                                ))
                                
                                
                            return(
                            <FavCard
                            key={String(favDish.id)}
                            
                            >
                            <img src={imageURL} alt="" 
                            onClick={() => handleDishDetails(favDish.product_id)}
                            />
    
                            <div>
                                <h4>
                                    {favDish.fav_dish_name}
                                </h4>
                                <span
                                onClick={() => handleRemoveFavorite(favDish.id)}
                                >
                                    Remover dos favoritos
                                </span>
                            </div>
                        </FavCard>
                        )}
                        )
                    }
                    </ContentFav>
                </Section>
              
                
                </ContainerContent>
                <Footer/>
                
            </Content>
            
        </Container>

    )
}