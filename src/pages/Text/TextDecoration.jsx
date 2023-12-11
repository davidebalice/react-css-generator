import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { CompactPicker } from "react-color";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function TextDecoration() {
  const { state, dispatch } = useContext(Context);
  const { textdecoration, textdecorationstyle, textdecorationcolor } = state;

  const textDecorationHandler = (e) => {
    dispatch({ type: "SET_TEXT_DECORATION", payload: e.target.value });
  };

  const textDecorationStyleHandler = (e) => {
    dispatch({ type: "SET_TEXT_DECORATION_STYLE", payload: e.target.value });
  };

  const textDecorationColorHandler = (e) => {
    dispatch({ type: "SET_TEXT_DECORATION_COLOR", payload: e.target.value });
  };

  const handleChangeComplete = (color, event) => {
    dispatch({ type: "SET_TEXT_DECORATION_COLOR", payload: color.hex });
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
          <TitleContainer title="Text decoration" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <select
                  onChange={(e) => textDecorationHandler(e)}
                  value={textdecoration}
                >
                  <option value="">none</option>
                  <option value="line-through">line-through</option>
                  <option value="underline">underline</option>
                  <option value="overline">overline</option>
                </select>
              </div>
              <div className="input_box">
                <select
                  onChange={(e) => textDecorationStyleHandler(e)}
                  value={textdecorationstyle}
                >
                  <option value="none">none</option>
                  <option value="solid">solid</option>
                  <option value="dotted">dotted</option>
                  <option value="dashed">dashed</option>
                  <option value="double">double</option>
                  <option value="wavy">wavy</option>
                </select>
              </div>
              <div className="input_box">
                <label>Size</label>
                <input
                  onChange={(e) => textDecorationColorHandler(e)}
                  type="color"
                  value={textdecorationcolor}
                />
                <span>{textdecorationcolor}</span>
              </div>
              <div className="input_box">
                <CompactPicker
                  color={textdecorationcolor}
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
