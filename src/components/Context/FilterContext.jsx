import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  selectedFilter: "brightness",
  brightness: "1",
  blur: "0px",
  contrast: "100%",
  dropshadowblur: "50px",
  dropShadowColor: "#000",
  dropShadowHorizontal: "-10px",
  dropVertical: "-10px",
  grayscale: "",
  heuRotate: "",
  invert: "",
  saturate: "",
  sepia: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case "SET_FILTER":
      return { ...state, selectedFilter: action.payload };
    case "SET_BRIGHTNESS":
      return { ...state, brightness: action.payload };
    case "SET_BLUR":
      return { ...state, blur: action.payload };
    case "SET_CONTRAST":
      return { ...state, contrast: action.payload };
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

  return (
    <Context.Provider
      value={{
        copyClickText,
        setcopyClickText,
        btnCopyTextChange,
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
