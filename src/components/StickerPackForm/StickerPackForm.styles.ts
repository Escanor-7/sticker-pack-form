import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--white-secondary);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: var(--light-black);
`;

export const Content = styled.div`
  width: 100%;
  padding: 5%;
`;

export const QuestionTitle = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ErrorMessage = styled.p`
  width: 100%;
  color: red;
  margin-bottom: 0.5rem;
`;

export const QuantityBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  input {
    width: 3rem;
    background-color: var(--white-ice);
    border: 1px solid var(--dark-blue);
    outline: none;
    text-align: center;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
  }
`;

export const QuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: var(--dark-blue);
  border: none;
  border-radius: 0.25rem;

  svg {
    color: var(--white);
    font-size: 14px;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  background-color: var(--white-ice);
  height: 100px;
  border-radius: 0.25rem;
  border: 1px solid var(--dark-blue);
  outline: none;
  resize: none;
  padding: 0.5rem;
  color: var(--light-black);
`;

export const Baseboard = styled.div`
  width: 100%;
  background-color: var(--white-ice);
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  font-weight: 500;
  color: var(--white);
  margin: 2rem 0rem;
  width: 30%;

  @media(max-width: 1024px) {
    padding: 0.7rem 1.5rem;
  }
`;