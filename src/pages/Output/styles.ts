import styled from "styled-components";

export const ValueOutput = styled.div`
    width: 24rem;
    height: 8rem;
    background-color: ${props => props.theme['withe']};

    padding: 1rem 2rem 1rem 2rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`