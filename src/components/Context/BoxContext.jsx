import React, { createContext, useReducer, useState } from "react";
export const Context = createContext();

const initialState = {
  backgroundType: "none",
  backgroundColor: "#333",
  backgroundOpacity: "1",
  gradientColorOne: "#000",
  gradientColorTwo: "#fff",
  gradientRateOne: "0%",
  gradientRateTwo: "100%",
  gradientType: "linear-gradient",
  gradientAngle: "90deg,",
  borderActive: false,
  borderWidth: "0px",
  borderColor: "#aaa",
  borderType: "solid",
  borderEdge: [1, 0, 0, 0, 0],
  borderEdgeType: [1, "solid", "solid", "solid", "solid"],
  borderEdgeColor: [1, "#aaa", "#aaa", "#aaa", "#aaa"],
  boxSizing: "content-box",
  borderRadius: "0px",
  borderRadiusAngle: [1, 0, 0, 0, 0],
  boxShadowBlur: "0px",
  boxShadowColor: "#000000",
  boxShadowColorRgb: "rgb(0, 0, 0, 1)",
  boxShadownColorOpacity: "1",
  boxShadowHorizontal: "0px",
  boxShadowVertical: "0px",
  boxShadowSpread: "0px",
  boxShadowInset: "",
  opacity: "1",
  skewX: "0",
  skewY: "0",
  rotate: "0",
};

function hexToRgb(hex, opacity) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b},${opacity})`;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET_BACKGROUND_TYPE":
      return { ...state, backgroundType: action.payload };
    case "SET_BACKGROUND_COLOR":
      return { ...state, backgroundColor: action.payload };
    case "SET_BACKGROUND_OPACITY":
      return { ...state, backgroundOpacity: action.payload };
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
    case "SET_BORDER_EDGE":
      return { ...state, borderEdge: action.payload };
    case "SET_BORDER_EDGE_COLOR":
      return { ...state, borderEdgeColor: action.payload };
    case "SET_BORDER_EDGE_TYPE":
      return { ...state, borderEdgeType: action.payload };
    case "SET_BOX_SIZING":
      return { ...state, boxSizing: action.payload };
    case "SET_BORDER_RADIUS":
      return { ...state, borderRadius: action.payload };
    case "SET_BORDER_RADIUS_ANGLE":
      return { ...state, borderRadiusAngle: action.payload };
    case "SET_SHADOW_BLUR":
      return { ...state, boxShadowBlur: action.payload };
    case "SET_SHADOW_COLOR":
      return { ...state, boxShadowColor: action.payload };
    case "SET_SHADOW_COLOR_RGB":
      const rgbColor = hexToRgb(action.payload, state.boxShadownColorOpacity);
      return { ...state, boxShadowColorRgb: rgbColor };
    case "SET_SHADOW_COLOR_OPACITY":
      return { ...state, boxShadownColorOpacity: action.payload };
    case "SET_SHADOW_HORIZONTAL":
      return { ...state, boxShadowHorizontal: action.payload };
    case "SET_SHADOW_VERTICAL":
      return { ...state, boxShadowVertical: action.payload };
    case "SET_SHADOW_SPREAD":
      return { ...state, boxShadowSpread: action.payload };
    case "SET_SHADOW_INSET":
      return { ...state, boxShadowInset: action.payload };
    case "SET_OPACITY":
      return { ...state, opacity: action.payload };
    case "SET_SKEW_X":
      return { ...state, skewX: action.payload };
    case "SET_SKEW_Y":
      return { ...state, skewY: action.payload };
    case "SET_ROTATE":
      return { ...state, rotate: action.payload };
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
