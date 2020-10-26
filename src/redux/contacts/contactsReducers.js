import {
  CONTACTS_CHANGE_NAME ,
  CONTACTS_CHANGE_EMAIL,
  CONTACTS_CHANGE_QUESTION,
  CONTACTS_SUBMIT,
} from "./contactsTypes";

const initialState = {
  name: '',
  email: '',
  question: ''
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACTS_CHANGE_NAME:
      return { ...state, name: action.payload };

    case CONTACTS_CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case CONTACTS_CHANGE_QUESTION:
      return { ...state, question: action.payload };

    case CONTACTS_SUBMIT:
      alert(`Вы, ${state.name.toUpperCase()} спрашиваете у нас с мыла ${state.email} дословно ${state.question.toUpperCase()} ? Так вот, мы не знаем!`);
      return { ...state };

    default:
      return state;
  }
}

export default contactsReducer