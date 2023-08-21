import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";


export default function Invert() {
  const { state, dispatch } = useContext(Context);
  const { invert } = state;

  const brightnessHandler = (e) => {
    dispatch({ type: "SET_BRIGHTNESS", payload: e.target.value });
  };
/*

  const [invert, setInvert] = useState("100%");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const invertHandler = (e) => {
    setInvert(`${e.target.value}%`);
  };

  const invertCopyHandler = async () => {
    let text = `filter: invert(${invert});`;
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
      <span className="titleSection">Invert</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div
            style={{ filter: `invert(${invert})` }}
            className="preview_box sepia_preview"
          ></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">filter</span>
              {": "}
              <span className="code_two">invert</span>(
              <span className="code_three">{invert}</span>) ;
            </pre>
          </div>
          <button onClick={invertCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Amount</label>
            <input onChange={(e) => invertHandler(e)} type="range" />
            <span>{invert}</span>
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
