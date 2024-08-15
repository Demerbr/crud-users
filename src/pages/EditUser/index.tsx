import { useParams } from "react-router-dom";

export const EditUser = ()=>{
    const { id } = useParams();
  
    return <h1>Editando Usuário {id}</h1>;
}