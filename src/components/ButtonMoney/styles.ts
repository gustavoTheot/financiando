import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    background: transparent;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
` 

export const Circle = styled.div`
    border: none;
    border-radius: 999px;
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme['green-default']};

    display: flex;
    justify-content: center;
    align-items: center;
`