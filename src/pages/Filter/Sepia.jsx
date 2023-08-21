import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";


export default function Sepia() {
  const { state, dispatch } = useContext(Context);
  const { sepia } = state;

  const brightnessHandler = (e) => {
    dispatch({ type: "SET_BRIGHTNESS", payload: e.target.value });
  };

/*
  const [sepia, setSepia] = useState("10%");
  const { copyClickText, btnCopyTextChange, mainVariant } = useContext(Context);

  const sepiaHandler = (e) => {
    setSepia(`${e.target.value}%`);
  };

  const sepiaCopyHandler = async () => {
    let text = `filter: sepia(${sepia});`;
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
      <span className="titleSection">Sepia</span>
      <div className="topBox">
        <div className="preview_wraper">
          <span>Preview</span>
          <div
            style={{ filter: `sepia(${sepia})` }}
            className="preview_box sepia_preview"
          ></div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box">
            <pre>
              <span className="code_one">filter</span>
              {": "}
              <span className="code_two">sepia</span>(
              <span className="code_three">{sepia}</span>) ;
            </pre>
          </div>
          <button onClick={sepiaCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <div className="options">
          <div className="input_box">
            <label>Radius</label>
            <input onChange={(e) => sepiaHandler(e)} type="range" />
            <span>{sepia}</span>
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
