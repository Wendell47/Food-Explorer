import styled from "styled-components";

export const Container = styled.button`


width: 100%;
border-radius: .5rem;
font-family: 'Poppins', sans-serif;
border: none;
color: var(--color-white);
font-weight: 500;
padding: 12px 32px;

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
}
`