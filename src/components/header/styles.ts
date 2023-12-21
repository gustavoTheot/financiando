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
  width: 50rem;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const Hello = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const DescriptionPeople = styled.div`
  display: flex;
  flex-direction: column;
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const IconeReturn = styled.div`
  display: flex;
  align-items: flex-start;

  a {
    color: ${(props) => props.theme.withe};
  }
`
