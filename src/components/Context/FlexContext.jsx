import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  item: "3",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  gridItem: "6",
  column: "3",
  gridGap: "10px",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_ITEM":
      return { ...state, item: action.payload };
    case "SET_FLEX_DIRECTION":
      return { ...state, flexDirection: action.payload };
    case "SET_ALIGN_ITEMS":
      return { ...state, alignItems: action.payload };
    case "SET_JUSTIFY_CONTENT":
      return { ...state, justifyContent: action.payload };
    case "SET_GAP":
      return { ...state, gap: action.payload };
    case "SET_GRID_ITEM":
      return { ...state, gridItem: action.payload };
    case "SET_COLUMN":
      return { ...state, column: action.payload };
    case "SET_GRID_GAP":
      return { ...state, gridGap: action.payload };
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
