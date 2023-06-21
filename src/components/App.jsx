import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { contactAdd, removeContact, filterAction } from '../redux/action';

export function App() {
  // const [contacts, setcontacts] = useState([]);
  // const [filter, setfilter] = useState('');
  // const prevContacts = useRef(contacts);
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);
  const filter = useSelector(({ filter }) => filter);

  // useEffect(() => {
  //   const getContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (getContacts) {
  //     setcontacts(getContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts !== prevContacts.current) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //     prevContacts.current = contacts;
  //   }
  // }, [contacts]);

  const addContact = contact => {
    const result = contacts.find(({ name }) => name === contact.name);
    if (result) {
      alert('Rosie Simpson is already in contacts');
      return;
    }

    // setcontacts([...contacts, contact]);
    dispatch(contactAdd(contact));
  };

  const handlerChangeFilter = ({ target }) => {
    // setfilter(target.value);

    dispatch(filterAction(target.value));
  };

  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    // setcontacts(contacts.filter(({ id }) => id !== contactId));
    dispatch(removeContact(contacts.filter(({ id }) => id !== contactId)));
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
