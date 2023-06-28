import { AddToCard, Container, Content, Stepper, FoodContent, ContentTags} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/button"
import {FiPlus, FiMinus, FiChevronLeft} from "react-icons/fi"
import { useState } from "react"
import Section from "../../components/Section";
import img from "../../assets/Mask-group-1.png"
import Tags from "../../components/Tags";

export default function FoodInfo(){
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)

    let value = 25.97
    
    Number(value).toFixed(4).replace(".",",")
    
    function HandleCountAdd(){
        
        setCount(count + 1)
        
        setPrice(price + parseFloat(value).toFixed(2).replace(".",","))
    }
    function HandleCountRemove(){
        setPrice(price -  Number(value))
        count == 0 ? 0 : setCount(count - 1)
    }
    return(
        <Container>
            <Header/>
            <Content>
                <ContainerContent>
                        <Button
                        title="voltar"
                        btn="transparent"
                        icon={FiChevronLeft}
                        />
                

                    <FoodContent>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                        <Section
                    title="Salada Ravanello"
                    >
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <ContentTags>
                            <Tags
                            title="Food"
                            />
                             <Tags
                            title="cebola"
                            />
                             <Tags
                            title="pão naan"
                            />
                             <Tags
                            title="pepino"
                            />
                             <Tags
                            title="rabanete"
                            />
                             <Tags
                            title="tomate"
                            />
                        </ContentTags>
                        </Section>
                        <Section>
                        <AddToCard>
                                <div>
                                    
                                <Stepper>
                                    <Button
                                    icon={FiMinus}
                                    btn="transparent"
                                    onClick={HandleCountRemove}
                                    />
                                    <span>{count}</span>
                                    <Button
                                    icon={FiPlus}
                                    btn="transparent"
                                    onClick={HandleCountAdd}
                                    />
                                </Stepper>
                                </div>
                                <div>
                                    <Button
                                    title={`incluir • R$ ${price}`}
                                    btn="primary"
                                    />
                                </div>
                            </AddToCard>
                        </Section>
                       
                        </div>
                    </FoodContent>
                   
                </ContainerContent>
                <Footer/>
                
            </Content>
            
        </Container>

    )
}