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
    height: 12rem;
    background-color: ${props => props.theme['withe']};

    padding: 1rem 2rem 1rem 2rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Description = styled.div`
    h1{
        margin-top: 0.125rem;
    }
`

export const ListWallet = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    li{
        list-style: none;
    }
`

export const FinancialShares = styled.div`
    width: 24rem;
    height: 12rem;
    background-color: ${props => props.theme['withe']};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
    a{
        color: black;
        text-decoration: none;
    }
`

export const ItemFinancialShares = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        width: 4rem;
        height: 4rem;
        border-radius: 8px;
        background-color: ${props => props.theme['green-default']};

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const FinancialData = styled.div`
    width: 24rem;
    height: 20rem;
    background-color: ${props => props.theme['withe']};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const ListaItens = styled.ul`
    padding: 1rem 2rem 1rem 2rem;   
`