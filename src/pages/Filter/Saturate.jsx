import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import "./Filter.css";
import copyed from "../../func";

export default function Saturate() {
  const [saturate, setSaturate] = useState("100%");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const saturateHandler = (e) => {
    setSaturate(`${e.target.value}%`);
  };

  const saturateCopyHandler = async () => {
    let text = `filter: saturate(${saturate});`;
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
      <span className="titleSection">Saturate</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div
            style={{ filter: `saturate(${saturate})` }}
            className="preview_box sepia_preview"
          ></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">filter</span>
              {": "}
              <span className="code_two">saturate</span>(
              <span className="code_three">{saturate}</span>) ;
            </pre>
          </div>
          <button onClick={saturateCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input
              onChange={(e) => saturateHandler(e)}
              type="range"
              max={300}
            />
            <span>{saturate}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
