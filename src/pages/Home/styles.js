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
overflow-y: auto;
width: 100%;

`


