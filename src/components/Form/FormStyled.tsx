import styled from "styled-components";

export const FormStyled=styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    #email{
        height:3rem;
        width: 30rem;
        border-radius: 8px;
        border: 1px solid white;
        padding-left: 10px;
        background-color: #242424;
    }
    #messege{
        height:10rem;
        width: 30rem;
        border: 1px solid white;
        border-radius: 8px;
        padding-left: 10px;
        background-color: #242424;
    }
    button{
        height: 2rem;
        width: 6rem;
        background-color: green;
        border: none;
        border-radius: 5px;
    }
    @media(max-width:600px){
      #email{
        width: 15rem;
      }
      #messege{
        width: 15rem;
      }
      
    
`