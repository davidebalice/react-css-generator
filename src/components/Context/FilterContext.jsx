import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  selectedFilter: "brightness",
  brightness: "1",
  blur: "0px",
  contrast: "100%",
  grayscale: "0%",
  heuRotate: "",
  invert: "0%",
  saturate: "100%",
  sepia: "0%",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_FILTER":
      return { ...state, selectedFilter: action.payload };
    case "SET_BRIGHTNESS":
      return { ...state, brightness: action.payload };
    case "SET_BLUR":
      return { ...state, blur: action.payload };
    case "SET_CONTRAST":
      return { ...state, contrast: action.payload };
    case "SET_SEPIA":
      return { ...state, sepia: action.payload };
    case "SET_GREYSCALE":
      return { ...state, grayscale: action.payload };
    case "SET_HEUROTATE":
      return { ...state, heuRotate: action.payload };
    case "SET_INVERT":
      return { ...state, invert: action.payload };
    case "SET_SATURATE":
      return { ...state, saturate: action.payload };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [copyClickText, setcopyClickText] = useState(false);

  const btnCopyTextChange = () => {
    setcopyClickText(true);
    setTimeout(() => {
      setcopyClickText(false);
    }, 3000);
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <Context.Provider
      value={{
        copyClickText,
        setcopyClickText,
        btnCopyTextChange,
        state,
        dispatch,
        handleReset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
