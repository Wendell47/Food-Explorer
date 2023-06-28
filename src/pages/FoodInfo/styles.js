import styled from "styled-components";

export const Container =styled.div`
width: 100%;
height: 100vh;

display: grid;


grid-template-columns: auto;
grid-template-rows: clamp(70px, 10vw, 100px) auto;
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

> div{
    > button{
    width: max-content;
    padding: 0;
    font-weight: bold;
}
}

`
export const FoodContent = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 2rem 0;
width: 100%;
height: 100%;
gap:20px;

p {
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Poppins',sans-serif;

    margin-bottom: 2rem;
}
 img {
    width: clamp(20rem, 30vw, 50rem);
}
> div:nth-child(1){
    flex: 1 0 auto;
}
> div:nth-child(2){
    flex: 3  0 40%;
    
}
`

export const AddToCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap:20px;



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
`