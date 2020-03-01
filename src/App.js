import React, { useState, useEffect } from 'react';
import { Container, Header, ToolBar, AddButton, ToolsList } from './styles'
import SearchBar from './SearchBar'
import { Tools } from './Api';
import ListItem from './ListItem';
import Create from './Create';
import Delete from './Delete';
import debounce from 'lodash/debounce';

function App() {

    const [list, setList] = useState([]);
    const [creating, setCreating] = useState(false);
    const [deletingItem, setDeletingItem] = useState(null);

    useEffect(() => {
        Tools.getAll()
            .then((data) => {
                setList(data);
            })
            .catch(console.error)

    }, []);

    const search = debounce(({ string, onlyTags }) => {
        Tools[onlyTags ? 'searchForTag' : 'searchFor'](string)
            .then((data) => {
                setList(data);
            })
            .catch(console.error)
    }, 500);

    return (
        <Container>
            <Header>
                <h1>
                    VUTTR
                </h1>
                <p>
                    Very Useful Tools to Remember
                </p>
            </Header>
            <ToolBar>
                <SearchBar onSearch={search}/>
                <AddButton onClick={() => setCreating(true)}>
                    Add
                </AddButton>
            </ToolBar>
            <ToolsList>
                {list.map(item => <ListItem key={item.id} item={item} onRemove={() => setDeletingItem(item)}/>)}
            </ToolsList>

            { creating && (
                <Create
                    addItem={(item) => setList([ item, ...list ])}
                    close={() => setCreating(false)}
                />
            )}

            { deletingItem && (
                <Delete
                    item={deletingItem}
                    onDelete={() => {
                        setList(list => list.filter(({ id }) => id !== deletingItem.id));
                        setDeletingItem(null);
                    }}
                    close={() => setDeletingItem(null)}
                />
            )}

        </Container>
    );
}

export default App;
