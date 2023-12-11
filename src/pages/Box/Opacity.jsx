import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import Code from "../../components/Code/CodeBox";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Opacity() {
  const { state, dispatch } = useContext(Context);
  const { opacity } = state;

  const opacityHandler = (e) => {
    dispatch({ type: "SET_OPACITY", payload: e.target.value });
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
          <TitleContainer title="Opacity" />
          <Preview />
          <div className="topBox"></div>
          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <label>%</label>
                <input
                  onChange={(e) => opacityHandler(e)}
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={opacity}
                />
                <span>{opacity}</span>
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
