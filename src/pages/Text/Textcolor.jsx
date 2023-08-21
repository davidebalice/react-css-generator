import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { CompactPicker } from "react-color";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Textcolor() {
  const { state, dispatch } = useContext(Context);
  const { textcolor } = state;

  const textColorHandler = (e) => {
    dispatch({ type: "SET_TEXT_COLOR", payload: e.target.value });
  };

  const handleChangeComplete = (color, event) => {
    dispatch({ type: "SET_TEXT_COLOR", payload: color.hex });
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
          <TitleContainer title="Color" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <input
                  onChange={(e) => textColorHandler(e)}
                  type="color"
                  value={textcolor}
                />
                <span>{textcolor}</span>
              </div>
              <div className="input_box">
                <CompactPicker
                  color={textcolor}
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
