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
};

const reducer = (state, action) => {
  switch (action.type) {
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
