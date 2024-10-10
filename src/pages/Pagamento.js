
import React from 'react';
import Header from '../components/Header';
import { Container, Form, Button } from '../styles/PagamentoStyles';

const Pagamento = () => {
return (
    <>
    <Header />
    <Container>
        <h2>Pagamento</h2>
        <Form>
            <label>Número do Cartão:</label>
            <input type="text" />
            <label>Nome no Cartão:</label>
            <input type="text" />
            <label>Data de Validade:</label>
            <input type="text" />
            <label>CVV:</label>
            <input type="text" />
            <Button>Confirmar Pagamento</Button>
        </Form>
    </Container>
    </>
    );
};

export default Pagamento;