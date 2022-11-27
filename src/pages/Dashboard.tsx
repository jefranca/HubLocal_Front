import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import UserContext from '../context/UserContext';
import HeaderComponent from '../components/HeaderComponent';

export default function Dashboard() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  useEffect(() => {
    if (!login) navigate('/sign-in');
  }, [login, navigate]);

  return (
    <>
      <HeaderComponent />

      <StyledDiv>
        <StyledTitle>Minhas Empresas</StyledTitle>   <StyledSpan><AiOutlinePlusCircle/> Adicionar Empresa</StyledSpan>
      </StyledDiv>

      <CompaniesDiv>

      </CompaniesDiv>


    </>
  );
}

const StyledTitle = styled.span`
    font-size: 28px;
    font-weight: 700;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  margin-left: 10px;
  position: absolute;
  right: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width:500px;
  position: relative;
  margin-top: 100px;
`;

const CompaniesDiv = styled.div`
  display: flex;
  flex-direction: row;
  width:90%;
  background-color: #454545;
  height: 80vh;
  margin-top: 20px;
`;