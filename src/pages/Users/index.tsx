
import { TableBody,  TableHead, TableRow, Paper, } from '@mui/material';
import * as S from './styles'
import { CrudUsersApi } from '../../providers/crud-users-api';
import { useEffect, useState } from 'react';
import { UserResponse } from '../../providers/crud-users-api/resources/v1/response/getUsersReponse';


export const Users = () => {

  const [users, setUsers] = useState<UserResponse[]>([])


  const fetchData = async () =>{
     
    const response = await CrudUsersApi.V1.Users.getAll()

    console.log(response)

    setUsers(response)
  }

  useEffect(()=>{
    fetchData()
  }, [])




  return (
    <S.StyledTableContainer component={Paper}>
      <S.StyledTable>
        <TableHead>
          <TableRow>
            <S.StyledTableHeadCell>ID</S.StyledTableHeadCell>
            <S.StyledTableHeadCell>Name</S.StyledTableHeadCell>
            <S.StyledTableHeadCell>Email</S.StyledTableHeadCell>
            <S.StyledTableHeadCell>CPF</S.StyledTableHeadCell>
            <S.StyledTableHeadCell>Gênero</S.StyledTableHeadCell>
            <S.StyledTableHeadCell>Endereço</S.StyledTableHeadCell>

            <S.StyledTableHeadCell align="center">Actions</S.StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <S.StyledTableCell>{user.id}</S.StyledTableCell>
              <S.StyledTableCell>{user.firstName}</S.StyledTableCell>
              <S.StyledTableCell>{user.email}</S.StyledTableCell>
              <S.StyledTableCell>{user.cpf}</S.StyledTableCell>
              <S.StyledTableCell>{user.gender}</S.StyledTableCell>
              <S.StyledTableCell>{user.address}</S.StyledTableCell>

              <S.StyledTableCell align="center">
                <S.ActionButton variant="contained" color="primary">Edit</S.ActionButton>
                <S.ActionButton variant="contained" color="secondary">Delete</S.ActionButton>
              </S.StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </S.StyledTable>
    </S.StyledTableContainer>
  );
};

