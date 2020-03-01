import styled from 'styled-components';

const Alert = styled.div `
  border-radius: 5px;
  padding: 5px;

`;

export const Warning = styled(Alert) `
  background: #FFBB43 0 0 no-repeat padding-box;
  opacity: 1;
  color: white;
  font: Semibold 20px/26px Source Sans Pro;
  
  ul {
    list-style: none;
    padding: 0;
  }
`;



