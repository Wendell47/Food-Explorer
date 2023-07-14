import { Container, Content, Badge} from "./styles";
import ContainerContent from "../ContainerContent";
import Logo from "../Logo";
import Input from "../Input";
import {FiSearch, FiLogOut, FiMenu, FiArrowLeft} from "react-icons/fi"
import Button from "../button";
import {PiReceipt} from "react-icons/pi"
import {LuSalad} from "react-icons/lu"
import MenuMobile from "../menuMobile";
import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

// eslint-disable-next-line react/prop-types
export default function Header({onChange}){

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
    function handleFavoriteDishes(){
        navigate('/FavoriteDishes')
    }
    function handleCart(){
        navigate("/Pedidos")
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
                    >
                         <Input
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        />

                        <Button
                        title="Meus Favoritos"
                        btn="transparent"
                        onClick={handleFavoriteDishes}
                        />

                        <Button
                        title="Histórico de pedidos"
                        btn="transparent"
                        onClick={handleFavoriteDishes}
                        />
                    {
                        user && user.isAdmin ?

                        <Button
                        
                        title="Novo Prato"
                        icon={LuSalad}
                        btn="transparent"
                        onClick={handleCreateProduct}
                        />
                        :
                        ''
             
                    }
                    <Button
                        title="Sair"
                        icon={FiArrowLeft}
                        btn="transparent"
                        onClick ={signOut}
                        ></Button>


                    </MenuMobile>
                <Logo isAdmin={authAdmin}/>
                <Input
                
                icon={FiSearch}
                type="search"
                placeholder="Busque por pratos ou ingredientes"
                onChange = {onChange}
                />

                <Button
                title="Meus Favoritos"
                btn="transparent"
                onClick={handleFavoriteDishes}
                
                />
                {
                    authAdmin ? 
                    <Button
                
                title="Novo Prato"
                btn="transparent"
                id="newPlate"
                onClick={handleCreateProduct}
                >
               
                </Button>
                : ''
                }
                    <Button
                
                title={window.screen.width <= 900 ? "" : "Pedidos"}
                icon={PiReceipt}
                btn={window.screen.width <= 900 ? "transparent" : "primary"}
                onClick={handleCart}
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
                onClick={signOut}
                />
                 
                </Content>
            </ContainerContent>
        </Container>
    )
}
