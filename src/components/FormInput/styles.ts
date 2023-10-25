import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input{
        width: 100%;
        padding: 1.5rem;
        border: none;
        border-radius: 8px;
        outline: none;

        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    button{
        height: 3rem;
        border-radius: 8px;
        border: none;

        color: ${props => props.theme['withe']};
        background-color: ${props => props.theme['output']};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        cursor: pointer;

    }
`