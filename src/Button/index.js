import styled from 'styled-components';

export const Button = styled.button `
  padding: 1ch 3ch;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border: none;
  color: #365DF0;
`;

export const ButtonPrimary = styled(Button) `
  color: white;
  background-color: #365DF0;
  transition: background-color 300ms cubic-bezier(.77,.32,.74,.28);
  
  &:hover {
    background-color: #2F55CC;  
    transition: background-color 200ms cubic-bezier(.46,.84,.17,1);
  }
  
  &:active {
    background-color: #244AA8;
  }
`;
