import {
  HANDLE_NUMBER,
  HANDLE_CE,
  HANDLE_C,
  HANDLE_DO_ARITHMETIC,
  HANDLE_FRACTION,
  HANDLE_INVERSE_FRACTION,
  HANDLE_SQRT,
  HANDLE_EQUAL,
} from "./calculatorTypes";

export const handleNumber = (number) => {
  return {
    type: HANDLE_NUMBER,
    payload: number,
  };
};

export const handleCe = () => {
  return {
    type: HANDLE_CE,
  };
};

export const handleC = () => {
  return {
    type: HANDLE_C,
  };
};

export const handleDoArithmetic = (symbol) => {
  return {
    type: HANDLE_DO_ARITHMETIC,
    payload: symbol,
  };
};

export const handleFraction = () => {
  return {
    type: HANDLE_FRACTION,
  };
};

export const handleInverseFraction = () => {
  return {
    type: HANDLE_INVERSE_FRACTION,
  };
};


export const handleSqrt = () => {
  return {
    type: HANDLE_SQRT,
  };
};

export const  handleEqual = () => {
  return {
    type: HANDLE_EQUAL,
  };
};

/*
export function handleC() {
  return function (dispatch) {
    dispatch({
      type: HANDLE_C,
    });
  };
}

export function handleDoArithmetic(e) {
  return function (dispatch) {
    dispatch({
      type: HANDLE_DO_ARITHMETIC,
      payload: e.target.value,
    });
  };
}

export function handleFraction() {
  return function (dispatch) {
    dispatch({
      type: HANDLE_FRACTION,
    });
  };
}

export function handleInverseFraction() {
  return function (dispatch) {
    dispatch({
      type: HANDLE_INVERSE_FRACTION,
    });
  };
}



export function handleSqrt() {
  return function (dispatch) {
    dispatch({
      type: HANDLE_SQRT,
    });
  };
}

 export function handleEqual() {
  return function (dispatch) {
    dispatch({
      type: HANDLE_EQUAL,
    });
  };
} */
