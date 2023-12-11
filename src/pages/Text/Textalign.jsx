import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Textalign() {
  const { state, dispatch } = useContext(Context);
  const { textalign } = state;

  const textAlignHandler = (e) => {
    dispatch({ type: "SET_TEXT_ALIGN", payload: e.target.value });
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
          
          <TitleContainer title="Text align" />
          <Preview />
          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <label>Type</label>
                <select onChange={(e) => textAlignHandler(e)} value={textalign}>
                  <option value="center">center</option>
                  <option value="left">left</option>
                  <option value="right">right</option>
                  <option value="justify">justify</option>
                  <option value="end">end</option>
                  <option value="start">start</option>
                </select>
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
