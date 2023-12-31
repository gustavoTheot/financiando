import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: ${(props) => props.theme['grey-900']};
        color: ${(props) => props.theme['gray-100']}
    }

   
`
