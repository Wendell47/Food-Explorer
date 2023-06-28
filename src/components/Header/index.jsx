import { Container, Content, ButtonExit, Badge} from "./styles";
import ContainerContent from "../ContainerContent";
import Logo from "../Logo";
import Input from "../Input";
import {FiSearch, FiLogOut, FiMenu} from "react-icons/fi"
import Button from "../button";
import {PiReceipt} from "react-icons/pi"
import MenuMobile from "../menuMobile";
import { useState } from "react";

export default function Header(){

    const [MenuMobileOn, setMenuMobileOn] = useState(false)

    
    function handleMenuMobile(){
        if (!MenuMobileOn ){
            setMenuMobileOn(true)
            return
        }
        else if(MenuMobileOn){
            setMenuMobileOn(false)
            return
        }
    }


    return(
        <Container>
            <ContainerContent>

                <Content>
                <Button
                    icon={FiMenu}
                    btn="transparent"
                    onClick = {handleMenuMobile}
                    />
                    <MenuMobile 
                    className={MenuMobileOn ? "" : "hide"}
                    hide={handleMenuMobile}
                    />
                <Logo/>
                <Input
                
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"
                />
                <Button
                title={window.screen.width <= 900 ? "" : "Pedidos"}
                icon={PiReceipt}
                btn={window.screen.width <= 900 ? "transparent" : "primary"}
                >
                 <Badge className="bagdeFloat">
                    <span>
                        2
                    </span>
                    </Badge> 
                </Button>
                <Button
                icon={FiLogOut}
                btn="transparent"
                />
                 
                </Content>
            </ContainerContent>
        </Container>
    )
}
