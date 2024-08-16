import { Route, Routes } from "react-router-dom"
import { Users } from "./pages/Users"
import { CreateUser } from "./pages/CreateUser"
import { EditUser } from "./pages/EditUser"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { ViewUser } from "./pages/ViewUser"



export const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Users />} />
                <Route path="/criar" element={<CreateUser />} />
                <Route path="/editar/:id" element={<EditUser />} />
                <Route path="/visualizar/:id" element={<ViewUser />} />

            </Route>
        </Routes>
    )
}