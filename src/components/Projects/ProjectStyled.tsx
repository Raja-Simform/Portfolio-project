import styled from "styled-components";

export const ProjectStyled = styled.section`
  padding: 6rem 8%;
  display: flex;
  flex-direction: column;
   
  h2 {
    color: #4caf50; 
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 2.5rem;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .cards {
    display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;
  justify-items: center; 
  max-width: 1200px;
  width: 100%;
  }

  @media (max-width: 900px) {
    padding: 4rem 5%;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .cards {
    grid-template-columns: repeat(2, 1fr); 
    gap: 1.5rem;
  }
  }

  @media (max-width: 480px) {
    padding: 3rem 3%;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    .cards {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }
  }
`;
