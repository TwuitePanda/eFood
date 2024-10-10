
import React from 'react';
import Header from '../components/Header';
import { Container } from '../styles/ConfirmacaoStyles';

const Confirmacao = () => {
return (
    <>
    <Header />
    <Container>
        <h2>Pedido Confirmado!</h2>
        <p>Seu pedido foi realizado com sucesso. Agradecemos por comprar conosco!</p>
    </Container>
    </>
    );
};

export default Confirmacao;