import styled from "styled-components"


const Container = styled.section`
    width: 100%;
    padding: 12rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 4rem;
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
        text-align: center;
    }

    h5{
        font-size: 2.2rem;
        font-weight: 300;
        text-align: center;
        margin-top: 0.8rem;
    }

    @media screen and (max-width: 800px){
        padding: 8rem 2.4rem;


        h2{
            font-size: 2.8rem;
        }

        h5{
            font-size: 2rem;
        }
    }
`

const Box1 = styled.div`
    margin-top: 6rem;
    background-color: #313131;

    @media screen and (max-width: 1280px){
        background-color: transparent;
    }

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }
`

const Box2 = styled.div`
    margin-top: 8rem;
    max-width: 80rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 3.2rem;
        color: ${props => props.theme.colors.gold};
        margin-bottom: 0.8rem;
    }

    p{
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    @media screen and (max-width: 800px){
        margin-top: 4rem;

        h3{
            font-size: 2.4rem;
            line-height: 1.2;
        }

        p{
            font-size: 1.8rem;
            line-height: 1.2;

        }
    }

`

const Style = {
    Container,Box1,Box2
}

export default Style