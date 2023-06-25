import { Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <ContainerContent>
                <Banner/>
                </ContainerContent>
            </Content>
        </Container>

    )
}