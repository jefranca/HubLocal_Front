import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import StyledDiv from '../styles/StyledDiv';
import StyledText from '../styles/StyledText';
import { postCompany } from '../services/API';

export default function AddCompanyForm() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [name, setName] = useState ('');
  const [cnpj, setCnpj] = useState('');
  const [description, setDescription] = useState('');
  const [localName, setLocalName] = useState('');
  const [localCep, setLocalCep] = useState('');
  const [responsibleName, setResponsibleName] = useState('');
  const [responsiblePhone, setResponsiblePhone] = useState('');
  const [responsibleCep, setResponsibleCep] = useState('');

  useEffect(() => {
    if (!login) navigate('/sign-in');
  }, [login, navigate]);

  function createCompany(e) {
    e.preventDefault();
    const body = { 
      name, 
      cnpj,
      description,
      local:{
        name:localName,
        cep:localCep
      },
      responsible:{
        name:responsibleCep,
        phone:responsiblePhone,
        cep:responsibleCep
      }
    };
    postCompany(body,login)
    .then((res)=>navigate('/dashboard'))
    .catch((err)=>console.error(err))
  }

  return (
    <>
      <HeaderComponent />
      <Container>
        <StyledForm onSubmit={createCompany}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Nome da empresa"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="CNPJ da empresa(somente números)"
              value={cnpj}
              onChange={(e) => { setCnpj(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="Descrição da empresa"
              value={description}
              onChange={(e) => { setDescription(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="Nome da sede principal"
              value={localName}
              onChange={(e) => { setLocalName(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="CEP da sede principal"
              value={localCep}
              onChange={(e) => { setLocalCep(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="Nome do responsável pela sede principal"
              value={responsibleName}
              onChange={(e) => { setResponsibleName(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="Telefone do resposável pela sede principal"
              value={responsiblePhone}
              onChange={(e) => { setResponsiblePhone(e.target.value); }}
              required
            />
            <input
              type="text"
              placeholder="CEP do resposável pela sede principal"
              value={responsibleCep}
              onChange={(e) => { setResponsibleCep(e.target.value); }}
              required
            />
          </div>
          <StyledDiv>
            <StyledButton type="submit">Enviar Cadastro</StyledButton>
            <StyledText onClick={() => navigate('/dashboard')}>Voltar para minhas empresas</StyledText>
          </StyledDiv>
        </StyledForm>
      </Container>


    </>
  );
}

const StyledButton = styled.button`
    width: 560px;
    height: 56px;
    background-color: #5c5c5c;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 700;
    margin-top: 80px;
`;

const Container=styled.div`
margin-top: 130px;
`;

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
            margin-bottom: 18px;
            width:800px;
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
