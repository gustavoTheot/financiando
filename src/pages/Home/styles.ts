import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    position: relative;
    bottom: 2rem;
`

export const WalletContainer = styled.div`
    width: 24rem;
    height: 14rem;
    background-color: ${props => props.theme['withe']};

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

    li{
        list-style: none;

        a{
            text-decoration: none;
        }
    }
`

export const FinancialData = styled.div`
    width: 24rem;
    height: 20rem;
    background-color: ${props => props.theme['withe']};

    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    `

export const ListaItens = styled.ul`
    padding: 1rem 2rem 1rem 2rem;   
`