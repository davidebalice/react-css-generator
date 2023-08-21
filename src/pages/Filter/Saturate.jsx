import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";


export default function Saturate() {
  const { state, dispatch } = useContext(Context);
  const { saturate } = state;

  const brightnessHandler = (e) => {
    dispatch({ type: "SET_BRIGHTNESS", payload: e.target.value });
  };
/*

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
    <>
    <div className="row">
      <Menu />
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
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
              <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );*/
}
