import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/ContextProvider";
import "../../style.css";
import Menu from "../../components/Css/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import { motion } from "framer-motion";

export default function Border() {
  const { mainVariant, state, dispatch } = useContext(Context);

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
    <div className="row">
      <Menu />
      <motion.div
        variants={mainVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="style_Container"
      >
        <span className="titr">Border</span>

        <div>
          <Preview />
        </div>

        <div className="option_wraper">
          <span>Option</span>
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
              <select value={borderType} onChange={(e) => borderTypeHandler(e)}>
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
        <div>
          <Code />
        </div>
      </motion.div>
    </div>
  );
}
