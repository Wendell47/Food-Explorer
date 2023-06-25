import styled from "styled-components";

export const Container = styled.div`

background: var(--bg-gradient-500);
min-width: 1000px;
height: 260px;
margin-top: 20rem;
position: relative;
border-radius: .8rem;
display: flex;
flex-wrap: wrap;
gap: 10px;

align-items: center;
> div:nth-child(2){
    padding: 20px;
}
img{
    position: absolute;
    bottom: 0;
    width: calc(50rem + 10vw);
}
> div {
    flex: 5 0 auto;
    
    
}
> div:last-child{
    text-align: end;
    h3{
        font-size: 4rem;
        line-height: 140%;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    
    p{
        line-height: 100%;
    }
    margin: 30px clamp(4rem, 3rem + 10vw, 100px);

    @media (max-width:700px){
        text-align: start;
        width: 360px;
        flex: 1 0 auto;
        margin: 30px 30px;

        p{
            font-size: 2rem;
            
        }
    }
}
`