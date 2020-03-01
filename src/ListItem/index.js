import React from 'react';
import { Container, Title, Description, TagsList } from './styles'

export default ({ item, onRemove }) => {

    return (
        <Container>
            <Title
                target="_blank"
                dangerouslySetInnerHTML={{ __html: item.name, href: item.link }}
            />

            <span onClick={() => onRemove && onRemove()}>
                remove
            </span>

            <Description
                dangerouslySetInnerHTML={ { __html: item.description } }
            />

            <TagsList>
                {item.tags && item.tags.map((tag) => (
                    <li
                        key={tag}
                        dangerouslySetInnerHTML={ { __html: tag } }
                    />
                ))}
            </TagsList>
        </Container>
    )
}
