/* eslint-disable react/prop-types */
import { Container, MobileHeader} from "./styles";
import Input from "../Input";
import { FiSearch, FiX  } from "react-icons/fi";

import Button from "../button";
import ContainerContent from "../ContainerContent";

import { useAuth } from "../../hooks/auth";

export default function MenuMobile({ hide,...rest }){
    const {signOut} = useAuth()


    return(
        <Container {...rest}>
            <MobileHeader>
                <ContainerContent>
                    <Button
                    title="Menu"
                    icon={FiX}
                    onClick = {hide}
                    btn="transparent"
                    />
                </ContainerContent>
            </MobileHeader>
            <ContainerContent>
            <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            <Button
                title="Sair"
                btn="transparent"
                onClick ={signOut}
                ></Button>

            </ContainerContent>
        </Container>
    )
}