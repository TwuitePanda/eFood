import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #ff6347;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    color: white;
`;

const Nav = styled.nav`
    a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-weight: bold;
}
`;

const Header = () => {
return (
    <HeaderContainer>
    <Logo>eFood</Logo>
        <Nav>
        <Link to="/">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/carrinho">Carrinho</Link>
        </Nav>
    </HeaderContainer>
    );
};

export default Header;