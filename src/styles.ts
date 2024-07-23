import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF8F2',
  branca2: '#FFF8F3',
  branca3: '#Fff',
  preta: '#111',
  verde: '#10AC84',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  rosa: '#e66767',
  bege: '#FFEBD9'
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
