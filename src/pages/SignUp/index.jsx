import { useState } from "react";
import {api} from "../../services/api"
import ContainerContent from "../../components/ContainerContent";
import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import{FiUser, FiMail, FiKey}from "react-icons/fi"

export default function SignUp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    function handleSignUp(){
        event.preventDefault()
        if(!name || !email || !password){
            return alert("Preencha todos os campos !")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Cadastro realizado com sucesso !")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("não foi possível cadastrar")
            }
        })

        console.log(name,email, password)
    }
    return(
        <Container>

            <ContainerContent>
                <Content>
                <div>
                    <Logo
                    isAnimated={true}
                    />
                </div>
              
                <div>
              <h1>Crie Sua Conta</h1>
                 
                 <form>
                 <Input 
                 title="Seu nome"
                 icon={FiUser}
                 placeholder="Exemplo: Maria da Silva"
                 onChange = {e => setName(e.target.value)}
                 />
                 <Input 
                 title="Email"
                 icon={FiMail}
                 placeholder="Exemplo: exemplo@exemplo.com.br"
                 onChange = {e => setEmail(e.target.value)}
                 />
                 <Input 
                 title="Senha"
                 icon={FiKey}
                 type="password"
                 placeholder="No mínimo 6 caracteres"
                 onChange = {e => setPassword(e.target.value)}
                 />
                 <Button title="Cadastrar" 
                 btn="primary"
                 onClick = {handleSignUp}
                 />
                 <Link to="/">
                 <Button title="Já tenho conta" btn="transparent"/>
                 </Link>
                 </form>
                </div>
                
                </Content>
            </ContainerContent>
        </Container>
    )
}