import { Container } from "./styles";
import Img from "../../assets/pngegg-1.png";
export default function Banner(){
    return(
        <Container>
         <div>
            <img src={Img} alt="" />
            </div>
            <div>
                <h3>Sabores igualáveis</h3>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>  
        </Container>
    )
}