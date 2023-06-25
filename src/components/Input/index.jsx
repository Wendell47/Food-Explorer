import { Container } from "./styles";

export default function Input({title,...rest}){
return(

    <Container>
      <label htmlFor="">{title}</label>
      <input {...rest}/>  
    </Container>
)
}