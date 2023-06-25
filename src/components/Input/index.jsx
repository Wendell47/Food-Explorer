import { Container } from "./styles";

export default function Input({title, icon: Icon,...rest}){

  let displayHidden

  if(title == undefined){
     displayHidden = 'displayHidden'
    
  }
return(

    <Container>
     <label className={displayHidden}>{title}</label>
      <div>{Icon && <Icon size={20}/>}<input {...rest}/>  </div>
    </Container>
)
}