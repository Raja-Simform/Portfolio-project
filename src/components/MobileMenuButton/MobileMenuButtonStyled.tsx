import styled from "styled-components";
export const MobileMenuButtonStyled = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fdfbfb;
  transition:color 0.3s ease;
  &:hover{
    color:green
  }
  @media (max-width: 768px) {
    display: block;
  }
`;