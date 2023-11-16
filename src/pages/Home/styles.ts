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

export const MoneyContainer = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${(props) => props.theme.withe};

  padding: 1rem 2rem 1rem 2rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const TotalValue = styled.div`
  h1 {
    margin-top: 0.125rem;
  }
`

export const Description = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.75rem;
  }

  p {
    font-size: 1.15rem;
    font-weight: bold;
  }
`

export const Up = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.input};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${(props) => props.theme.input};
  }
`

export const Down = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.output};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${(props) => props.theme.output};
  }
`

export const WalletContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.theme.withe};

  padding: 1rem 2rem 1rem 2rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const ListWallet = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  li {
    list-style: none;

    a {
      text-decoration: none;
    }
  }
`

export const FinancialData = styled.div`
  width: 24rem;
  height: 20rem;
  background-color: ${(props) => props.theme.withe};

  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const ListaItens = styled.ul`
  padding: 1rem 2rem 1rem 2rem;
`
