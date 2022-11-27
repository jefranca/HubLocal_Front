/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import { getOneCompany } from '../services/API';

export default function Dashboard() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [company, setCompany] = useState<any>([])

  const body = {
    companyId: Number(useParams().id)
  }

  useEffect(() => {
    if (!login) navigate('/sign-in');
  }, [login, navigate]);

  useEffect(() => {
    getOneCompany(body,login)
      .then((res) => setCompany(res.data))
      .catch((err) => console.error(err))
  }, [body])


  return (
    <>
      {company.length ?
        <>
          <HeaderComponent />
          <StyledDiv>
            <StyledTitle>{company[0].name}</StyledTitle>
          </StyledDiv>
          <CompaniesDiv>
            <div>
              <span>Nome da Empresa: </span><span>{company[0].name}</span>
            </div>
            <div>
              <span>CNPJ da Empresa: </span><span>{company[0].cnpj}</span>
            </div>
            <div>
              <span>Descrição da Empresa: </span><span>{company[0].description}</span>
            </div>
            <div>
              <p>Locais da Empresa: </p>
              <div>
                {company[0].local.map((local) => {
                  return (
                    <CompanyCard>
                      <div>
                        <span>Nome do local: </span><span>{local.name}</span>
                      </div>
                      <div>
                        <span>Endereço do local: </span><span>{local.adress}</span>
                      </div>
                      <div>
                        <span>Cidade do local: </span><span>{local.city}</span>
                      </div>
                      <div>
                        <span>Estado do local: </span><span>{local.state}</span>
                      </div>
                      <div>
                        <span>CEP do local: </span><span>{local.cep}</span>
                      </div>
                    </CompanyCard>
                  )
                })}
              </div>
            </div>
            <div>
              <p>Responsáveis da Empresa: </p>
              <div>
                {company[0].responsible.map((responsible) => {
                  return (
                    <CompanyCard>
                      <div>
                        <span>Nome do responsável: </span><span>{responsible.name}</span>
                      </div>
                      <div>
                        <span>Telefone do responsável: </span><span>{responsible.phone}</span>
                      </div>
                      <div>
                        <span>Endereço do responsável: </span><span>{responsible.adress}</span>
                      </div>
                      <div>
                        <span>Cidade do responsável: </span><span>{responsible.city}</span>
                      </div>
                      <div>
                        <span>Estado do responsável: </span><span>{responsible.state}</span>
                      </div>
                      <div>
                        <span>CEP do responsável: </span><span>{responsible.cep}</span>
                      </div>
                    </CompanyCard>
                  )
                })}
              </div>
            </div>
          </CompaniesDiv>
        </>
        :
        <></>
      }

    </>
  );
}


const StyledTitle = styled.span`
    font-size: 28px;
    font-weight: 700;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 100px;
`;

const CompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5c5c5c;
  padding: 15px;
  border-radius: 10px;
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

  & p{
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;