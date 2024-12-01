import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx";

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RigthContainer,
  Title,
  Link,
} from './styles.js';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button/index.jsx';

export function Login() {
  const navigate = useNavigate();

  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Digite a senha'),
  })
    .required();


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  console.log(errors)
  const onSubmit = async (data) => {

    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData.admin) {
                navigate('/pedidos')
              } else {
                navigate('/')
              }
            }, 2000);
            return 'Seja bem-vindo'
          },
        },
        error: 'Dados incorretos',
      },
    );
    putUserData(userData);


  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RigthContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit" >Entrar</Button>
        </Form>

        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RigthContainer>
    </Container>
  );
}
