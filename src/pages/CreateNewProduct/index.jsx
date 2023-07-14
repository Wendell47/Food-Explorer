import {Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/button"
import { FiChevronLeft} from "react-icons/fi"
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

  
    const [tags, setTags] = useState([])
     
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [newTag, setNewTag] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [editingDish, setEditingDish] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const navigate = useNavigate ()
    const params = useParams()

    
    function handleAddTag(){    
        setTags(prevState => [ newTag,...prevState])
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
            

            const {Image,title,description,price,category,tags}= response.data

            setImageFile(Image)
            setTitle(title)
            setDescription(description)
            setPrice(price)
            setCategory(category)
            setTags(tags.map(item => item.name));
            setEditingDish(response.data.id)
          

        }
        fetchDishes()

     }, [editingDish, params.id])

    
    
     async function handleRemoveDish() {
        const isConfirm = confirm("Tem certeza que deseja remover?");
    
        if(isConfirm) {
          await api.delete(`/products/${params.id}`);
          toast("Prato apagado com sucesso")
          navigate("/");
        }
      }

    async function handleUpdate(){
        
        const newData = 
    {
         title,
         description,
         category,
         price,
         tags
    }
      /*  tags.map((tag) =>{
            return formData.append("tags", tag)
        })*/
      
       await api.put(`/products/${params.id}`, newData)

            .then(toast("Alterações salvas com Sucesso !"))
            .catch((error) => {
              if (error.response) {
                alert(error.response.data.message);
              } else {
                toast("Erro ao editar Prato");
              }
            });
            
            if(imageFile && imageFile.name){
                const formDataImage = new FormData()
                formDataImage.append("image", imageFile)
        
                await api
                .patch(`/products/${params.id}`, formDataImage)
               }
               
               console.log(imageFile)
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
    //const imageURL = imageFile ?? `${api.defaults.baseURL}/files/${imageFile}`
    
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
                        value={imageFile && imageFile.name || imageFile}
                        >
                    

                        </Input>
                        
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
                                    animation="show"
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
                        <div>
                        {
                            editingDish &&
                             <Button
                             title="Excluir Prato"
                             btn="btnDark"
                             onClick = {handleRemoveDish}
                             />  
                        }
                        <Button
                        title={editingDish ? "Salvar alterações" : "Salvar Prato"}
                        btn="secondary"
                        onClick = {editingDish ?  handleUpdate : handleNewProduct}
                       //onClick ={handleNewProduct}
                        />  
                        </div>
                    </form>
                    
                        </Section>   
                    
                        
                </ContainerContent>
                <Footer/>
                
            </Content>
            <ToastContainer/>
        </Container>

    )
}