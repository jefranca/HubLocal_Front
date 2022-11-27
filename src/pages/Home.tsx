import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import StyledTitle from '../styles/StyledTitle';
import StyledText from '../styles/StyledText';
import StyledDiv from '../styles/StyledDiv';
import UserContext from '../context/UserContext';

export default function Home() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (login) navigate('/dashboard');
  }, [login, navigate]);

  return (
    <>
      <StyledTitle> Bem vindo ao HubLocal</StyledTitle>
      <StyledDiv>
        <StyledButton onClick={() => navigate('/sign-up')}>Quero começar</StyledButton>
        <StyledText onClick={() => navigate('/sign-in')}>Já tenho cadastrado</StyledText>
      </StyledDiv>
    </>
  );
}

const StyledButton = styled.button`
    width: 210px;
    height: 48px;
    background-color: #5c5c5c;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
`;
