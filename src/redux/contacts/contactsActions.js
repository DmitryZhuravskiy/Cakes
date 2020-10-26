import {
  CONTACTS_CHANGE_NAME ,
  CONTACTS_CHANGE_EMAIL,
  CONTACTS_CHANGE_QUESTION,
  CONTACTS_SUBMIT,
} from "./contactsTypes";

export const handleChangeName = (e) => {
  return {
    type: CONTACTS_CHANGE_NAME,
    payload: e.target.value,
  };
};

export const handleChangeEmail = (e) => {
  return {
    type: CONTACTS_CHANGE_EMAIL,
    payload: e.target.value,
  };
}

export const handleChangeQuestion = (e) => {
  return {
    type: CONTACTS_CHANGE_QUESTION,
    payload: e.target.value,
  };
}

export const handleSubmit = () => {
  return {
    type: CONTACTS_SUBMIT,
  };
}

