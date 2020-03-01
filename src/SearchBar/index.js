import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styles'
import { Input, TagSearch } from './styles';

export default ({ onSearch }) => {

    const [onlyTags, setOnlyTags] = useState(false);
    const [string, setString] = useState('');
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;

        } else {
            onSearch({ string, onlyTags });
        }
    }, [ onlyTags, string ]);

    return (
        <Container>
            <Input type="search"
                   onChange={(e) => setString(e.target.value)}/>
            <TagSearch>
                <input type="checkbox" checked={onlyTags} onChange={() => setOnlyTags(!onlyTags)}/>
                Search in tags only
            </TagSearch>
        </Container>
    )
}

