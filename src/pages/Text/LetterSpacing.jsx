import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function LetterSpacing() {
  /*
  const { state, dispatch } = useContext(Context);
  const { letterspacing } = state;

  const letterSpacingHandler = (e) => {
    setLetterSpacing(`${e.target.value}px`);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit="exit"
      className="cssContainer"
    >
      <span className="titleSection">Letter-Spacing</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ letterSpacing: `${letterspacing}` }}>Letter-Spacing</p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">letter-spacing</span>
              {": "}
              <span className="code_three">{letterspacing}</span>;
            </pre>
          </div>
          <button onClick={letterSpacingCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Size</label>
            <input
              onChange={(e) => letterSpacingHandler(e)}
              type="range"
              max={15}
            />
            <span>{letterspacing}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );*/
}
