import styled from 'styled-components';
import { Input as BaseInput } from '../Input';

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(BaseInput) `
  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;stroke:%23170c3a;stroke-miterlimit:10;stroke-width:2px%7D%3C/style%3E%3C/defs%3E%3Cg transform='translate(-1272 -1799)'%3E%3Cpath class='a' d='M1302 1829l17 17'/%3E%3Ccircle class='a' cx='17' cy='17' r='17' transform='translate(1273 1800)'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: 5px 50%;
  padding: 1ch 1ch 1ch calc(5px + 15px + 5px);
`;

export const TagSearch = styled.label `
  font-size: 12px;
  line-height: 12px;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  
  input[type=checkbox] {
    margin: 0 .8ch 0 0;
    appearance: none;
    
    &::before {
      content: '';
      width: 13px;
      height: 13px;
      display: block;
      background: #F5F4F6;
      border: 1px solid #EBEAED;
    }
    
    &:checked::before {
      background-color: #365DF0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='61' height='43'%3E%3Cpath d='M1 21l20 21L61 1' fill='none' stroke='white' stroke-miterlimit='10' stroke-width='10'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 10px;
      background-position: 50%;
    }
  }
`;