import React, { useContext, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import { Context } from "../../components/Context/TextContext";
import { PageContext } from "../../components/Context/PageContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function FontSize() {
  const { state, dispatch } = useContext(Context);
  const { pageState, pageDispatch } = useContext(PageContext);
  const { fontsize } = state;

  const fontsizeHandler = (e) => {
    //setFontsize(`${e.target.value}px`);
  };

  useEffect(() => {
    pageDispatch({ type: "SET_TYPE", payload: "css" });
  }, []);

  return (
    <div className="row">
      <Menu />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        exit="exit"
        className="cssContainer"
      >
        <span className="titleSection">Font size</span>

        <div className="topBox">
          <div className="preview_wraper">
            <span>Preview</span>
            <div className="preview_box drop_preview">
              <p style={{ fontSize: `${fontsize}` }}>Font size</p>
            </div>
          </div>
        </div>
        <div className="option_wraper">
          <div className="options">
            <div className="input_box">
              <label>Size</label>
              <input
                onChange={(e) => fontsizeHandler(e)}
                type="range"
                max={70}
              />
              <span>{fontsize}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
