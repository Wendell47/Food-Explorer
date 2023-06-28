import { Container, MobileHeader} from "./styles";
import Input from "../Input";
import { FiSearch, FiX  } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import Button from "../button";
import ContainerContent from "../ContainerContent";

export default function MenuMobile({ hide,...rest }){



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
                ></Button>

            </ContainerContent>
        </Container>
    )
}