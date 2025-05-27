import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  max-width: 100%;
  padding: 2rem 1.5rem;
  gap: 1.5rem;
  position: relative;
  background-color: #2e2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .link {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    a {
      display: inline-flex;
      align-items: center;
      padding: 0.3rem;
      border-radius: 6px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      img {
        height: 2.4rem;
        width: 2.4rem;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
          brightness(103%) contrast(103%);
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #f0f0f0;
      letter-spacing: 0.03em;
      text-transform: capitalize;
    }

    .description {
      font-size: 0.95rem;
      color: #cfcfcf;
      line-height: 1.4;
      min-height: 3.5rem;
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-start;

    span {
      background-color: #4caf50;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.3rem 0.7rem;
      border-radius: 12px;
      user-select: none;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #388e3c;
        cursor: default;
      }
    }
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;

    .description .title {
      font-size: 1.1rem;
    }

    .description .description {
      font-size: 0.9rem;
    }

    .footer span {
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
    }
  }
`;
