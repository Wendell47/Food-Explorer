import { Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import MySwiper from "../../components/Swiper";
import Section from "../../components/Section";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/ProductCard";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../assets/image-3.png"

export default function Home(){

const [products, setProducts] = useState([])
const [tags, setTags] = useState([])
const [categories, setCategories] = useState([])
const [search, setSearch] = useState("")

const navigate = useNavigate()



useEffect(() =>{
    
    async function fetchTags(){

        const response = await api.get("/tags")

        setTags(response.data)

       
    }
    fetchTags()
    
},[])


useEffect(()=>{
    
    async function fetchProducts(){

        const {data} = await api.get(`/products?title=${search}&tags=${search}`)
        setProducts(data)
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


console.log(categories)

    return(
        <Container>
            <Header 
         
            onChange ={e => setSearch(e.target.value)}/>
            <Content>
                <ContainerContent>
                <Banner/>
                  
                 {

                    categories.map(category =>(

                        <Section
                        key={String(category.id)}
                        title={category.category_name}
                        >
                             <MySwiper>

                        {
                           
                            
                           products.map(product =>{
                            const imageURL = product.Image
                            ? `${api.defaults.baseURL}/files/${product.Image}`
                            : imagePlaceholder

                           return(( 
                           <SwiperSlide key={String(product.id)}>
                        
                            <ProductCard
                            data={product}
                            imageURL= {imageURL}
                            onClick={() => handleFoodInfo(product.id)}
                            />
                            </SwiperSlide>
                            ))}
                            )
                            
                            
                        }   
                        </MySwiper> 
                        </Section>
                      
                    ))
                   }
                </ContainerContent>

                <Footer/>
            </Content>
            
        </Container>

    )
}