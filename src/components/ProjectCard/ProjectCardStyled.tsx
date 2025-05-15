import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2rem 5%;
  gap: 1rem;
  position: relative;
  /* background-color: #3f3d3d; */
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
  @media(max-width:900px){
    width:80%;
  }

  font-weight: 400;
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
 
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: rgba(24, 139, 24, 0.3); 
 
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
