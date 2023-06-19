import { useEffect, useRef, useState } from 'react';
import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setcontacts] = useState([]);
  const [filter, setfilter] = useState('');
  const prevContacts = useRef(contacts);

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem('contacts'));

    if (getContacts) {
      setcontacts(getContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts !== prevContacts.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      prevContacts.current = contacts;
    }
  }, [contacts]);

  const addContact = contact => {
    const result = contacts.find(({ name }) => name === contact.name);
    if (result) {
      alert('Rosie Simpson is already in contacts');
      return;
    }

    setcontacts([...contacts, contact]);
  };

  const handlerChangeFilter = ({ target }) => {
    setfilter(target.value);
  };

  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setcontacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <Section title={'Phonebook'}>
      <PhoneForm addContact={addContact} />
      <Filter filter={filter} handlerChangeFilter={handlerChangeFilter} />
      <ContactsList
        title={contacts.length === 0 ? 'Phone book is empty' : 'Contacts'}
        contacts={findByName}
        deleteContact={deleteContact}
      />
    </Section>
  );
}
