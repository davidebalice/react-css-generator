import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function FontSize() {
  const { state, dispatch } = useContext(Context);
  const { fontsize } = state;

  const fontsizeHandler = (e) => {
    dispatch({ type: "SET_FONT_SIZE", payload: e.target.value });
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
        
          <TitleContainer title="Font size" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => fontsizeHandler(e)}
                  type="range"
                  min={0}
                  max={80}
                  value={fontsize}
                />
                <span>{fontsize}px</span>
              </div>
            </div>
          </div>
          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
