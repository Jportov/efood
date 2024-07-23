import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  color: ${cores.laranja};
`

export const LinksItem = styled.li`
  margin-right: 16px;
  color: ${cores.laranja};
`
export const LinkCart = styled.a`
  color: ${cores.laranja};
  display: flex;
  align-items: center;
  img {
    margin-left: 16px;
  }
`
