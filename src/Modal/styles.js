import styled from 'styled-components';

export const Container = styled.div `
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.3);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Content = styled.div `
    padding: 15px;
    background-color: white;
    box-shadow: 0 5px 7px 0 rgba(0,0,0,0.05);
    min-width: 300px;
`;
