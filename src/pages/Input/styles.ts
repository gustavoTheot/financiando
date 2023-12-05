import styled from 'styled-components'

export const ValueInput = styled.div`
  width: 24rem;
  height: 8rem;
  background-color: ${(props) => props.theme.withe};

  padding: 1rem 2rem 1rem 2rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  span {
    font-size: 0.75rem;
  }
`

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-radius: 8px;
    outline: none;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  button {
    height: 3rem;
    border-radius: 8px;
    border: none;

    color: ${(props) => props.theme.withe};
    background-color: ${(props) => props.theme.output};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    cursor: pointer;
  }
`
