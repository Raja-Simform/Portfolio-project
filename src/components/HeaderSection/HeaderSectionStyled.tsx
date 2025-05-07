import styled from "styled-components";

export const HeaderComponent = styled.section`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;



const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  a {
    text-decoration: none;
    color: #fefdfd;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    
    &:hover {
      color: #797b7c;
      
      &::after {
        width: 100%;
      }
    }
    
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: green;
      transition: width 0.3s ease;
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;


