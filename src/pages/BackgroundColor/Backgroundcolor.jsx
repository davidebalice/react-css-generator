import React, { useContext } from "react";
import Menu from "../../components/Css/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import { motion } from "framer-motion";
import { Context } from "../../components/Context/ContextProvider";
import { CirclePicker, SliderPicker } from "react-color";

export default function Backgroundcolor() {
  const { mainVariant, state, dispatch } = useContext(Context);
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
    <div className="row">
      <Menu />

      <motion.div
        variants={mainVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="style_Container"
      >
        <span className="titr">Background-color</span>

        <div>
          <Preview />
        </div>

        <div className="option_wraper">
          <span>Option</span>
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

        <div>
          <Code />
        </div>
      </motion.div>
    </div>
  );
}
