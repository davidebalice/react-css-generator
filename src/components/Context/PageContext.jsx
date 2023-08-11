import React, { createContext, useReducer } from "react";
export const PageContext = createContext();

const initialState = {
  pageType: "css",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, pageType: action.payload };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(reducer, initialState);

  return (
    <PageContext.Provider
      value={{
        pageState,
        pageDispatch,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default ContextProvider;
