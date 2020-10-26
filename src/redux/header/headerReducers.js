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

const initialState = {
  value: "",
  stek: "",
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_NUMBER:
      return { ...state, value: state.value + action.payload };

    case HANDLE_CE:
      return { ...state, value: "", stek: "" };

    case HANDLE_C:
      return { ...state, value: "" };

    case HANDLE_DO_ARITHMETIC:
      return {
        ...state,
        stek: state.stek + state.value + action.payload,
        value: "",
      };

    case HANDLE_FRACTION:
      return {
        ...state,
        stek: `(${state.stek}+${state.value}).`,
        value: "",
      };

    case HANDLE_INVERSE_FRACTION:
      return {
        ...state,
        stek: `1/(${state.stek}+${state.value})`,
        value: "",
      };

    case HANDLE_SQRT:
      return {
        ...state,
        stek: `Math.sqrt(${state.stek}+${state.value})`,
        value: "",
      };

    case HANDLE_EQUAL:
      return {
        ...state,
        value: eval(state.stek + state.value),
        stek: "",
      };

    default:
      return state;
  }
}

export default calculatorReducer