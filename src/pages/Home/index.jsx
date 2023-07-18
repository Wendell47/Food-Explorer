import { Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import MySwiper from "../../components/Swiper";
import Section from "../../components/Section";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/ProductCard";
import ContainerDishesNull from "../../components/ContainerDishesNull";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import imagePlaceholder from "../../assets/image-3.png"
import { ToastContainer } from "react-toastify";
export default function Home(){

const [products, setProducts] = useState([])
//const [tags, setTags] = useState([])
const [categories, setCategories] = useState([])
const [search, setSearch] = useState([])
const [favoriteDishes, setFavoriteDishes] = useState([]) 

useEffect(() =>{
    async function fetchFavoriteDishes(){

        const {data} = await api.get("/favoriteDishes")
        
        setFavoriteDishes(data)
        
     }
     fetchFavoriteDishes()
},[favoriteDishes])

useEffect(()=>{
    
    async function fetchProducts(){

        const response = await api.get(`/products?title=${search}&tags=`)
        setProducts(response.data)
    }
    fetchProducts()
    
},[search])

useEffect(() =>{
    async function fetchCategories(){
        const {data} = await api.get("/categories/")
        setCategories(data.categories)   
    }

fetchCategories()
}, [])

//console.log(products)
//console.log(categories)

    return(
        <>

        <Container>
            <Header onChange ={e => setSearch(e.target.value)}/>
            <Content>
                <ContainerContent>
                <Banner/>
                  
                 {

                    categories.map(category =>{
                        const filteredDishes = products.filter(dish => dish.category === category.category_name)


                        let centeredDishesCard = false

                        if(filteredDishes.length <= 3){
                             
                            centeredDishesCard = true

                
                        }
                        
                       return (

                           (search && filteredDishes == 0) ?  
                           
                            "":""
                           | 
                           
                           filteredDishes == 0 ?
                            
                            <Section
                            key={String(category.id)}
                            title={category.category_name}
                            >
                                <ContainerDishesNull/>

                            </Section>
                            
                            :

                            <Section
                        key={String(category.id)}
                        title={category.category_name}
                        >
                        <MySwiper
                        minCards={centeredDishesCard}
                        >

                        {
                         
                        filteredDishes.map(product =>{
                           

                            const imageURL = product.Image
                            ? `${api.defaults.baseURL}/files/${product.Image}`
                            : imagePlaceholder

                            const idFavorite = favoriteDishes.filter(fav => fav.product_id === product.id)
                          

                           return(( 
                           <SwiperSlide 
                           key={String(product.id)}
                           >
                            <ProductCard
                            data={product}
                            imageURL= {imageURL}
                            favorited={idFavorite}
                            />
                            </SwiperSlide>
                            ))}
                            )
                        }   
                        </MySwiper> 
                        </Section>
                      
                       )
                      
                    })
                   }
                  
                </ContainerContent>

                <Footer/>
            </Content>
            
        </Container>

        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </>
    )
}