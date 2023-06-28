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

gap:2rem;
align-items: center;


> button:nth-child(3){
    width: 216px;
}

> div:nth-child(2){
    flex: 1 0 auto;  
}

@media (max-width:1100px){
    > div{
        flex:1 0 auto;
    }
> button:nth-child(3){
    display: none;
}

> div:nth-child(2){
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
`