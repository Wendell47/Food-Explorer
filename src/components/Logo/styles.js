import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
align-items: center;

span{
font-size: clamp(1.6rem, 0.3rem + 1vw, 4.3rem);
font-weight: 600;
font-family: 'Poppins', sans-serif;
}

svg{
    width: clamp(2.5rem, 0.3rem + 1vw, 6rem);
    height: clamp(2.5rem, 0.3rem + 1vw, 6rem);
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
