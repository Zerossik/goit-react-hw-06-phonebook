import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  filterAction,
  removeContactAction,
} from 'redux/phoneBookSlice';
export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts); // получаем значение стейта - contacts
  const filter = useSelector(({ filter }) => filter); // получаем значение стейта - filter

  const addContact = contact => {
    //Добавляем контает, если контакта с таким именем не существует.
    const result = contacts.find(({ name }) => name === contact.name);
    if (result) {
      alert('Rosie Simpson is already in contacts');
      return;
    }
    dispatch(addContactAction(contact)); // отправляет объект с контактом в store
  };

  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Section title={'Phonebook'}>
      <PhoneForm addContact={addContact} />
      <Filter
        filter={filter}
        handlerChangeFilter={({ target }) =>
          dispatch(filterAction(target.value))
        }
      />
      <ContactsList
        title={contacts.length === 0 ? 'Phone book is empty' : 'Contacts'}
        contacts={findByName}
        deleteContact={contactId => dispatch(removeContactAction(contactId))}
      />
    </Section>
  );
}
