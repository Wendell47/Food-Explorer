import styled from "styled-components";

export const Container =styled.div`
width: 100%;
height: 100vh;

display: grid;


grid-template-columns: auto;
grid-template-rows: clamp(70px, 10vw, 100px) 1fr auto;
grid-template-areas: 

"header"
"content"

;


`

export const Content = styled.div`

grid-area: content;
margin-top: 2rem;
overflow-y: auto;

display: flex;
flex-direction: column;
justify-content: space-between;

 form {
    align-items: end;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    ;
    fieldset{
        border: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 3rem;
       
    }

    
    .product-img{
        flex:1 0 auto;
        
    }
    .product-name{
        flex: 3 0 auto;

    }
    .product-category{
        flex: 2  0 auto;
    }

    .product-tags{

        flex:8 0 min(421px, 146px);
        
        > div  {

            height: 5rem;
            overflow-x: auto;
            display: flex;
            padding: 5px 12px;
            gap: 2rem;
            margin-top: .8rem;
            flex-direction: column;
            justify-content: center;
            align-content: flex-start;
            flex-wrap: wrap;

            scroll-snap-type: x mandatory;
            border-radius: .5rem;
            background: var(--bg-color-700);

            input{
                
                min-width: 30%;
            }
        }
    }

    .product-price{
        flex:1 0 auto;
    }

    .product-description{
        flex:1 0 auto;
        
         textArea {
            height: 200px;
         }
    }

    > label{
        display: flex;
        gap:20px;

        > div {
            flex: 1 0 auto;
        }
    }

    > button{
    width: max-content;
  

 }

}
`
export const FoodContent = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 2rem 0;
width: 100%;    
gap:20px;

p {
    font-size: clamp(1.6rem, 2vw, 2rem);
    font-weight: 300;
    font-family: 'Poppins',sans-serif;

    margin-bottom: 2rem;
}
 img {
    width: clamp(20rem, 30vw, 50rem);
}
> div:nth-child(1){
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
}
> div:nth-child(2){
    flex: 3  0 40%;
    
}

@media (max-width:500px){
   
    text-align: center;

}


`

export const AddToCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap:20px;

@media (max-width:500px){
    justify-content: center;

}

`
export const Stepper = styled.div`

display: flex;
gap:10px;
align-items: center;

button{
    padding: 10px;
}
`

export const ContentTags = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    @media (max-width:500px){
   justify-content: center;
    
}

`