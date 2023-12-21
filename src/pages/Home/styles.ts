import { styled } from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  position: relative;
  bottom: 4.2rem;
`

export const AboutWallet = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 1rem;

  margin-top: 1rem;
`

export const Box = styled.div`
  padding: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['grey-800']};

  display: flex;
  align-items: center;

  .register,
  .total {
    display: flex;
    flex-direction: column;
    gap: 0.525rem;
  }

  .title {
    display: flex;
    flex-direction: row;
    gap: 0.875rem;
  }
`

export const Options = styled.div`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme['grey-800']};

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    li {
      list-style: none;
    }

    li a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.685rem;

      text-decoration: none;
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const Circle = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  background-color: ${(props) => props.theme['purple-normal']};
`

export const Spent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`

export const GenerealExpenses = styled.div`
  h3 {
    margin-bottom: 1rem;
  }

  ul {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['grey-800']};
    width: 100%;
    height: 30vh;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const Icon = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-dark-musg']};

  svg {
    color: ${(props) => props.theme['green-musg']};
  }
`

export const Description = styled.div``

export const Value = styled.div``
