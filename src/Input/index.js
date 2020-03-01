import styled from 'styled-components';


export const InputContainer = styled.div `
    display: flex;
    margin: 8px;
    flex-direction: column;
    
    label {
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 5px;
    }
    
    input {
      width: 100%;
    }
    
    small {
      font-size: .7em;
      opacity: .7;
    }
`;
export const Input = styled.input `
  border: 1px solid #EBEAED;
  border-radius: 5px;
  font-size: 12px;
  background: #F5F4F6;
  padding: 1ch;
`;

export const Textarea = styled.textarea `
  border: 1px solid #EBEAED;
  border-radius: 5px;
  font-size: 12px;
  background: #F5F4F6;
  padding: 1ch;
`;
