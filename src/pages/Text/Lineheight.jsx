import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function Lineheight() {
  const [lineHeight, setLineHeight] = useState("30px");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const lineHeightHandler = (e) => {
    setLineHeight(`${e.target.value}px`);
  };

  const lineHeightCopyHandler = async () => {
    let text = `line-height: ${lineHeight};`;
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
      <span className="titleSection">Line-height</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ lineHeight: `${lineHeight}`, padding: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              omnis et itaque saepe suscipit autem architecto voluptatibus
              libero id impedit! . Sunt omnis et itaque saepe suscipit autem
              architecto voluptatibus libero id impedit!
            </p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">line-height</span>
              {": "}
              <span className="code_three">{lineHeight}</span>;
            </pre>
          </div>
          <button onClick={lineHeightCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Size</label>
            <input
              onChange={(e) => lineHeightHandler(e)}
              type="range"
              max={55}
            />
            <span>{lineHeight}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
