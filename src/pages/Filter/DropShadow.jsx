import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import copyed from "../../func";

export default function DropShadow() {
  const [dropshadowblur, setDropshadowblur] = useState("50px");
  const [dropShadowColor, setDropShadowColor] = useState("#000");
  const [dropShadowHorizontal, setDropShadowHorizontal] = useState("-10px");
  const [dropVertical, setDropVertical] = useState("-10px");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const dropColorChange = (e) => {
    setDropShadowColor(e.target.value);
  };

  const dropBlurHandler = (e) => {
    setDropshadowblur(`${e.target.value}px`);
  };

  const dropHorizontalHandler = (e) => {
    setDropShadowHorizontal(`${e.target.value}px`);
  };

  const dropVerticalHandler = (e) => {
    setDropVertical(`${e.target.value}px`);
  };

  const borderCopyHandler = async () => {
    let text = `filter: drop-shadow(${dropShadowHorizontal} ${dropVertical} ${dropshadowblur} ${dropShadowColor})`;
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
      <span className="titleSection">Border</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div className="preview_box drop_preview">
            <img
              style={{
                filter: `drop-shadow(${dropShadowHorizontal} ${dropVertical} ${dropshadowblur} ${dropShadowColor})`,
              }}
              src="/images/React_logo.png"
            />
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box responsive_code">
            <pre>
              <span className="code_one">filter</span>
              {": "}
              <span className="code_two">drop-shadow</span>(
              <span className="code_three">{dropShadowHorizontal}</span>{" "}
              <span className="code_three">{dropVertical}</span>{" "}
              <span className="code_three">{dropshadowblur}</span>{" "}
              <span className="code_three">{dropShadowColor}</span>) ;
            </pre>
          </div>
          <button onClick={borderCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>color</label>
            <input onChange={(e) => dropColorChange(e)} type="color" />
          </div>
          <div className="input_box">
            <label>Blur</label>
            <input onChange={(e) => dropBlurHandler(e)} type="range" />
            <span>{dropshadowblur}</span>
          </div>
          <div className="input_box">
            <label>Horizontal offset</label>
            <input
              onChange={(e) => dropHorizontalHandler(e)}
              type="range"
              min={-100}
              max={100}
            />
            <span>{dropShadowHorizontal}</span>
          </div>
          <div className="input_box">
            <label>Vertical offset</label>
            <input
              onChange={(e) => dropVerticalHandler(e)}
              type="range"
              min={-100}
              max={100}
            />
            <span>{dropVertical}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
