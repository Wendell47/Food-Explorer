import ContainerContent from "../../components/ContainerContent";
import { Container, Content } from "./styles";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/button";

export default function SignIn(){

    return(
        <Container>

            <ContainerContent>
                <Content>
                <div><Logo/></div>
              
                <div>
              <h1>Faça Login</h1>
                 
                 <form>
                 <Input 
                 title="Email" 
                 placeholder="Exemplo: exemplo@exemplo.com.br"
                 />
                 <Input 
                 title="Senha" 
                 type="password"
                 placeholder="No mínimo 6 caracteres"
                 />
                 <Button title="Entrar" btn="primary"/>
                 <Button title="Criar uma conta" btn="transparent"/>
                 </form>
                </div>
                
                </Content>
            </ContainerContent>
        </Container>
    )
}