import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/Preview";
import Code from "../../components/Code/Code";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function Border() {
  const { state, dispatch } = useContext(Context);

  const { borderWidth, borderColor, borderType } = state;

  const handleChange = (e) => {
    dispatch({ type: "SET_BORDER_COLOR", payload: e.target.value });
    borderActiveHandler();
  };

  const borderWidthHandler = (e) => {
    dispatch({ type: "SET_BORDER_WIDTH", payload: `${e.target.value}px` });
    borderActiveHandler();
  };

  const borderTypeHandler = (e) => {
    dispatch({ type: "SET_BORDER_TYPE", payload: e.target.value });
    borderActiveHandler();
  };

  const borderActiveHandler = () => {
    dispatch({ type: "SET_BORDER_ACTIVE", payload: true });
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
          <span className="titleSection">Border</span>

          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>color</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="color"
                  value={borderColor}
                />
              </div>
              <div className="input_box">
                <label>Width</label>
                <input
                  onChange={(e) => borderWidthHandler(e)}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={borderWidth.replace("px", "")}
                />
                <span>{borderWidth}</span>
              </div>
              <div className="input_box">
                <label>Style</label>
                <select
                  value={borderType}
                  onChange={(e) => borderTypeHandler(e)}
                >
                  <option value="solid" selected={borderType === "solid"}>
                    solid
                  </option>
                  <option value="dashed" selected={borderType === "dashed"}>
                    dashed
                  </option>
                  <option value="dotted" selected={borderType === "dotted"}>
                    dotted
                  </option>
                  <option value="double" selected={borderType === "double"}>
                    double
                  </option>
                  <option value="groove" selected={borderType === "groove"}>
                    groove
                  </option>
                  <option value="ridge" selected={borderType === "ridge"}>
                    ridge
                  </option>
                  <option value="inset" selected={borderType === "inset"}>
                    inset
                  </option>
                  <option value="outset" selected={borderType === "outset"}>
                    outset
                  </option>
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
