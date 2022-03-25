import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.error {
    label {
      color: red;
      border-color: red;
    }
  }

  input {
    position: absolute;
    z-index: 1;
    appearance: none;

    &:checked + label {
      color: blue;
      &::before {
        font-family: "Font Awesome 5 Free";
        content: "\f00c";
        border: 2px solid blue;
        border-radius: 0.20rem;
        font-size: 0.7rem;
        color: blue;
        font-weight: 600;
        margin-right: 3px;
      }
    }
  }

  label {
    font-size: 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 0.5rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    &::before {
      font-family: "Font Awesome 5 Free";
      content: "\f0c8";
      font-size: 1rem;
      margin-right: 3px;
    }
  }
`;
''