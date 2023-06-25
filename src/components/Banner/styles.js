import styled from "styled-components";

export const Container = styled.div`

background: var(--bg-gradient-500);


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
    width: clamp(30rem, 50vw, 70rem);
    margin-left: -3rem;
   
}

> div {
    flex: 5 0 auto;
    
    
}
> div:last-child{
    text-align: end;
    width: 190px;

    h3{
        font-size: clamp(.5rem, 5vw, 5rem);
        line-height: 100%;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    
    p{
        line-height: 120%;
    }
    margin: clamp(3rem, 5vw, 30rem) clamp(3rem, 5vw, 10rem);

    @media (max-width:700px){
       
        
        flex: 1 0 auto;
        

        p{
            font-size: 2rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }

        
    }
}
`