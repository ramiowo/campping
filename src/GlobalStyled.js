import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    font-family: "Noto Sans KR", sans-serif;
    background-color: #A3A88B;
    letter-spacing: -1px;
    color: #000;
}
a{
    color: #FFFFFF;
    text-decoration: none;
}
img{
    width: 100%;
    display: block;
}
`;
