import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import s from './Contact.module.css';

const Contact = ({ data }) => {
  const { name, number, id } = data;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <div className={s.contact}>
      <span className={s.name}>{name}:</span>
      <a className={s.number} href={`tel:${number}`}>
        {number}
      </a>
      <button
        className={s.button}
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
