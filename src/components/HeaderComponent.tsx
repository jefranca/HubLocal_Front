import { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import { deleteToken } from '../services/API';

export default function HeaderComponent() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  function logout(){
    deleteToken(login)
    .then((res)=> {
    localStorage.clear()
    navigate('/')
  }
    )
    .catch(err=> console.error(err))
  }

  return (
      <Header>
        <StyledSpan>HubLocal</StyledSpan>
        <StyledLogout onClick={logout}>Logout</StyledLogout>
      </Header>
  )
}

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1C1C1C;
  position: fixed;
  top:0
`;

const StyledSpan = styled.span`
  font-size: 30px
`;

const StyledLogout = styled.span`
  position: absolute  ;
  font-size: 15px;
  right: 30px;
`;