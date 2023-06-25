import styled from "styled-components";

export const Container = styled.div`
width: 100%;
grid-area: header;
background: var(--bg-color-800);


`

export const Content = styled.div`
height: 100%;
display: flex;

gap:2rem;
align-items: center;

> div:first-child{
    svg{
        width: 3rem;
    }
    span{
        font-size: 2.4rem;
    }
}
> button:nth-child(3){
    width: 216px;
}

> div:nth-child(2){
    flex: 1 0 auto;

    
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