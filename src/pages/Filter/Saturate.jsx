import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Saturate() {
  const { state, dispatch } = useContext(Context);
  const { saturate } = state;

  const saturateHandler = (e) => {
    dispatch({ type: "SET_SATURATE", payload: `${e.target.value}%` });
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
          <TitleContainer title="Saturate" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <input
                  onChange={(e) => saturateHandler(e)}
                  type="range"
                  max={300}
                  value={saturate.replace("%", "")}
                />
                <span>{saturate}</span>
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
