import styled from "styled-components";
export const Navigation = styled.div`
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
  