import styled from "styled-components";

export const Container = styled.div`
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
    font-size: 2.5rem;
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