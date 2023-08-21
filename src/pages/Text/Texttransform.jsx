import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Texttransform() {
  const { state, dispatch } = useContext(Context);
  const { texttransform } = state;

  const textTransformHandler = (e) => {
    dispatch({ type: "SET_TEXT_TRANSFORM", payload: e.target.value });
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
          <TitleContainer title="Text transform" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <select
                  onChange={(e) => textTransformHandler(e)}
                  value={texttransform}
                >
                  <option value="">none</option>
                  <option value="uppercase">uppercase</option>
                  <option value="capitalize">capitalize</option>
                  <option value="lowercase">lowercase</option>
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
