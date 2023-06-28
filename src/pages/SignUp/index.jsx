import ContainerContent from "../../components/ContainerContent";
import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import{FiUser, FiMail, FiKey}from "react-icons/fi"

export default function SignUp(){

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
                 />
                 <Input 
                 title="Email"
                 icon={FiMail}
                 placeholder="Exemplo: exemplo@exemplo.com.br"
                 />
                 <Input 
                 title="Senha"
                 icon={FiKey}
                 type="password"
                 placeholder="No mínimo 6 caracteres"
                 />
                 <Button title="Entrar" btn="primary"/>
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