import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateContactMutation } from '../../redux/contacts/contactSlice';
import s from './Form.module.css';

const Form = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'phone' && setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isNameHere = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const isNumberHere = contacts.find(contact => contact.number === number);

    if (isNameHere || isNumberHere) {
      alert(
        `${isNameHere ? name : ''}${
          isNumberHere ? ' ' + number : ''
        } is already in contacts`,
      );
    } else {
      createContact({ name, number });
      toast.success('Contact was added!');
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button} disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Add contact'}
      </button>
    </form>
  );
};

export default Form;
