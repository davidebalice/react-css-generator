import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function FontWeight() {
  const [fontWeight, setFontWeight] = useState("normal");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const fontWeightHandler = (e) => {
    setFontWeight(`${e.target.value}`);
  };

  const fontWeightCopyHandler = async () => {
    let text = `font-weight: ${fontWeight};`;
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
      <span className="titleSection">Font-Weight</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ fontWeight: `${fontWeight}`, fontSize: 25 }}>
              Font-Weight
            </p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">font-weight</span>
              {": "}
              <span className="code_three">{fontWeight}</span>;
            </pre>
          </div>
          <button onClick={fontWeightCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => fontWeightHandler(e)}>
              <option value="normal">normal</option>
              <option value="bold">bold</option>
              <option value="bolder">bolder</option>
              <option value="lighter">lighter</option>
            </select>
            <span>{fontWeight}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
