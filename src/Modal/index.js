import React from 'react';
import {Container, Content} from "./styles";



export default ({ children, onClick }) => {

    return (
        <Container onClick={onClick}>
            <Content onClick={e => e.stopPropagation()}>
                {children}
            </Content>
        </Container>
    )
}
