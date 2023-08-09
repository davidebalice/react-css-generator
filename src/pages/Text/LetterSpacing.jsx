import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function LetterSpacing() {
  const [letterSpacing, setLetterSpacing] = useState("15px");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const letterSpacingHandler = (e) => {
    setLetterSpacing(`${e.target.value}px`);
  };

  const letterSpacingCopyHandler = async () => {
    let text = `letter-spacing: ${letterSpacing};`;
    await copyed(text);
    btnCopyTextChange();
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
            <p style={{ letterSpacing: `${letterSpacing}` }}>Letter-Spacing</p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">letter-spacing</span>
              {": "}
              <span className="code_three">{letterSpacing}</span>;
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
            <span>{letterSpacing}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
