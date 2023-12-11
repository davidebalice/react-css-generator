import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Lineheight() {
  const { state, dispatch } = useContext(Context);
  const { lineheight } = state;

  const lineHeightHandler = (e) => {
    dispatch({ type: "SET_LINE_HEIGHT", payload: e.target.value });
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
          <TitleContainer title="Line height" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => lineHeightHandler(e)}
                  type="range"
                  max={150}
                  value={lineheight}
                />
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
