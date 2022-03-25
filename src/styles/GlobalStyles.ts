import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --white: #FFF;
  --light-gray: #696969;
  --light-black: #363636;
  --white-ice: #DCDCDC;
  --white-secondary: #F5F5F5;
  --dark-blue: #191970;
  --violet: #8A2BE2;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px){
    font-size: 93.5%; // = 15px
  }

  @media(max-width: 720px){
    font-size: 87.5%; // = 14px
  }
}

body {
  background-color: var(--white);
  -webkit-font-smoothing: antialiased;
}

body, button, input, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;