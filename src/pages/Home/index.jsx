import { Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MySwiper from "../../components/Swiper";
import Section from "../../components/Section";

export default function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <ContainerContent>
                <Banner/>
                    <Section
                    title="Refeições"
                    >
                        <MySwiper/>
                    </Section>
                    <Section
                    title="Sobremesas"
                    >
                        <MySwiper/>
                    </Section>
                </ContainerContent>
            </Content>
        </Container>

    )
}