import { configureStore } from '@reduxjs/toolkit';
// import корневого reducer.
import { reducer } from './reducer';
//создание store. В качестве параметра должен обыть объект с ключем reducer и значением корневого rootReducer
export const store = configureStore({
  reducer,
});
