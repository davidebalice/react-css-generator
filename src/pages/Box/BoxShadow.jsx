import React, { useContext } from "react";
import { Context } from "../../components/Context/BoxContext";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/Preview";
import Code from "../../components/Code/Code";
import Footer from "../../components/Footer/Footer";

export default function BoxShadow() {
  const { state, dispatch } = useContext(Context);
  const {
    boxShadowBlur,
    boxShadowColor,
    boxShadowColorRgb,
    boxShadownColorOpacity,
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowSpread,
    boxShadowInset,
  } = state;

  const boxColorChange = (e) => {
    dispatch({ type: "SET_SHADOW_COLOR", payload: e.target.value });
    dispatch({ type: "SET_SHADOW_COLOR_RGB", payload: e.target.value });
  };

  const boxSpreadHandler = (e) => {
    dispatch({ type: "SET_SHADOW_SPREAD", payload: `${e.target.value}px` });
  };

  const boxBlurHandler = (e) => {
    dispatch({ type: "SET_SHADOW_BLUR", payload: `${e.target.value}px` });
  };

  const boxHorizontalHandler = (e) => {
    dispatch({ type: "SET_SHADOW_HORIZONTAL", payload: `${e.target.value}px` });
  };

  const boxVerticalHandler = (e) => {
    dispatch({ type: "SET_SHADOW_VERTICAL", payload: `${e.target.value}px` });
  };

  const boxInsetHandler = (e) => {
    dispatch({ type: "SET_SHADOW_INSET", payload: e.target.value });
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
          <span className="titleSection">Box shadow</span>
          <Preview />
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Color</label>
                <input onChange={(e) => boxColorChange(e)} type="color" />
              </div>
              <span>{boxShadowColor}</span>
              <span>{boxShadowColorRgb}</span>
              <div className="input_box">
                <label>Blur</label>
                <input
                  onChange={(e) => boxBlurHandler(e)}
                  type="range"
                  value={boxShadowBlur.replace("px", "")}
                />
                <span>{boxShadowBlur}</span>
              </div>
              <div className="input_box">
                <label>Horizontal offset</label>
                <input
                  onChange={(e) => boxHorizontalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={boxShadowHorizontal.replace("px", "")}
                />
                <span>{boxShadowHorizontal}</span>
              </div>
              <div className="input_box">
                <label>Vertical offset</label>
                <input
                  onChange={(e) => boxVerticalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={boxShadowVertical.replace("px", "")}
                />
                <span>{boxShadowVertical}</span>
              </div>
              <div className="input_box">
                <label>Spread</label>
                <input
                  onChange={(e) => boxSpreadHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={boxShadowSpread.replace("px", "")}
                />
                <span>{boxShadowSpread}</span>
              </div>
              <div className="input_box">
                <label>Inset</label>
                <select onChange={(e) => boxInsetHandler(e)}>
                  <option value="">No</option>
                  <option value="inset">Yes</option>
                </select>
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