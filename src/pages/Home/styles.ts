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
`

export const FinancialData = styled.div`
    width: 24rem;
    height: 20rem;
    background-color: ${props => props.theme['withe']};
`