import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function FontWeight() {
  const { state, dispatch } = useContext(Context);
  const { fontweight } = state;

  const fontWeightHandler = (e) => {
    dispatch({ type: "SET_FONT_WEIGHT", payload: e.target.value });
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
          <span className="titleSection">Font weight</span>
          <Preview />
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <select onChange={(e) => fontWeightHandler(e)} value={fontweight}>
                  <option value="normal">normal</option>
                  <option value="bold">bold</option>
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
