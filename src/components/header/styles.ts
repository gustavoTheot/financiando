import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12rem;
  background-color: ${(props) => props.theme['green-default']};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Container = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  bottom: 1.5rem;

  gap: 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    border: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span,
  h2 {
    color: ${(props) => props.theme.withe};
  }
`

export const IconeReturn = styled.div`
  display: flex;
  align-items: flex-start;

  a {
    color: ${(props) => props.theme.withe};
  }
`
