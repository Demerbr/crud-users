import { Route, Routes } from "react-router-dom"
import { Users } from "./pages/Users"
import { CreateUsers } from "./pages/CreateUser"
import { EditUser } from "./pages/EditUser"
import { DefaultLayout } from "./layouts/DefaultLayout"



export const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Users />} />
                <Route path="/create" element={<CreateUsers />} />
                <Route path="/edit/:id" element={<EditUser />} />
            </Route>
        </Routes>
    )
}