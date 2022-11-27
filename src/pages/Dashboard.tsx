import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import UserContext from '../context/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import { getMyCompanies } from '../services/API';

export default function CompanyPage() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [companies, setCompanies] = useState<any[]>([])

  useEffect(() => {
    if (!login) navigate('/sign-in');
  }, [login, navigate]);

  useEffect(() => {
    getMyCompanies()
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <HeaderComponent />

      <StyledDiv>
        <StyledTitle>Minhas Empresas</StyledTitle>   <StyledSpan onClick={() => navigate('/company-add')}><AiOutlinePlusCircle /> Adicionar Empresa</StyledSpan>
      </StyledDiv>
      {companies.length ?
        <CompaniesDiv>

          {companies.map((company) => {
            return (
              <CompanyCard onClick={()=>navigate(`/company/${company.id}`)}>
                <div>
                  <span>Nome da Empresa: </span><span>{company.name}</span>
                </div>
                <div>
                  <span>CNPJ da Empresa: </span><span>{company.cnpj}</span>
                </div>
                <div>
                  <span>Descrição da Empresa: </span><span>{company.description}</span>
                </div>
              </CompanyCard>)
          })}
        </CompaniesDiv>
        : <></>}
    </>
  );
}

const CompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #cfcfcf;
  height: 80px;
  color: black;
  box-sizing: border-box;
  padding: 8px;
  justify-content: space-around;
  border-radius: 10px;
  margin-bottom: 50px;
`;

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
  flex-direction: column;
  width:90%;
  background-color: #454545;
  height: 80vh;
  margin-top: 20px;
  align-items: center;
  box-sizing: border-box;
  padding: 60px;
  border-radius:20px;
`;