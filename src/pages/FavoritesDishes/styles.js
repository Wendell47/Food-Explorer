import styled from "styled-components";

export const Container =styled.div`
width: 100%;
height: 100vh;

display: grid;


grid-template-columns: auto;
grid-template-rows: clamp(70px, 10vw, 100px)  auto;
grid-template-areas: 

"header"
"content"

;
`

export const Content = styled.div`

grid-area: content;
overflow-y: auto;
padding-top:4rem;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const  ContentFav = styled.div`
display: grid;
flex-wrap: wrap;
gap: 3rem;
margin-top: 2rem;

grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`
export const FavCard = styled.div`
flex: 1 0 min(52vw, 290px);
border-radius: .8rem;
padding:  2rem;
display: flex;
gap: 2rem;
align-items: center;



img {
    cursor: pointer;
    width: 30%;
    transition: 140ms;
    &:hover{

scale:1.03;
}
}
h4{
    font-size: clamp(1.7rem, 3vw, 2rem);
}
span{
color: var(--color-tomato-400);
font-size: clamp(1rem, 3vw, 1.5rem);
cursor: pointer;
transition: 140ms;
&:hover{
    opacity: 0.8;
}
}

animation: show 140ms ease-in ;

@keyframes show {
    0%{
        opacity: 0;
        scale: 0.5;
    }

    80%{
      
        scale: 1.2;
    }
    100%{
        opacity: 1;
        scale: 1;
    }
}
`

