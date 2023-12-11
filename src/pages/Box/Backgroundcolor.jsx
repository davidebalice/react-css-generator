import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import Code from "../../components/Code/CodeBox";
import { Context } from "../../components/Context/BoxContext";
import { motion } from "framer-motion";
import { CompactPicker } from "react-color";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Backgroundcolor() {
  const { state, dispatch } = useContext(Context);
  const { bgColor } = state;

  const handleChange = (e) => {
    dispatch({ type: "SET_BGCOLOR", payload: e.target.value });
    dispatch({ type: "SET_BG_TYPE", payload: "linear" });
  };

  const handleChangeComplete = (newColor) => {
    dispatch({ type: "SET_BGCOLOR", payload: newColor.hex });
    dispatch({ type: "SET_BG_TYPE", payload: "linear" });
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
          <TitleContainer title="Background color" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <label>color</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="color"
                  value={bgColor}
                />
                <span>{bgColor}</span>
              </div>
              <div className="input_box">
                <CompactPicker
                  color={bgColor}
                  onChangeComplete={(e) => handleChangeComplete(e)}
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
