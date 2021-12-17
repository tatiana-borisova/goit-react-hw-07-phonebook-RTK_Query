import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import s from './Contact.module.css';

const Contact = ({ data }) => {
  const { name, phone, id } = data;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <div className={s.contact}>
      <span className={s.name}>{name}:</span>
      <a className={s.number} href={`tel:${phone}`}>
        {phone}
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
    phone: PropTypes.string.isRequired,
  }),
};

export default Contact;
