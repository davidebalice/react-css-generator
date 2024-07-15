import { motion } from "framer-motion";
import React, { useContext } from "react";
import { CompactPicker } from "react-color";
import Code from "../../components/Code/CodeBox";
import { Context } from "../../components/Context/BoxContext";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Backgroundcolor() {
  const { state, dispatch } = useContext(Context);
  const { backgroundColor, backgroundOpacity } = state;

  const handleChange = (e) => {
    dispatch({ type: "SET_BACKGROUND_COLOR", payload: e.target.value });
    dispatch({ type: "SET_BACKGROUND_TYPE", payload: "linear" });
  };

  const handleChangeComplete = (newColor) => {
    dispatch({ type: "SET_BACKGROUND_COLOR", payload: newColor.hex });
    dispatch({ type: "SET_BACKGROUND_TYPE", payload: "linear" });
  };

  const backgroundOpacityHandler = (e) => {
    dispatch({
      type: "SET_BACKGROUND_OPACITY",
      payload: `${e.target.value}`,
    });
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
                  value={backgroundColor}
                />
                <span>{backgroundColor}</span>
              </div>
              <div className="input_box">
                <CompactPicker
                  color={backgroundColor}
                  onChangeComplete={(e) => handleChangeComplete(e)}
                />
              </div>
            </div>
            <div className="input_box">
              <label>Color opacity</label>
              <input
                onChange={(e) => backgroundOpacityHandler(e)}
                type="range"
                step={0.01}
                min={0}
                max={1}
                value={backgroundOpacity}
              />
              <span>{backgroundOpacity}</span>
            </div>
          </div>

          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
