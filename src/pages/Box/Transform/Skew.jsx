import React, { useContext } from "react";
import { Context } from "../../../components/Context/BoxContext";
import "../../../style.css";
import { motion } from "framer-motion";
import Menu from "../../../components/Menu/Menu";
import Preview from "../../../components/Preview/Preview";
import Code from "../../../components/Code/Code";
import Footer from "../../../components/Footer/Footer";

export default function Skew() {
  const { state, dispatch } = useContext(Context);
  const { skewX, skewY } = state;

  const skewHandlerX = (e) => {
    dispatch({ type: "SET_SKEW_X", payload: `${e.target.value}deg` });
  };

  const skewHandlerY = (e) => {
    dispatch({ type: "SET_SKEW_Y", payload: `${e.target.value}deg` });
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
          <span className="titleSection">Skew</span>
          <Preview />
          <div className="topBox"></div>
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>X</label>
                <input
                  onChange={(e) => skewHandlerX(e)}
                  type="range"
                  min={-60}
                  max={60}
                  value={skewX.replace("deg", "")}
                />
                <span>{skewX}</span>
              </div>
              <div className="input_box">
                <label>Y</label>
                <input
                  onChange={(e) => skewHandlerY(e)}
                  type="range"
                  min={-60}
                  max={60}
                  value={skewY.replace("deg", "")}
                />
                <span>{skewY}</span>
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
