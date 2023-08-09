import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function FontSize() {
  const [fontsize, setFontsize] = useState("50px");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const fontsizeHandler = (e) => {
    setFontsize(`${e.target.value}px`);
  };

  const fontsizeCopyHandler = async () => {
    let text = `font-size: ${fontsize};`;
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
      <span className="titleSection">Font-size</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ fontSize: `${fontsize}` }}>Font-size</p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">font-size</span>
              {": "}
              <span className="code_three">{fontsize}</span>;
            </pre>
          </div>
          <button onClick={fontsizeCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Size</label>
            <input onChange={(e) => fontsizeHandler(e)} type="range" max={70} />
            <span>{fontsize}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
