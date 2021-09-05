import React from 'react';
import { Button, List, Span } from './ContactList.styled';

const ContactList = ({contacts, onDelete}) => (
    <ul>
        {contacts.map((contact) =>
        (<List key={contact.name}><p>{contact.name}: <Span>{contact.number}</Span></p>
            <Button type="button" onClick={()=> onDelete(contact.name)}>Delete</Button>
        </List>))}
    </ul>
);

export default ContactList;