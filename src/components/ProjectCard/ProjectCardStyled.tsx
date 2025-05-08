import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2rem 5%;
  gap: 1rem;
  position: relative;
  background-color: #3f3d3d;
  border-radius: 8px;
  .link {
    display: flex;
    justify-content: space-between;
    a img {
      height: 2.3rem;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    color: green;
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
