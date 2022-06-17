import { createGlobalStyle } from "styled-components";
import Img from "../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body { 
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${Img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

h1 {
    font-size: calc(4vh + 0.5vw);
}

h2 {
    font-size: calc(3vh + 0.5vw);
}

`;
