import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormButton,
  Input,
  StyledLabel,
  Required,
} from './PhonebookForm.styled';

export function PhoneForm({ addContact }) {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setname(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
    }
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    const id = nanoid(10);
    addContact({ id: id, name: name, number: number });
    resetForm();
  };

  const resetForm = () => {
    setname('');
    setnumber('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <StyledLabel>
        Name<Required>*</Required>
        <br />
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChange}
          placeholder="Your Name"
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Number<Required>*</Required>
        <br />
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerChange}
          placeholder="+380000000000"
        />
      </StyledLabel>
      <br />
      <FormButton type="submit">Add contact</FormButton>
    </form>
  );
}

PhoneForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
