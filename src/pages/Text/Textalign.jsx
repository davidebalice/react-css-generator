import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function Textalign() {
  /*
  const [textAlign, setTextAlign] = useState("center");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const textAlignHandler = (e) => {
    setTextAlign(`${e.target.value}`);
  };

  const textAlignCopyHandler = async () => {
    let text = `text-align: ${textAlign};`;
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
      <span className="titleSection">Text-align</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box">
            <p
              style={{
                textAlign: `${textAlign}`,
                lineHeight: 10,
                fontSize: 25,
              }}
            >
              Text-align
            </p>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">text-align</span>
              {": "}
              <span className="code_three">{textAlign}</span>;
            </pre>
          </div>
          <button onClick={textAlignCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Type</label>
            <select onChange={(e) => textAlignHandler(e)}>
              <option value="center">center</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="justify">justify</option>
              <option value="end">end</option>
              <option value="start">start</option>
            </select>
            <span>{textAlign}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );*/
}
