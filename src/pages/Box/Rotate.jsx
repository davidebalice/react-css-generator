import React, { useContext } from "react";
import { Context } from "../../components/Context/BoxContext";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import Code from "../../components/Code/CodeBox";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Rotate() {
  const { state, dispatch } = useContext(Context);
  const { rotate } = state;

  const rotateHandler = (e) => {
    dispatch({ type: "SET_ROTATE", payload: e.target.value });
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
          <TitleContainer title="Rotate" />
          <Preview />
          <div className="topBox"></div>
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => rotateHandler(e)}
                  type="range"
                  min={-360}
                  max={360}
                  value={rotate.replace("deg", "")}
                />
                <span>{rotate}</span>
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
