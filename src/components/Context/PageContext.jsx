import React, { createContext, useReducer, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const PageContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(reducer, initialState);
  const [render, setRender] = useState(false);
  const location = useLocation();
  const { pageType } = pageState;

console.log(pageType);
  useEffect(() => {
    setRender(false);
    let newPageType = "css";
    switch (location.pathname) {
      case "/backgroundcolor":
      case "/backgroundgradient":
      case "/border":
      case "/borderradius":
      case "/boxshadow":
      case "/opacity":
      case "/skew":
      case "/rotate":
        newPageType = "css";
        break;
      case "/fontsize":
      case "/fontcolor":
        newPageType = "text";
        break;
      default:
        newPageType = "css";
        break;
    }
    setRender(true);
    pageDispatch({ type: "SET_TYPE", payload: newPageType });
  }, [location.pathname]);

  console.log(pageType);
  console.log(render);
  console.log(location.pathname);

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

export default PageContextProvider;
