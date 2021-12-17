import { useFetchContactsQuery } from './redux/contacts/contactSlice';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getVisibleContacts } from './helpers/getVisibleContacts';
import Loader from 'react-loader-spinner';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export const App = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  return (
    <>
      <Section title="Phonebook">
        <Form contacts={data} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={setFilter} value={filter} />
        {data && <ContactList contacts={getVisibleContacts(data, filter)} />}
        {isFetching && (
          <Loader type="Puff" color="#7dcdff" style={{ textAlign: 'center' }} />
        )}
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
