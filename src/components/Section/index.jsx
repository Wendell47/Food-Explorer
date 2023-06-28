import { Container } from "./styles";

export default function Section({title, children}){

    return(
        <Container className="container">
            <h3>{title}</h3>
            {children}
        </Container>
    )
}