import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
const phoneBook = createSlice({
  name: 'Phonebook',
  initialState,
  reducers: {
    addContactAction: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload],
    }),
    removeContactAction: (state, { payload }) => ({
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== payload),
    }),
    filterAction: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
});

export const phoneBookReducer = phoneBook.reducer; // объект состояния
export const { addContactAction, removeContactAction, filterAction } =
  phoneBook.actions; //Экшены
