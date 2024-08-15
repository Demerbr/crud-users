import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter, Link} from "react-router-dom"
import { Router } from "./router"


function App() {

  return (
    <>
      <ThemeProvider theme={DefaultTheme} >

        <BrowserRouter>
        
        <nav>
          <Link to="/">Usuários</Link>
          <Link to="/create">Cadastrar Usuário</Link>
      </nav>

     
        <Router />
        
        </BrowserRouter>
        

      <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
