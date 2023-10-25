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

    span{
        font-weight: bold;
    }

    transition-duration: 2s;
    transition: ease-out;

    &:hover{
        transform: scale(1.1);
    }
` 

export const Circle = styled.div`
    border: none;
    border-radius: 999px;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${(props) => props.theme['gray-400']};

    display: flex;
    justify-content: center;
    align-items: center;
`