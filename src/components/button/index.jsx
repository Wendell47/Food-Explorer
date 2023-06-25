/* eslint-disable react/prop-types */
import { Container } from "./styles";


export default function Button({title,icon: Icon, btn,...rest}){

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
        <>
      
        <Container
        
        className={btn}

        {...rest}
        >
         {Icon && <Icon size={28}/>}         
          {title}
        </Container>
       
        </>
    )
}