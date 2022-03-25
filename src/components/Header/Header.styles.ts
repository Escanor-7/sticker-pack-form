import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--white-secondary);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const Header = styled.div`
  background-color: var(--dark-blue);
  padding: 1rem 5% 2rem 5%;
  border-radius: 0.25rem;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 60%;
  display: flex;
  justify-content: space-between;
  
  h1 {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.2rem;
    color: white;
  }

  p:nth-child(2) {
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 5px;
  }

  p:nth-child(3) {
    font-weight: 600;
    opacity: 0.9;
  };

  svg {
    font-size: 70px;
    margin-right: 1rem;
    color: darkblue;
  }

  @media(min-width: 1024px) {
    h1,p {
      font-size: 1.5rem;
    }

    svg {
      font-size: 100px;
      margin-right: 4rem;
    }
  }
`;