import axios from "axios";
import { UserResponse } from "./response/getUsersReponse";
import { CreateUserRequest } from "./request/createUserRequest";




const getAll = async () : Promise<UserResponse[]> =>{

    const {data} = await axios.get('http://localhost:3000/users')


    return data as UserResponse[]

}

const getById = async(id: string): Promise<UserResponse> =>{

    const {data} = await axios.get(`http://localhost:3000/users/${id}`)


    return data as UserResponse

}


const create = async (request: CreateUserRequest): Promise<UserResponse> =>{

  const  dataBody =  {
        firstName: request.firstName,
        lastName: request.firstName,
        cpf: request.cpf,
        email: request.email,
        address: request.address,
        phone1: request.phone1,
        phone2: request.phone2, 
        birthDate: request.birthDate,
        gender: request.gender 
    }

    const { data } = await axios.post('http://localhost:3000/users', dataBody )

    return data as UserResponse
}


const updateById = async (id: string, request: CreateUserRequest): Promise<UserResponse> => {

    const dataBody = {
        firstName: request.firstName,
        lastName: request.lastName, 
        cpf: request.cpf,
        email: request.email,
        address: request.address,
        phone1: request.phone1,
        phone2: request.phone2, 
        birthDate: request.birthDate,
        gender: request.gender 
    };

    const { data } = await axios.put(`http://localhost:3000/users/${id}`, dataBody);

    return data as UserResponse;
};

const deleteById = async(id: string): Promise<UserResponse> =>{

    const {data} = await axios.delete(`http://localhost:3000/users/${id}`)


    return data as UserResponse

}

export default {getAll, getById, create, deleteById, updateById }