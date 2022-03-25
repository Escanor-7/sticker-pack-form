import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--violet);
  padding: 2rem 10%;
`;

export const Content = styled.div`
  -webkit-box-shadow: 0px 0px 15px 5px rgba(99,113,135,0.45); 
  box-shadow: 0px 0px 30px 5px var(--light-black);
  border-radius: 5%;
`;

export const DataBlock = styled.div`
  background-color: var(--white-secondary);
  padding: 5%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  p {
    font-size: 1.3rem;
    color: var(--light-black);
    margin-bottom: 1rem;
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  text-align: center;
  align-items: flex-end;
  border: 16px solid var(--dark-blue);
  border-radius: 50%;
  border-top: 16px solid var(--violet);
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;