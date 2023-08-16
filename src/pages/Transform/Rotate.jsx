import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/Preview";
import Code from "../../components/Code/Code";
import Footer from "../../components/Footer/Footer";

export default function Rotate() {
  const { state, dispatch } = useContext(Context);
  const { rotate } = state;

  const rotateHandler = (e) => {
    dispatch({ type: "SET_ROTATE", payload: e.target.value });
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
          <span className="titleSection">Rotate</span>
          <Preview />
          <div className="topBox"></div>
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => rotateHandler(e)}
                  type="range"
                  min={-360}
                  max={360}
                  value={rotate.replace("deg", "")}
                />
                <span>{rotate}</span>
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
