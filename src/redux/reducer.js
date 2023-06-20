import { createReducer } from '@reduxjs/toolkit';
import { contactAdd } from './action';

const contactsReducer = createReducer([], {
  [contactAdd.type]: (state, action) => [...state, action.payload],
});

const filterReducer = createReducer('', {
  filter: (state, action) => console.log(state),
});

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
