import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 400px;
text-align: center;
display: flex;
align-items: center;
flex-direction:column;
background: var(--bg-gradient-500);
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
    font-family: 'Roboto', sans-serif;
}
`

export const AddToCard = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
gap:20px;

> div{
flex: 1 0 auto;

}
> div:last-child{
    
    display: flex;
    gap: 10px;
    
    > button:first-child{
        flex: 1 2 auto;
     width:70%;
     padding: 1rem 0 ;
    }
    > button:last-child{
        flex: 1 2 auto;
       width: 10%;
       padding: 0;
       > svg{
        width: 2rem;
       }
    }
}
`
export const Stepper = styled.div`

display: flex;
gap:10px;
align-items: center;
justify-content: space-around;
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
margin: 2rem;
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