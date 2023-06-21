import { createAction } from '@reduxjs/toolkit';
// Создание экшена и передаем строку, которая уходит в type объекта экшена.
//При вызове, например contactAdd(сюда передаем то, что улетит в payload)
export const contactAdd = createAction('PhoneBook/AddContact');

export const removeContact = createAction('PhoneBook/removeContact');

export const filterAction = createAction('PhoneBook/filter');
