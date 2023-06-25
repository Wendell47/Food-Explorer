import { Container, AddToCard, Stepper} from "./styles"
import img from "../../assets/image-3.png"
import Button from "../button"
import {FiPlus, FiMinus  }from"react-icons/fi"

export default function ProductCard(){
    return(
        <Container>
            <img src={img} alt="" />
            <h4>Spagueti Gambe</h4>
            <p>Massa fresca com camarões e presto.</p>

            <span>
                R$ 79,97
            </span>
            <AddToCard>
                <div>
                <Stepper>
                    <Button
                    icon={FiMinus}
                    btn="transparent"
                    />
                    <span>01</span>
                    <Button
                    icon={FiPlus}
                    btn="transparent"
                    />
                </Stepper>
                </div>
                <div>
                    <Button
                    title="incluir"
                    btn="primary"
                    />
                </div>
            </AddToCard>

        </Container>
    )
}