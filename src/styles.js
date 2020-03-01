import styled from 'styled-components';
import * as Button from './Button';

export const Container = styled.div `
  max-width: 560px;
  margin: auto;
  
  * {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }
  
  .highlight {
    background-color: yellow;
  }
`;

export const Header = styled.header `
   h1 {
      font-size: 42px;
      letter-spacing: .84px;
      line-height: 50px;
      color: #170C3A;
      font-weight: 600;
   }
   
   p {
      font-weight: 600;         
      font-size: 24px;
      color: #170C3A;
      letter-spacing: .48px;
      line-height: 30px;      
   }
`;

export const ToolBar = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled(Button.ButtonPrimary) `
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3E%3Cg transform='translate(-1650 -2407)' fill='none' stroke='white' stroke-width='4'%3E%3Ccircle cx='30' cy='30' r='30' transform='translate(1651 2408)'/%3E%3Cpath d='M1681 2417v43m21-21h-42' stroke-miterlimit='10'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: 3ch 50%;
  padding: 1ch 3ch 1ch calc(3ch + 15px + 5px);
`;

export const ToolsList = styled.ul `
  list-style: none;
  padding: 0;
`;

export const ActionsContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    > * {
      margin-left: 10px;
    }
`;

export const Title = styled.h2 `
    font-size: 18px;
    text-align: left;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #170C3A;
    opacity: 1;
`;
