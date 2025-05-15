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
    #aboutme {
  font-weight: 400;
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  text-align: center;
  margin: 1rem 0 2rem 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 128, 0, 0.15); 
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        @media(max-width:500px){
               button{
                width:6rem;
               }
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
    box-sizing: border-box;
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