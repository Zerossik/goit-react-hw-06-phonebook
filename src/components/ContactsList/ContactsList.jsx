import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';

export function ContactsList({ title }) {
  const filter = useSelector(({ filter }) => filter); // получаем значение стейта - filter
  const contacts = useSelector(({ contacts }) => contacts); // получаем значение стейта - contacts
  const findByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <List>
      <h2>{title}</h2>
      {findByName().map(({ id, name, number }) => (
        <ContactListItem name={name} number={number} key={id} id={id} />
      ))}
    </List>
  );
}
ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};
