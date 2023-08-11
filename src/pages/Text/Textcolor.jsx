import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";
import { CompactPicker } from "react-color";

export default function Textcolor() {
  const [textColor, setTextColor] = useState("#f00");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const textColorHandler = (e) => {
    setTextColor(`${e.target.value}`);
  };

  const textColorCopyHandler = async () => {
    let text = `color: ${textColor};`;
    await copyed(text);
    btnCopyTextChange();
  };

  const handleChangeComplete = (color, event) => {
    setTextColor(color.hex);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit="exit"
      className="cssContainer"
    >
      <span className="titleSection">Color</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ color: `${textColor}`, fontSize: 40 }}>Font-size</p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">color</span>
              {": "}
              <span className="code_three">{textColor}</span>;
            </pre>
          </div>
          <button onClick={textColorCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Size</label>
            <input onChange={(e) => textColorHandler(e)} type="color" />
            <span>{textColor}</span>
          </div>
          <div className="input_box">
            <CompactPicker
              color={textColor}
              onChangeComplete={(e) => handleChangeComplete(e)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
