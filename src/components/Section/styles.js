import styled from "styled-components";

export const Container = styled.div`

&.container + .container{
    margin-top: 5rem;
}
&.container:last-child{
    margin-bottom: 5rem;
}
h3{

 font-size: clamp(2rem, 5vw,3.2rem);
 line-height:140%;
 margin-bottom: 2rem;
}
`