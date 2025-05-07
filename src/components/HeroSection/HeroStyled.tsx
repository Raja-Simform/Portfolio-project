import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 10%;
  align-items: center;
  gap: 4rem;
  

  h1 {
    font-size: 7rem;
    margin: 0;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
    width: 60%;
    p {
      font-size: 1.1rem;
      margin: 0;
    }

    h3 {
      font-size: 1.4rem;
      color: var(--green);
      margin: 0;
    }

    .greeting {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .contact-info {
    margin: 2rem 0;

    button {
      height: 2.5rem;
      width: 12rem;
      border: none;
      border-radius: 20px;
      background-color: green;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }
      &:active {
        transform: translateY(1px);
      }
    }
  }

  .socialmedia {
    display: flex;
    gap: 1.5rem;

    img {
      height: 3rem;
      margin-top: 1rem;
      transition: transform 0.3s ease;
    }

    a:hover img {
      transform: translateY(-5px);
    }
  }

  .hero-img {
    img {
      max-width: 500px;
      height: auto;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 6rem;
    }
    .hero-img img {
      max-width: 450px;
    }
  }

  @media (max-width: 992px) {
    gap: 2rem;
    h1 {
      font-size: 5rem;
    }
    .hero-info {
      width: 50%;
    }
    .hero-img img {
      max-width: 400px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    gap: 3rem;
    .hero-info {
      width: 100%;
      margin-left: 0;
      align-items: center;
      text-align: center;
    }
    h1 {
      font-size: 4.5rem;
    }
    .greeting {
      justify-content: center;
    }
    .contact-info button {
      width: 10rem;
    }
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;
    h1 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    .hero-img img {
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.8rem;
    }
    .socialmedia img {
      height: 2.5rem;
    }
    .hero-img img {
      max-width: 280px;
    }
  }
`;
