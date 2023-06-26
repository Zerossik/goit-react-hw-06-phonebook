import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(({ contacts }) => contacts); // получаем значение стейта - contacts

  return (
    <Section title={'Phonebook'}>
      <PhoneForm />
      <Filter />
      <ContactsList
        title={contacts.length === 0 ? 'Phone book is empty' : 'Contacts'}
      />
    </Section>
  );
}
