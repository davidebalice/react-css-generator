import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function LetterSpacing() {
  const { state, dispatch } = useContext(Context);
  const { letterspacing } = state;

  const letterSpacingCopyHandler = (e) => {
    dispatch({ type: "SET_LETTER_SPACING", payload: e.target.value });
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
          <span className="titleSection">Letter spacing</span>
          <Preview />
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => letterSpacingCopyHandler(e)}
                  type="range"
                  max={20}
                  value={letterspacing}
                />
                <span>{letterspacing}</span>
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
