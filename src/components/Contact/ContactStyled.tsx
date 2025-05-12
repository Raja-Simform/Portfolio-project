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
    a {
    text-decoration: none;
    color: #fefdfd;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    
    &:hover {
      color: #797b7c;
     
    }
    
  
  }
  button {
    background-color: green;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    
    &:hover {
      background-color: #006400;
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
    
`