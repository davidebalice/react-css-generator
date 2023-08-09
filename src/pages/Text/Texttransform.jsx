import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function Texttransform() {
  const [textTransform, settextTransform] = useState("none");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const textTransformHandler = (e) => {
    settextTransform(`${e.target.value}`);
  };

  const textTransformCopyHandler = async () => {
    let text = `text-transform: ${textTransform};`;
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
      <span className="titleSection">Text-transform</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p style={{ textTransform: `${textTransform}`, fontSize: 20 }}>
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box responsive_code">
            <pre>
              <span className="code_one">text-transform</span>
              {": "}
              <span className="code_two">{textTransform}</span>;
            </pre>
          </div>
          <button onClick={textTransformCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => textTransformHandler(e)}>
              <option value="none">none</option>
              <option value="uppercase">uppercase</option>
              <option value="capitalize">capitalize</option>
              <option value="lowercase">lowercase</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
