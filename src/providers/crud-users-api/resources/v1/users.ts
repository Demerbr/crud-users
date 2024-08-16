import axios from "axios";
import { UserResponse } from "./response/getUsersReponse";




 const getAll = async () : Promise<UserResponse[]> =>{

    const {data} = await axios.get('http://localhost:3000/users')


    return data as UserResponse[]

}

export default {getAll}