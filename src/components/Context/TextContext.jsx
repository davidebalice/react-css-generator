import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  fontsize: "24",
  textcolor: "#333",
  fontfamily: "Abel",
  fontweight: "normal",
  textdecoration: "",
  textdecorationstyle: "",
  textdecorationcolor: "#333",
  texttransform: "",
  letterspacing: "0",
  lineheight: "0",
  textalign: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_FONT_SIZE":
      return { ...state, fontsize: action.payload };
    case "SET_TEXT_COLOR":
      return { ...state, textcolor: action.payload };
    case "SET_FONT_FAMILY":
      return { ...state, fontfamily: action.payload };
    case "SET_FONT_WEIGHT":
      return { ...state, fontweight: action.payload };
    case "SET_TEXT_DECORATION":
      return { ...state, textdecoration: action.payload };
    case "SET_TEXT_DECORATION_STYLE":
      return { ...state, textdecorationstyle: action.payload };
    case "SET_TEXT_DECORATION_COLOR":
      return { ...state, textdecorationcolor: action.payload };
    case "SET_TEXT_TRANSFORM":
      return { ...state, texttransform: action.payload };
    case "SET_LETTER_SPACING":
      return { ...state, letterspacing: action.payload };
    case "SET_LINE_HEIGHT":
      return { ...state, lineheight: action.payload };
    case "SET_TEXT_ALIGN":
      return { ...state, textalign: action.payload };
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
