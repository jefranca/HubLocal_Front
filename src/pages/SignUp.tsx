import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import StyledTitle from '../styles/StyledTitle';
import StyledDiv from '../styles/StyledDiv';
import StyledText from '../styles/StyledText';
import StyledButton from '../styles/StyledButton';
import { postSignUp } from '../services/API';
import UserContext from '../context/UserContext';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (login) navigate('dashboard');
  }, [login, navigate]);

  function signUp(e) {
    e.preventDefault();
    if (password !== confirmedPassword) return alert('Confirmação de Senha Incorreta');
    const body = { email, password };
    postSignUp(body)
      .then((res) => {
        alert('Conta criada com Sucesso');
        navigate('/sign-in');
      })
      .catch((error) => {
        if (error.response.status === 409) alert('E-mail já cadastrado');
        else alert('Erro Desconhecido');
      });
  }
  return (
    <>
      <StyledTitle> Bem vindo ao HubLocal</StyledTitle>
      <StyledForm onSubmit={signUp}>
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            required
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmedPassword}
            onChange={(e) => { setConfirmedPassword(e.target.value); }}
            required
          />
        </div>
        <StyledDiv>
          <StyledButton type="submit">Cadastrar</StyledButton>
          <StyledText onClick={() => navigate('/sign-in')}>Já tenho cadastro</StyledText>
        </StyledDiv>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    align-items: center;

    & .inputs{
        display: flex;
        flex-direction: column;
        height: 289px;

        & input{
            margin-bottom: 9px;
        }
    }

    & input{
        width: 325px;
        height: 64px;
        border:none;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        font-size: 25px;
        font-weight: 500;
    }
`;
