import { createReducer } from '@reduxjs/toolkit';
import { contactAdd, removeContact, filterAction } from './action';
import { initialState } from './initialState';
//reducer первым параметром принимает начальный state, а второй параметр это объект Actions.
//в объекте actions ключ должен иметь такое же название, как и action type в createAction('type').
// а значение - это колбек функция, в которую прелетает state и action
const contactsAddReducer = createReducer(initialState.contacts, {
  [contactAdd.type]: (state, action) => [...state, action.payload],
  [removeContact.type]: (state, { payload }) => [...payload],
});

const filterReducer = createReducer(initialState.filter, {
  [filterAction.type]: (state, { payload }) => (state = payload),
});

//корневой редьюсер, который уходит в configureStore({reducer})
export const reducer = {
  contacts: contactsAddReducer,
  filter: filterReducer,
};
