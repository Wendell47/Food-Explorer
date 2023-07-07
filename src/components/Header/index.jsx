import { Container, Content, ButtonExit, Badge} from "./styles";
import ContainerContent from "../ContainerContent";
import Logo from "../Logo";
import Input from "../Input";
import {FiSearch, FiLogOut, FiMenu} from "react-icons/fi"
import Button from "../button";
import {PiReceipt, PiArrowBendUpLeft} from "react-icons/pi"
import MenuMobile from "../menuMobile";
import { useState,  } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export default function Header({isAdmin, onChange}){

    const {user, signOut} = useAuth()

    const authAdmin = user && user.isAdmin

    const navigate = useNavigate()
    const [MenuMobileOn, setMenuMobileOn] = useState(false)
    document.getElementsByClassName
    
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
    function handleCreateProduct(){
        navigate('/CreateNewProduct')
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
                <Logo isAdmin={authAdmin}/>
                <Input
                
                icon={FiSearch}
                type="search"
                placeholder="Busque por pratos ou ingredientes"
                onChange = {onChange}
                />
                {
                    user && authAdmin ? 
                    <Button
                
                title={window.screen.width <= 900 ? "" : "Novo Prato"}
                btn={window.screen.width <= 900 ? "transparent" : "primary"}
                onClick={handleCreateProduct}
                >
               
                </Button>
                    :
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
                }
                <Button
                icon={FiLogOut}
                btn="transparent"
                onClick={signOut}
                />
                 
                </Content>
            </ContainerContent>
        </Container>
    )
}
