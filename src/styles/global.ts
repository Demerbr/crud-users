import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline:none;
    
}

body{
    -webkit-font-smoothing: antialiased;
}

body, input,textarea, button {

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;

}
`
