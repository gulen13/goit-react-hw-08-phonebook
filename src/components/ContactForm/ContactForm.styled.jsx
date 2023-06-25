import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  width: 200px;
`;

export const Input = styled.input`
  height: 25px;
  border: 1px solid #080903;
  border-radius: 6px;
`;

export const Button = styled.button`
  width: 150px;
  font-size: small;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #48a567;
  cursor: pointer;
`;
