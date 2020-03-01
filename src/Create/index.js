import React from 'react';
import {Form} from './styles'
import Modal from '../Modal';
import {Input, InputContainer, Textarea} from '../Input';
import {ActionsContainer, AddButton} from "../styles";
import {ButtonPrimary} from "../Button";
import {Warning} from "../Alert";
import {Tools} from "../Api";

const isEmptyString = string => (!string || (string && string.trim() === ''));

export default ({ close, addItem }) => {

    const [validationMessages, setValidationMessages]= React.useState([]);
    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [tags, setTags] = React.useState('');
    const [waiting, setWaiting] = React.useState(false);

    const save = async event => {
        event.preventDefault();
        event.stopPropagation();

        let validationMessages = [];

        if (isEmptyString(name)) {
            validationMessages = [...validationMessages, 'Name is required'];
        }

        if (isEmptyString(url)) {
            validationMessages = [...validationMessages, 'Url is required'];
        }

        if (isEmptyString(description)) {
            validationMessages = [...validationMessages, 'Description is required'];
        }

        if (isEmptyString(tags)) {
            validationMessages = [...validationMessages, 'Tags is required'];
        }

        if (validationMessages.length > 0) {
            setValidationMessages(validationMessages);
            return;
        }


        try {
            setWaiting(true);
            const result = await Tools.create({
                name,
                description,
                url,
                tags: tags
                    .split(/((?:\w+)|(?:'.+'))/gm)
                    .filter(tag => !isEmptyString(tag))
                    .map(tag => tag.replace('\'', ''))
            });
            addItem && addItem(result);
            close()
        } catch (e) {
            console.error(e);
            setWaiting(false)
        }
    };

    return (
        <Modal onClick={close}>
            <Form onClick={e => e.stopPropagation()} onSubmit={save}>

                {validationMessages && validationMessages.length > 0 && (
                    <Warning>
                        <ul>
                            { validationMessages.map(message => (
                                <li key={message}>{ message }</li>
                            )) }
                        </ul>
                    </Warning>
                )}

                <InputContainer>
                    <label>Name: *</label>
                    <Input value={name} onChange={({ target: { value }}) => setName(value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Url: *</label>
                    <Input value={url} onChange={({ target: { value }}) => setUrl(value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Description: *</label>
                    <Textarea value={description} onChange={({ target: { value }}) => setDescription(value)}/>
                </InputContainer>
                <InputContainer>
                    <label>Tags: *</label>
                    <Input value={tags} onChange={({ target: { value }}) => setTags(value)}/>
                    <small>words and text inside '&lt;words&gt;' is an tag.</small>
                </InputContainer>
                <ActionsContainer>
                    <ButtonPrimary type="submit" disabled={waiting}>
                        Add Tool
                    </ButtonPrimary>
                </ActionsContainer>
            </Form>
        </Modal>
    )

}
