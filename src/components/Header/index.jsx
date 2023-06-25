import { Container, Content, ButtonExit} from "./styles";
import ContainerContent from "../ContainerContent";
import Logo from "../Logo";
import Input from "../Input";
import {FiSearch, FiLogOut} from "react-icons/fi"
import Button from "../button";
import {PiReceipt} from "react-icons/pi"
export default function Header(){
    return(
        <Container>
            <ContainerContent>
                <Content>
                <Logo/>
                <Input
                
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"
                />
                <Button
                title="Pedidos"
                icon={PiReceipt}
                btn="primary"
                />
                <ButtonExit>
                    <FiLogOut/>
                </ButtonExit>
                </Content>
            </ContainerContent>
        </Container>
    )
}
