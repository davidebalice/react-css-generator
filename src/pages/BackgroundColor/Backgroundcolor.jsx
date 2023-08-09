import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import { Context } from "../../components/Context/BoxContext";
import { motion } from "framer-motion";
import { CirclePicker, SliderPicker } from "react-color";
import Footer from "../../components/Footer/Footer";

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
          <span className="titleSection">Background color</span>

          <Preview />

          <div className="option_wraper">
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
                <CirclePicker
                  color={bgColor}
                  onChangeComplete={(e) => handleChangeComplete(e)}
                />
              </div>
              <div className="input_box">
                <SliderPicker
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
