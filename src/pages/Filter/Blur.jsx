import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import "./Filter.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function Blur() {
  const [blur, setBlur] = useState("10px");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const blurHandler = (e) => {
    setBlur(`${e.target.value}px`);
  };

  const blurCopyHandler = async () => {
    let text = `filter: blur(${blur});`;
    await copyed(text);
    btnCopyTextChange();
  };
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="cssContainer"
    >
      <span className="titleSection">Blur</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div
            style={{ filter: `blur(${blur})` }}
            className="preview_box filter_preview"
          ></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">filter</span>
              {": "}
              <span className="code_two">blur</span>(
              <span className="code_three">{blur}</span>) ;
            </pre>
          </div>
          <button onClick={blurCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Radius</label>
            <input onChange={(e) => blurHandler(e)} type="range" />
            <span>{blur}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
