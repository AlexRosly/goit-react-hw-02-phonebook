import styled from '@emotion/styled';

export const Label = styled.label`
display: flex;
flex-wrap: wrap;
flex-direction: column;
font-weight: 700;
font-size: 16px;
`;

export const Input = styled.input`
margin: 10px 0px;
margin-bottom: 30px;
font-size: 20px;
width: 300px;
border: 2px solid black;

&:focus {
    outline: 3px solid blue;
}
`;