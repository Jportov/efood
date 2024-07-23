import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  verde: '#10AC84',
  cinza: '#fff',
  cinzaClaro: '#FFEBD9',
  laranja: '#E66767'
}

export const GlobalCss = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
list-style:none;

}
body {
  background-color: ${cores.preta};
  color: ${cores.branca};

}
  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;}`
