import React, { useContext,useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFilter";
import Code from "../../components/Code/CodeFilter";
import { Context } from "../../components/Context/FilterContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Blur() {
  const { state, dispatch } = useContext(Context);
  const { blur } = state;

  const blurHandler = (e) => {
    dispatch({ type: "SET_BLUR", payload: `${e.target.value}px` });
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
          
          <TitleContainer title="Blur" />
          <Preview />
          
          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <input onChange={(e) => blurHandler(e)} type="range" value={blur.replace('px','')}/>
                <span>{blur}</span>
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
