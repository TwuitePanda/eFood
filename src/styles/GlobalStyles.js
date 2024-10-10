
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #fafafa;
    color: #333;
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
}
`;