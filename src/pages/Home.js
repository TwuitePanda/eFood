
import React from 'react';
import Header from '../components/Header';
import { Container, Card, ProductImage, Title, Price, Description, Button } from '../styles/HomeStyles';

const Home = () => {
return (
    <>
    <Header />
    <Container>
        <Card>
            <ProductImage src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg" alt="Sushi" />
            <Title>Sushi Especial</Title>
            <Price>R$ 49,99</Price>
            <Description>O melhor sushi da cidade!</Description>
            <Button>Adicionar ao Carrinho</Button>
        </Card>
        <Card>
            <ProductImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0UnZxFchHG9fLCoag54gZFII3uHz1RYWpg&s" alt="Pizza" />
            <Title>Pizza Margherita</Title>
            <Price>R$ 39,99</Price>
            <Description>Pizza com molho fresco e manjericão.</Description>
            <Button>Adicionar ao Carrinho</Button>
        </Card>
    </Container>
    </>
    );
};

export default Home;