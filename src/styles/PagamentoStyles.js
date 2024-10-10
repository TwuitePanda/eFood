
import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

label {
    margin-bottom: 10px;
}

input {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
}
`;

export const Button = styled.button`
    background-color: #ff6347;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
`;