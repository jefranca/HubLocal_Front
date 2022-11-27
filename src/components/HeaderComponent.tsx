import styled from 'styled-components';

export default function HeaderComponent() {
  return (
      <Header>
        <StyledSpan>HubLocal</StyledSpan>
        <StyledLogout>Logout</StyledLogout>
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