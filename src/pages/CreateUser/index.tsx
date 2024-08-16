import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles'
import { TextField, Button, MenuItem } from '@mui/material';
import { CrudUsersApi } from '../../providers/crud-users-api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
  phone2?: string | undefined
  birthDate: string; 
  gender: 'male' | 'female' | 'other';
}

export const CreateUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await CrudUsersApi.V1.Users.create(data);
      toast.success('Usuário criado com sucesso!');
      setTimeout(() => {
        navigate('/listagem-de-usuarios');
      }, 2000);
    } catch (error) {
      toast.error('Erro ao criar usuário. Tente novamente.');
    }
  };

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
        Cadastrar
      </Button>

      <ToastContainer />
    </S.FormContainer>
  );
};
