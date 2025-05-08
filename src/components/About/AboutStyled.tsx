import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  padding: 6rem 10%;
  position: relative;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    min-height: 90vh;
  }

  .about-info {
    flex: 3;
    padding-right: 3rem;
    p:first-child {
      font-size: 2rem;
      font-weight: 700;
      color: Green;
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }

  .about-img {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }

    @media (max-width: 991px) {
      margin-top: 3rem;
    }
  }

  .education,
  .experience {
    margin: 2rem 0;
    padding: 1.5rem;
    background-color: #3f3d3d;
    border-radius: 8px;

    h3 {
      font-size: 1.4rem;
      color: green;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    h5 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  }

  h3 {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.6rem;
    color: Green;
  }

  .hard-skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;

    @media (min-width: 576px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.2rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(6, 1fr);
    }

    .ability {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5;
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      }

      img {
        max-width: 100%;
        height: auto;
        max-height: 50px;
      }
    }
  }
`;
