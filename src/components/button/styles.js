import styled from "styled-components";

export const Container = styled.button`


width: 100%;
border-radius: .8rem;
font-family: 'Poppins', sans-serif;
border: none;
color: var(--color-white);
font-weight: 400;
padding: 12px 32px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&.btnPrimary{
    background: var(--color-primary);
}

&.btnSecondary{
    background: #AB4D55;
}

&.btnDark{
    background: var(--bg-color-800);
}
&.btnTransparent{
    background: transparent;
    padding: 12px 0;
    width: auto;
}
&.btnTransparentWithBorder{
    border: 1px solid var(--color-white);
    background: transparent;
}
`