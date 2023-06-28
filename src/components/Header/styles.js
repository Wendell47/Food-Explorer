import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
grid-area: header;
background: var(--bg-color-800);


`

export const Content = styled.div`
height: 100%;
display: flex;
justify-content:space-between;
gap:2rem;
align-items: center;

> button:nth-child(5){
    position:relative;
    width: 200px;
    
}

> div:nth-child(4){
    flex: 1 0 auto;  
}
@media (min-width:1100px){
    > button:first-child{
    display: none;
}
}
@media (max-width:1100px){
    
    > button:nth-child(5){
    width: auto;
   
}
> div:nth-child(4){
    display: none;
}
> button:last-child{
    display: none;
}
}
`
export const ButtonExit = styled.button`

background: transparent;
border: none;
padding: 5px;
color: var(--color-white);

svg{
    width: 2.4rem;
    height: 2.4rem;
}
`
export const Badge = styled.div`

border-radius: 100%;
width: 2rem;
height: 2rem;
background: var(--color-tomato-400);
display: flex;
align-items: center;
justify-content: center;

> span{
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
}

@media (max-width:900px){
    &.bagdeFloat{
    position:absolute;
    right: -5px;
    top: 2px;
}


}
`