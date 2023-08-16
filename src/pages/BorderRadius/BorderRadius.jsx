import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/Preview";
import Code from "../../components/Code/Code";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function BorderRadius() {
  const { state, dispatch } = useContext(Context);
  const { borderRadius } = state;

  const borderRadiusHandler = (e) => {
    dispatch({ type: "SET_BORDER_RADIUS", payload: `${e.target.value}px` });
  };

  return (
    <>
      <div className="row">
        {" "}
        <Menu />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit="exit"
          className="cssContainer"
        >
          <span className="titleSection">Border radius</span>
          <Preview />
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Radius</label>
                <input
                  onChange={(e) => borderRadiusHandler(e)}
                  type="range"
                  step="1"
                  value={borderRadius.replace("px", "")}
                />
                <span>{borderRadius}</span>
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
