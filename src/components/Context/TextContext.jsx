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
  textShadowColor: "#000000",
  textShadowColorRgb: "rgb(0, 0, 0, 1)",
  textShadownColorOpacity: "1",
  textShadowHorizontal: "0px",
  textShadowVertical: "0px",
  textShadowBlur: "0px",
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
    case "SET_TEXT_SHADOW_BLUR":
      return { ...state, textShadowBlur: action.payload };
    case "SET_TEXT_SHADOW_COLOR":
      return { ...state, textShadowColor: action.payload };
    case "SET_TEXT_SHADOW_COLOR_RGB":
      const rgbColor = hexToRgb(action.payload, state.textShadownColorOpacity);
      return { ...state, textShadowColorRgb: rgbColor };
    case "SET_TEXT_SHADOW_COLOR_OPACITY":
      return { ...state, textShadownColorOpacity: action.payload };
    case "SET_TEXT_SHADOW_HORIZONTAL":
      return { ...state, textShadowHorizontal: action.payload };
    case "SET_TEXT_SHADOW_VERTICAL":
      return { ...state, textShadowVertical: action.payload };
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
