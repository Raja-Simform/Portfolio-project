import styled from "styled-components";
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fdfbfb;
  
  @media (max-width: 768px) {
    display: block;
  }
`;