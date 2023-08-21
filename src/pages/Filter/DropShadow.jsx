import React, { useContext, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function DropShadow() {
  const { state, dispatch } = useContext(Context);
  const {
    dropShadowBlur,
    dropShadowColor,
    dropShadowHorizontal,
    dropShadowVertical,
  } = state;

  const dropColorChange = (e) => {
    dispatch({ type: "SET_DROPSHADOW_COLOR", payload: e.target.value });
  };

  const dropBlurHandler = (e) => {
    dispatch({ type: "SET_DROPSHADOW_BLUR", payload: `${e.target.value}px` });
  };

  const dropHorizontalHandler = (e) => {
    dispatch({
      type: "SET_DROPSHADOW_HORIZONTAL",
      payload: `${e.target.value}px`,
    });
  };

  const dropVerticalHandler = (e) => {
    dispatch({
      type: "SET_DROPSHADOW_VERTICAL",
      payload: `${e.target.value}px`,
    });
  };

  useEffect(() => {
    dispatch({ type: "RESET" });
    dispatch({ type: "SET_FILTER", payload: "dropshadow" });
  }, []);

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
          <span className="titleSection">Drop shadow</span>
          <Preview />
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Color</label>
                <input onChange={(e) => dropColorChange(e)} type="color" />
              </div>
              <div className="input_box">
                <label>Blur</label>
                <input
                  onChange={(e) => dropBlurHandler(e)}
                  type="range"
                  value={dropShadowBlur.replace("px", "")}
                />
                <span>{dropShadowBlur}</span>
              </div>
              <div className="input_box">
                <label>Horizontal offset</label>
                <input
                  onChange={(e) => dropHorizontalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={dropShadowHorizontal.replace("px", "")}
                />
                <span>{dropShadowHorizontal}</span>
              </div>
              <div className="input_box">
                <label>Vertical offset</label>
                <input
                  onChange={(e) => dropVerticalHandler(e)}
                  type="range"
                  min={-100}
                  max={100}
                  value={dropShadowVertical.replace("px", "")}
                />
                <span>{dropShadowVertical}</span>
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
