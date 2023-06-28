import styled from "styled-components";

export const Container = styled.div`

position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
z-index: 3;
width: 100%;
height: 100%;

transition: 200ms ease-in;
opacity: 1;

background: var(--bg-color-900);


> div:nth-child(2) {
    padding: 30px 20px;
}

&.hide{
    width:0;
    opacity: 0;
    visibility: hidden;
   }


    button:nth-child(2){
    margin-left: 15px;
   }
`
export const MobileHeader = styled.div`
   background:var(--bg-color-800);
   height: clamp(70px, 10vw, 100px);
   display: flex;
   align-items: center;

   
`
 
