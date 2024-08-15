import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Users } from "./pages/Users"
import { CreateUsers } from "./pages/CreateUser"
import { EditUser } from "./pages/EditUser"


function App() {

  return (
    <>
      <ThemeProvider theme={DefaultTheme} >

        <BrowserRouter>
        
        <nav>
          <Link to="/">Usuários</Link>
          <Link to="/create">Cadastrar Usuário</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

        
        </BrowserRouter>
        

      <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
