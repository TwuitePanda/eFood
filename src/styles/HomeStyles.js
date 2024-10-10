
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    width: 300px;
    margin: 20px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const ProductImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

export const Title = styled.h2`
    margin-top: 10px;
`;

export const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #ff6347;
`;

export const Description = styled.p`
    margin: 10px 0;
`;

export const Button = styled.button`
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 10px;
`;