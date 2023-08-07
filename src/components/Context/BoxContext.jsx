import React, { createContext, useState, useReducer } from "react";
export const Context = createContext();

const initialState = {
  bgType: "none",
  bgColor: "#333",
  gradientColorOne: "#000",
  gradientColorTwo: "#fff",
  gradientRateOne: "0%",
  gradientRateTwo: "100%",
  gradientType: "linear-gradient",
  gradientAngle: "90deg,",
  borderActive: false,
  borderWidth: "2px",
  borderColor: "#ccc",
  borderType: "solid",
  borderRadius: "0px",
  boxShadowBlur: "0px",
  boxShadowColor: "#000",
  boxShadowHorizontal: "0px",
  boxShadowVertical: "0px",
  boxShadowSpread: "0px",
  boxShadowInset: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BG_TYPE":
      return { ...state, bgType: action.payload };
    case "SET_BGCOLOR":
      return { ...state, bgColor: action.payload };
    case "SET_GRADIENT_COLOR_ONE":
      return { ...state, gradientColorOne: action.payload };
    case "SET_GRADIENT_COLOR_TWO":
      return { ...state, gradientColorTwo: action.payload };
    case "SET_GRADIENT_RATE_ONE":
      return { ...state, gradientRateOne: action.payload };
    case "SET_GRADIENT_RATE_TWO":
      return { ...state, gradientRateTwo: action.payload };
    case "SET_GRADIENT_TYPE":
      return { ...state, gradientType: action.payload };
    case "SET_GRADIENT_ANGLE":
      return { ...state, gradientAngle: action.payload };
    case "SET_BORDER_ACTIVE":
      return { ...state, borderActive: action.payload };
    case "SET_BORDER_WIDTH":
      return { ...state, borderWidth: action.payload };
    case "SET_BORDER_COLOR":
      return { ...state, borderColor: action.payload };
    case "SET_BORDER_TYPE":
      return { ...state, borderType: action.payload };
    case "SET_BORDER_RADIUS":
      return { ...state, borderRadius: action.payload };
    case "SET_SHADOW_BLUR":
      return { ...state, boxShadowBlur: action.payload };
    case "SET_SHADOW_COLOR":
      return { ...state, boxShadowColor: action.payload };
    case "SET_SHADOW_HORIZONTAL":
      return { ...state, boxShadowHorizontal: action.payload };
    case "SET_SHADOW_VERTICAL":
      return { ...state, boxShadowVertical: action.payload };
    case "SET_SHADOW_SPREAD":
      return { ...state, boxShadowSpread: action.payload };
    case "SET_SHADOW_INSET":
      return { ...state, boxShadowInset: action.payload };
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
