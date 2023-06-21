import { createAction } from '@reduxjs/toolkit';
export const contactAdd = createAction('PhoneBook/AddContact');

export const removeContact = createAction('PhoneBook/removeContact');

export const filterAction = createAction('PhoneBook/filter');
