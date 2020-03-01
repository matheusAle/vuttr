import React from 'react';
import Modal from '../Modal';
import {Tools} from "../Api";
import {ActionsContainer, Title} from "../styles";
import {Button, ButtonPrimary} from "../Button";

export default ({ close, onDelete, item }) => {

    const deleteItem = async e => {
        e.stopPropagation();
        e.preventDefault();

        try {
            await Tools.delete(item.id);

            close();
            onDelete()
        } catch (e) {
            console.error(e);
        }


    };


    return (
        <Modal>
            <Title>
                Remove Tool
            </Title>
            <p>
                Are you sure you want to remove { item.name }?
            </p>

            <ActionsContainer>
                <Button onClick={() => close && close()}>
                    Cancel
                </Button>
                <ButtonPrimary onClick={deleteItem}>
                    Yeas, Remove
                </ButtonPrimary>
            </ActionsContainer>
        </Modal>
    )
}
