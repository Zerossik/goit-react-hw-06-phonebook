import { createReducer } from '@reduxjs/toolkit';
import { contactAdd, removeContact, filterAction } from './action';

const contactsAddReducer = createReducer([], {
  [contactAdd.type]: (state, action) => [...state, action.payload],
  [removeContact.type]: (state, { payload }) => [...payload],
});

const filterReducer = createReducer('', {
  [filterAction.type]: (state, { payload }) => (state = payload),
});

export const reducer = {
  contacts: contactsAddReducer,
  filter: filterReducer,
};
