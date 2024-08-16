export interface CreateUserRequest {
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