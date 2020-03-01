import React from 'react';
import {Container, Content} from "./styles";



export default ({ children }) => {

    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    )
}
