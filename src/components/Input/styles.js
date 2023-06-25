import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
gap: .8rem;
label{
  
    color:var(--color-gray-400);

    &.displayHidden{
     display:none;
    }
}

div{
    border-radius: .8rem;
    display: flex;
    gap: 10px;
    background: var(--bg-color-700);
    width: 100%;
    padding: 16px 12px;
    
    
        &:hover{
        outline: 1px solid white;
    }

    
> input{
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    color:var(--color-white);
    
    &:focus-visible{
        outline: 0;
    }

    ::-ms-reveal {
  filter: invert(100%);
}
    &::placeholder{
        color: var(--color-gray-500);
    }

}
    
    
}
`