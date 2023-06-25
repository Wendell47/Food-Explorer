import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
align-items: center;

span{
font-size: 4.3rem;
font-weight: 700;
font-family: 'Poppins', sans-serif;
}

svg{
    width: 6rem;
    height: 6rem;
    animation: 900ms backwards 140ms  ease-in-out;
    animation-name: ${({ isAnimated}) => isAnimated ? 'rotate' : ''};
}

@keyframes rotate {
    0%{
        rotate: 0;
        scale: 1;
    }

    30%{
        rotate: -20deg;
        scale: 1.04;
    }

    50%{
        rotate: 360deg;
    }

    80%{
        rotate: 20deg;
        scale: 1.04;
    }

    100%{
        rotate: 0deg;
         scale: 1;
    }
}



`
