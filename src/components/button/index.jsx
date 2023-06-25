/* eslint-disable react/prop-types */
import { Container } from "./styles";

export default function Button({title, btn,...rest}){

 if(btn == "primary"){
    btn = 'btnPrimary'
 }
 else if (btn == 'secondary'){
    btn = "btnSecondary"
 }
 else if (btn == 'dark'){
    btn = "btnDark"
 }
 else if (btn == 'transparent'){
    btn = "btnTransparent"
 }
    return(

        <Container
        
        className={btn}

        {...rest}
        >
            {title}
        </Container>
    )
}