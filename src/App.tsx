import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import UsersTable from "./components/Table/Table"
import UserForm from "./components/cadastro"


function App() {

  return (
    <>
      <ThemeProvider theme={DefaultTheme} >

        <UserForm />

        <UsersTable />
      <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
