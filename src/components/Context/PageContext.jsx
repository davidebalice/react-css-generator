import React, { createContext, useReducer, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const PageContext = createContext();

const initialState = {
  pageType: "box",
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

  useEffect(() => {
    setRender(false);
    let pageType = "box";
    switch (location.pathname) {
      case "/backgroundcolor":
      case "/backgroundgradient":
      case "/border":
      case "/borderradius":
      case "/boxshadow":
      case "/opacity":
      case "/skew":
      case "/rotate":
        pageType = "box";
        break;
      case "/fontsize":
      case "/textcolor":
      case "/fontfamily":
      case "/fontweight":
      case "/textdecoration":
      case "/texttransform":
      case "/letterspacing":
      case "/lineheight":
      case "/textalign":
        pageType = "text";
        break;
      default:
        pageType = "box";
        break;
    }
    setRender(true);
    pageDispatch({ type: "SET_TYPE", payload: pageType });
  }, [location.pathname]);

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
