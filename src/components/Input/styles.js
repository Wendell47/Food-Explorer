import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
gap: .8rem;
> label{
    
    color:var(--color-gray-400);
}

>input{
    border-radius: .5rem;
    border: none;
    background: var(--bg-color-700);
    width: 100%;
    padding: 14px 12px;
    color:var(--color-white);
    ::-ms-reveal {
  filter: invert(100%);
}
    &::placeholder{
        color: var(--color-gray-500);
    }
}
`