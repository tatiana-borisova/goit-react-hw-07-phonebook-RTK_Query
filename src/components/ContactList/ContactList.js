import React from 'react';
import Contact from '../Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={s.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={s.contact}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
