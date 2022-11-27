import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import StyledTitle from '../styles/StyledTitle';
import StyledDiv from '../styles/StyledDiv';
import StyledText from '../styles/StyledText';
import StyledButton from '../styles/StyledButton';
import { postSignIn } from '../services/API';
import UserContext from '../context/UserContext';
import { saveToLocalStorage } from '../utils/localStorage';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setLogin } = useContext(UserContext);

  useEffect(() => {
    if (login) navigate('/dashboard');
  }, [login, navigate]);

  function signIn(e) {
    e.preventDefault();
    const body = { email, password };
    postSignIn(body)
      .then((res) => {
        alert('Logado com Sucesso');
        saveToLocalStorage(res.data);
        setLogin(res.data);
        navigate('/dashboard');
      })
      .catch((error) => {
        if (error.response.status === 401) alert('Senha Incorreta');
        else if (error.response.status === 404) alert('E-mail não cadastrado');
        else alert('Erro Desconhecido');
      });
  }
  return (
    <>
      <StyledTitle> Bem vindo ao HubLocal</StyledTitle>
      <StyledForm onSubmit={signIn}>
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
        </div>
        <StyledDiv>
          <StyledButton type="submit">Login</StyledButton>
          <StyledText onClick={() => navigate('/sign-up')}>Ainda não sou cadastro</StyledText>
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
