import styled from '@emotion/styled';

export const FormSection = styled.div`
width: 500px;
border: 2px solid black;
border-radius: 5px;
`;

export const Forms = styled.form`
padding : 20px 20px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`;

export const Label = styled.label`
display: flex;
flex-wrap: wrap;
flex-direction: column;
font-size: 20px;
font-weight: 500;

`;

export const Input = styled.input`
margin: 10px 0px;
margin-bottom: 30px;
font-size: 20px;
font-weight: 700;
width: 300px;
border: 2px solid black;

&:focus {
    outline: 3px solid blue;
    
}
`;

export const Button = styled.button`
font-size: 14px;
font-weight: 700;
height: 40px;
width: 200px;
border-radius: 5px;
background-color: #00FF00;
`;