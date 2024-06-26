import styled from "styled-components"



const Container = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.black};
    padding: 4rem 0rem;
    border-radius: 0.8rem;

    h4{
        font-size: 2.4rem;
        font-weight: 600;
        margin-bottom: 2.4rem;
    }

    input, textarea{
        width: 52rem;
        max-width: 52rem;
        padding: 0.8rem;
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
        border: 1px solid gray;

        &:disabled{
            opacity: 0.5;
        }
    }

    span{
        margin-bottom: 1.6rem;
    }

    p{
        width: 52rem;
        font-size: 1.2rem;
        margin-top: 0.8rem;
        font-weight: 600;
        color: #FF6D6D;
        text-align: left;
    }

    .message{
        height: 24rem;
    }

    button{
        padding: 1.6rem 3.2rem;
        background-color: ${props => props.theme.colors.gold};
        font-size: 1.6rem;
        font-weight: 600;
        border: 1px solid white;
        border-radius: 0.4rem;

        &:disabled{
            opacity: 0.5;
        }
    }

    @media screen and (max-width: 1080px){
        input, textarea,p{
            width: 32rem;
        }

    }

    @media screen and (max-width: 800px){
        input, textarea,p{
            width: 28rem;
        }
    }
`


const Style = {Container}

export default Style