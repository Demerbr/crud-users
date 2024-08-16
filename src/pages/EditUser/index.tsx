import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles'
import { TextField, Button, MenuItem } from '@mui/material';
import { CrudUsersApi } from '../../providers/crud-users-api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup.object({
  firstName: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório').length(11, 'CPF deve ter 11 dígitos'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  phone1: yup.string().required('Telefone 1 é obrigatório'),
  phone2: yup.string().optional(),
  birthDate: yup.string().required('Data de nascimento é obrigatória'), 
  gender: yup.string().oneOf(['male', 'female', 'other'], 'Selecione o gênero').required('Gênero é obrigatório')
}).required();

interface IFormInputs {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  address: string;
  phone1: string;
  phone2?: string;
  birthDate: string; 
  gender: 'male' | 'female' | 'other';
}

export const EditUser = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    const loadUserData = async () => {
      if (!id) {
        toast.error('ID do usuário não encontrado.');
        navigate('/');
        return;
      }

      try {
        const userData = await CrudUsersApi.V1.Users.getById(id);
        Object.keys(userData).forEach(key => {
          setValue(key as keyof IFormInputs, userData[key]);
        });
        setLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar dados do usuário.');
        navigate('/s');
      }
    };

    loadUserData();
  }, [id, setValue, navigate]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (!id) {
      toast.error('ID do usuário não encontrado.');
      return;
    }

    try {
      await CrudUsersApi.V1.Users.updateById(id, data);
      toast.success('Usuário atualizado com sucesso!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Erro ao atualizar usuário. Tente novamente.');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Sobrenome"
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        label="CPF"
        {...register('cpf')}
        error={!!errors.cpf}
        helperText={errors.cpf?.message}
      />
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Endereço"
        {...register('address')}
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <TextField
        label="Telefone 1"
        {...register('phone1')}
        error={!!errors.phone1}
        helperText={errors.phone1?.message}
      />
      <TextField
        label="Telefone 2"
        {...register('phone2')}
      />
      <TextField
        label="Data de Nascimento"
        type="date"
        {...register('birthDate')}
        error={!!errors.birthDate}
        helperText={errors.birthDate?.message}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Gênero"
        select
        {...register('gender')}
        error={!!errors.gender}
        helperText={errors.gender?.message}
      >
        <MenuItem value="male">Masculino</MenuItem>
        <MenuItem value="female">Feminino</MenuItem>
        <MenuItem value="other">Outro</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" type="submit">
        Atualizar
      </Button>

      <ToastContainer />
    </S.FormContainer>
  );
};
