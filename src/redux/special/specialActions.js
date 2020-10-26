import {
  HANDLE_FILLING, HANDLE_WEIGHT_1, HANDLE_WEIGHT_2, HANDLE_WEIGHT_5, HANDLE_WEIGHT_8, HANDLE_CHOISE_BERRY, HANDLE_CHOISE_MARSHMALLOW
} from "./specialTypes";

export const handleClickFilling = (e) => {
  return {
    type: HANDLE_FILLING,
    payload: e.target.value,
  };
};

export const handleWeightChange1 = () => {
  return {
    type: HANDLE_WEIGHT_1,
  };
};

export const handleWeightChange2 = () => {
  return {
    type: HANDLE_WEIGHT_2,
  };
};

export const handleWeightChange5 = () => {
  return {
    type: HANDLE_WEIGHT_5,
  };
};

export const handleWeightChange8 = () => {
  return {
    type: HANDLE_WEIGHT_8,
  };
};

export const handleDesignChoiseBerry = () => {
  return {
    type: HANDLE_CHOISE_BERRY,
  };
};

export const handleDesignChoiseMarshmallow = () => {
  return {
    type: HANDLE_CHOISE_MARSHMALLOW,
  };
};

