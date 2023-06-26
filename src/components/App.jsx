import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/phoneBookSlice';
export function App() {
  const dispatch = useDispatch();
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
