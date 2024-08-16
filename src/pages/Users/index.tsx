import {
  TableBody,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import * as S from './styles';
import { CrudUsersApi } from '../../providers/crud-users-api';
import { useEffect, useState } from 'react';
import { UserResponse } from '../../providers/crud-users-api/resources/v1/response/getUsersReponse';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const fetchData = async () => {
    const response = await CrudUsersApi.V1.Users.getAll();
    setUsers(response);
  };

  const handlerDeleteUser = async (id: string) => {
    await CrudUsersApi.V1.Users.deleteById(id);
    fetchData(); 
    handleClose(); 
  };

  const handleOpen = (id: string) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUserId(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <S.StyledTableContainer>
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
                  <Link to={`/edit/${user.id}`} >
                  <S.ActionButton variant="contained" color="primary">Edit</S.ActionButton>
                  </Link>
                  <S.ActionButton
                    onClick={() => handleOpen(user.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </S.ActionButton>
                </S.StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </S.StyledTable>
      </S.StyledTableContainer>

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmar exclusão"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => handlerDeleteUser(selectedUserId as string)}
            color="secondary"
            autoFocus
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
