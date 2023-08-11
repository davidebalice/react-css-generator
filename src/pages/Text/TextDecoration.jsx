import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";
import { CompactPicker } from "react-color";

export default function TextDecoration() {
  const [textDecoration, setTextDecoration] = useState("line-through");
  const [textDecorationStyle, setTextDecorationStyle] = useState("solid");
  const [textDecorationColor, settextDecorationColor] = useState("");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const textDecorationHandler = (e) => {
    setTextDecoration(`${e.target.value}`);
  };

  const textDecorationStyleHandler = (e) => {
    setTextDecorationStyle(`${e.target.value}`);
  };

  const textDecorationColorHandler = (e) => {
    settextDecorationColor(`${e.target.value}`);
  };

  const textDecorationCopyHandler = async () => {
    let text = `text-decoration: ${textDecoration} ${textDecorationStyle} ${textDecorationColor};`;
    await copyed(text);
    btnCopyTextChange();
  };

  const handleChangeComplete = (color, event) => {
    settextDecorationColor(color.hex);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      exit="exit"
      className="cssContainer"
    >
      <span className="titleSection">Text-decoration</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <p
              style={{
                textDecoration: `${textDecoration} ${textDecorationStyle} ${textDecorationColor}`,
                fontSize: 20,
              }}
            >
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box responsive_code">
            <pre>
              <span className="code_one">text-decoration</span>
              {": "}
              <span className="code_two">{textDecoration}</span>{" "}
              <span className="code_three">{textDecorationStyle}</span>{" "}
              <span className="code_two">{textDecorationColor}</span>;
            </pre>
          </div>
          <button onClick={textDecorationCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => textDecorationHandler(e)}>
              <option value="line-through">line-through</option>
              <option value="underline">underline</option>
              <option value="overline">overline</option>
            </select>
          </div>
          <div className="input_box">
            <label>Style</label>
            <select onChange={(e) => textDecorationStyleHandler(e)}>
              <option value="solid">solid</option>
              <option value="dotted">dotted</option>
              <option value="dashed">dashed</option>
              <option value="double">double</option>
              <option value="wavy">wavy</option>
            </select>
          </div>
          <div className="input_box">
            <label>Size</label>
            <input
              onChange={(e) => textDecorationColorHandler(e)}
              type="color"
            />
            <span>{textDecorationColor}</span>
          </div>
          <div className="input_box">
            <CompactPicker
              color={textDecorationColor}
              onChangeComplete={(e) => handleChangeComplete(e)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
