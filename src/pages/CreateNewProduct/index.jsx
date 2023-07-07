import {Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/button"
import { FiChevronLeft, FiPlus} from "react-icons/fi"
import Section from "../../components/Section";

import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import { TagItem } from "../../components/TagItem";
import CategoryOptions from "../../components/Category Options";
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export default function CreateNewProduct(){

  
    const [data, setData] = useState([])
    const [tags, setTags] = useState([])
     
    
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const navigate = useNavigate ()
    const params = useParams()
    useEffect(() =>{
       
          console.log({
            title,
            imageFile,
            category,
             price,
             tags,
             description, 
          })  

     }, [title])
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }
    function handleBack(){

        navigate ("/")
    }

    function handleChangeImage(e) {
        const file = e.target.files[0]
        setImageFile(file)
    
       
    }

    const [categories, setCategories] = useState([])

     
     useEffect(() =>{

        async function fetchCategories(){  
            const {data} = await api.get("/categories/")
            setCategories(data.categories)  
        }
        fetchCategories()
        
        async function fetchDishes(){  
            const response = await api.get(`/products/${params.id}`)
            setData(response.data) 
          
        }
        fetchDishes()

     }, [])

     useEffect(() => {
      
        setImageFile(data && data.Image)
        setTitle(data && data.title)
        setDescription(data && data.description)
        setPrice(data && data.price)
        setCategory(data && data.category)

        
     },[data])
    console.log(tags)
     async function handleUpdate(){
        
        const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("price", price);
     }

    async function handleNewProduct(){
        
        if(!title){
            return toast("digite o nome do produto")
        }
        if(newTag){
            return toast("Você deixou uma tag sem adicionar no campo!")
        }
        if(newTag){
            return toast("Você deixou uma tag sem adicionar no campo!")
        }

        const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("price", price);

        tags.map((tag) =>{
                
            return formData.append("tags", tag)
                
        })
      
        await api
        .post("/products", formData)
        .then(toast("Salvo com Sucesso !"))
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
            <Header/>
            <Content>
                
                <ContainerContent>
                <Button
                        title="voltar"
                        btn="transparent"
                        icon={FiChevronLeft}
                        onClick = {handleBack}
                        />

                    <Section
                    title="Adicionar prato"
                    >   
                    <form onSubmit={e => {
                        e.preventDefault();
                        }}>
                        <fieldset>
                        <Input
                        title="Imagem do prato"
                        className ="product-img"
                        onChange={handleChangeImage}
                        //onChange={e => setImageFile(e.target.value)}
                        isUploadButton
                        value={imageFile ? imageFile.name : ''}
                        />
                         <Input
                        
                        title="Nome"
                        type="text"
                        placeholder = "Ex.:Salada Ceasar"
                        className ="product-name"
                        onChange = {e => setTitle(e.target.value)}
                        value={title}
                        />
                        
                        <CategoryOptions
                        
                        title="Categoria"
                        className ="product-category"
                        value={category}
                        readOnly
                        >
                               { 

                                categories.map(({id, category_name}) =>(
                                <span 
                                key={String(id)} 
                                onClick={() => setCategory(category_name)}   
                                > 
                                {category_name}
                                </span>
                                ))

                                }
                             
                        </CategoryOptions>
                      
                        </fieldset>
                            
                        <fieldset >
                        <div className="Tags product-tags">
                        Ingredientes
                        <div>
                            <TagItem
                            isNew
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                            />
                            {
                                tags.map((tag, index) =>(
                                   
                                    <TagItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                            
                                ))
                            }
                            
                        </div>
                        </div>
                        <Input
                      
                        title="Preço"
                        type="text"
                        id="product-price"
                        placeholder="00,00"
                        onl
                        className = "product-price"
                        onChange ={e => setPrice(e.target.value)}
                        value={price ? price : ''}
                        price
                        />
                        </fieldset>
                        <fieldset >

                        <Input
                        TextArea
                        title="Descrição"
                        type="text"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        className="product-description"
                        onChange ={e => setDescription(e.target.value)}
                        value={description}
                        />

                        </fieldset>
                        <Button
                        title="Salvar alterações"
                        btn="secondary"
                        onClick = {handleNewProduct}
                        />  
                    </form>
                    
                        </Section>   
                    
                        
                </ContainerContent>
                <Footer/>
                
            </Content>
            <ToastContainer/>
        </Container>

    )
}