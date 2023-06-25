import styled from "styled-components";



export const Container = styled.div`
position: relative;

@media (max-width:700px){
margin-right: -70px;
}
`

export const GradientSide = styled.div`

position: absolute;
width: 200px;
height: 100%;
z-index: 2;


&.left{
    background: linear-gradient(-90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
    bottom: 0;
    
    left: 0;
}
&.right{
    background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
    bottom: 0;
top: 0;
right: 0;
}

@media (max-width:700px){
    width: 0;
}

`