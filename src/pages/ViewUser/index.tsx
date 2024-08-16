import { Typography, Button, Grid, Box } from '@mui/material';
import * as S from './styles';
import { CrudUsersApi } from '../../providers/crud-users-api';
import { useEffect, useState } from 'react';
import { UserResponse } from '../../providers/crud-users-api/resources/v1/response/getUsersReponse';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      if (!id) {
        toast.error('ID do usuário não encontrado.');
        navigate('/');
        return;
      }

      try {
        const userData = await CrudUsersApi.V1.Users.getById(id);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar dados do usuário.');
        navigate('/');
      }
    };

    loadUserData();
  }, [id, navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <S.Container>
      <Typography variant="h6" align="center">Detalhes do Usuário</Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Nome:</strong> {user?.firstName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Sobrenome:</strong> {user?.lastName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>CPF:</strong> {user?.cpf}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Email:</strong> {user?.email}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Gênero:</strong> {user?.gender}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Endereço:</strong> {user?.address}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Telefone 1:</strong> {user?.phone1}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1"><strong>Data de Nascimento:</strong> {user?.birthDate}</Typography>
        </Grid>
      </Grid>
      
      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Voltar
        </Button>
      </Box>

      <ToastContainer />
    </S.Container>
  );
};
