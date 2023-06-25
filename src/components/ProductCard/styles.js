import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 400px;
text-align: center;
display: flex;
align-items: center;
flex-direction:column;
background: var(--bg-color-900);
padding: 2rem;
border-radius: .8rem;
gap: 2rem;
img{

    width: 50%;
}

> h4{
    font-size: clamp(2rem, 1vw,2.5rem);
    font-weight: 700;
   
}
> p{

    color: var(--color-gray-400);
}
> span{
    
    display: block;
    font-size: clamp(2rem, 3vw, 3.6rem);
    color: #82F3FF;
}
`

export const AddToCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap:20px;
> div{
flex: 1 0 auto;
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

export const ProductFavIcon = styled.div`

padding: 5px;
color: white;
transition: 140ms;
z-index: 1;
font-size: 2.4rem;
position: absolute;
top:0;
right: 0;

> svg{
    transition:140ms;
}

&.active{
   svg{
    fill: white;
   }
   animation: pulse 104ms ease-in;
}

@keyframes pulse {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.2;
    }
    100%{
        scale: 1;
    }
    
}
`