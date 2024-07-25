import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`

  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 125px;
    max-width:100%
    height: 57px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin: 0px;
  }

  img {
    margin-right: 20px;
    width: 100%;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

export const LinksItem = styled.li`
  margin-right: 16px;
  font-size: 18px;
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  img {
    margin-left: 16px;
  }
`
