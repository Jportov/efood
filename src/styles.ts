import { createGlobalStyle } from "styled-components";

export const cores = {
  amarelo: "#FFB930",
  branca: "#FFFFFF",
  fundoBody: "#FFF8F2",
  trigo: "#FFEBD9",
  salmao: "#E66767",
};

export const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundoBody};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    border-radius: 8px; /* Adiciona bordas arredondadas */
    padding: 0 16px; /* Adiciona padding para melhorar a responsividade */
  }
`;
