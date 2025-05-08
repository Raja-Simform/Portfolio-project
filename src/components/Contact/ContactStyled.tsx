import styled from "styled-components";

export const ContactStyled=styled.section`
    padding: 6rem 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2{
        font-size:2.8rem;
        color: green;
    }
    span{
        font-weight: 400;
        color:white;
    }
    .contact-details{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1rem;
        button{
            height: 3rem;
            width: 10rem;
            background-color: green;
            border: none;
            border-radius: 10px;
            text-decoration: none;

        }
    }
    
`