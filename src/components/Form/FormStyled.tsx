import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  #form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  #email {
    height: 3rem;
    width: 30rem;
    border-radius: 8px;
    border: 1px solid white;
    padding-left: 10px;
    background-color: #242424;
    font-size: large;
    
  }
  #email::placeholder{
    color:white;
  }
  #messege {
    height: 10rem;
    width: 30rem;
    border: 1px solid white;
    border-radius: 8px;
    padding-left: 10px;
    background-color: #242424;
    font-size: large;
    word-wrap: break-word;
  }
  #messege::placeholder{
    color:white;
  }
  #name {
    height: 3rem;
    width: 30rem;
    border-radius: 8px;
    border: 1px solid white;
    padding-left: 10px;
    background-color: #242424;
    font-size: large;
  }
  #name::placeholder{
    color:white;
  }
  button {
    width: 6rem;
    background-color: green;
    border: none;
    border-radius: 5px;
  }
  @media (max-width: 600px) {
    #email {
      width: 15rem;
    }
    #messege {
      width: 15rem;
    }
    #name {
      width: 15rem;
    }
  }
`;
