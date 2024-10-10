import React from 'react';
import Header from '../components/Header';
import { Container, CartItem, Button } from '../styles/CarrinhoStyles';

const Carrinho = () => {
return (
    <>
    <Header />
    <Container>
        <h2>Meu Carrinho</h2>
        <CartItem>
            <p>Sushi Especial - R$ 49,99</p>
        </CartItem>
        <CartItem>
            <p>Pizza Margherita - R$ 39,99</p>
        </CartItem>
        <Button>Ir para Pagamento</Button>
    </Container>
    </>
    );
};

export default Carrinho;