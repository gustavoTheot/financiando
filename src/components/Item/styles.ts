import styled from "styled-components";

export const ItemContainer = styled.div`
  
`

export const Container = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 999px;
    background-color: ${props => props.theme['green-default']};

    display: flex;
    justify-content: center;
    align-items: center;

`

export const ItemDescrpiton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span{
        font-weight: bold;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const TipeLocal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    
    p{
        font-size: 0.875rem;
        color: ${props => props.theme['gray-700']}
    }
`

