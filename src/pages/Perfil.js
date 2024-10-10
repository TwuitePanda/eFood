import React from 'react';
import Header from '../components/Header';
import { Container, UserInfo } from '../styles/PerfilStyles';

const Perfil = () => {
return (
    <>
        <Header />
        <Container>
        <h2>Meu Perfil</h2>
            <UserInfo>
            <p>Nome: João Pedro</p>
            <p>Email: joao.pedro@example.com</p>
            </UserInfo>
        </Container>
    </>
    );
};

export default Perfil;