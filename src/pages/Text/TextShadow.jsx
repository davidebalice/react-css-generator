import React, { useContext } from "react";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function TextShadow() {
  const { state, dispatch } = useContext(Context);
  const {
    textShadowBlur,
    textShadowColor,
    textShadowColorRgb,
    textShadownColorOpacity,
    textShadowHorizontal,
    textShadowVertical,
  } = state;

  const textColorChange = (e) => {
    dispatch({ type: "SET_TEXT_SHADOW_COLOR", payload: e.target.value });
    dispatch({ type: "SET_TEXT_SHADOW_COLOR_RGB", payload: e.target.value });
  };

  const textColorOpacityHandler = (e) => {
    dispatch({
      type: "SET_TEXT_SHADOW_COLOR_OPACITY",
      payload: e.target.value,
    });
    dispatch({ type: "SET_TEXT_SHADOW_COLOR_RGB", payload: textShadowColor });
  };

  const textBlurHandler = (e) => {
    dispatch({ type: "SET_TEXT_SHADOW_BLUR", payload: `${e.target.value}px` });
  };

  const textHorizontalHandler = (e) => {
    dispatch({
      type: "SET_TEXT_SHADOW_HORIZONTAL",
      payload: `${e.target.value}px`,
    });
  };

  const textVerticalHandler = (e) => {
    dispatch({
      type: "SET_TEXT_SHADOW_VERTICAL",
      payload: `${e.target.value}px`,
    });
  };

  return (
    <>
      <div className="row">
        <Menu />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit="exit"
          className="cssContainer"
        >
          <TitleContainer title="Text shadow" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Color</label>
                <input onChange={(e) => textColorChange(e)} type="color" />
              </div>
              <div className="input_box">
                <span>{textShadowColor}</span>
                <span>{textShadowColorRgb}</span>
              </div>
              <div className="input_box">
                <label>Horizontal offset</label>
                <input
                  onChange={(e) => textHorizontalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={textShadowHorizontal.replace("px", "")}
                />
                <span>{textShadowHorizontal}</span>
              </div>
              <div className="input_box">
                <label>Vertical offset</label>
                <input
                  onChange={(e) => textVerticalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={textShadowVertical.replace("px", "")}
                />
                <span>{textShadowVertical}</span>
              </div>

              <div className="input_box">
                <label>Blur</label>
                <input
                  onChange={(e) => textBlurHandler(e)}
                  type="range"
                  value={textShadowBlur.replace("px", "")}
                />
                <span>{textShadowBlur}</span>
              </div>
              <div className="input_box">
                <label>Color opacity</label>
                <input
                  onChange={(e) => textColorOpacityHandler(e)}
                  type="range"
                  step={0.01}
                  min={0}
                  max={1}
                  value={textShadownColorOpacity}
                />
                <span>{textShadownColorOpacity}</span>
              </div>
            </div>
          </div>
          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
