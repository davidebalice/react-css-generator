import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_FLEX_DIRECTION":
      return { ...state, flexDirection: action.payload };
    case "ALIGN_ITEMS":
      return { ...state, alignItems: action.payload };
    case "JUSTIFY_CONTENT":
      return { ...state, justifyContent: action.payload };
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
