import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 1rem;
position: relative;
align-items: center;
padding: 8px 12px;

border-radius: .5rem;



background-color: ${({ isNew}) => isNew ? "transparent" : "var(--color-gray-500)"};
color: var(--color-gray-300);

border:${({ isNew}) => isNew ? "1px dashed var(--color-gray-500)" : "none"};

scroll-snap-align:${({ isNew}) => isNew ? "end" : "start"};
scroll-margin: .8rem;


> button{
    border:none;
    background:none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-delete{
    color: var(--color-gray-300);
}
.button-add{
    color: var(--color-gray-400);
}

    >input {
        opacity:${({ isNew}) => isNew ? "1" : "0"};
        position: ${({ isNew}) => isNew ? "" : "absolute"};;
        
        width: ${({isNew}) => isNew ? "100px" : "0"};
        color: var(--color-white);
        background: transparent;

        border:none;
        
        &:focus-visible{
           outline: none;
        }

        &:placeholder{
            color: var(--color-gray-300);
            
        }
    }

`;