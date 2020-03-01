import styled from 'styled-components';

export const Container = styled.div `
  padding: 15px 15px 15px 15px;
  margin-bottom: 15px;
  border: 1px solid #EBEAED;
  box-shadow: 0 5px 7px 0 rgba(0,0,0,0.05);
`;

export const Title = styled.a `
  color: #365DF0;
  font-size: 16px;
  display: block;
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const Description = styled.p `
  font-size: 12px;
  color: #170C3A;
  margin: 0;
`;

export const TagsList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: inline-block;
    margin-right: 10px;
    font-weight: 500;
    font-size: 12px;
    
    &:before {
      content: '#';
    }
  }
`;