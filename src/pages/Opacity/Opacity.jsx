import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import Footer from "../../components/Footer/Footer";

export default function Opasity() {
  const [opasity, setOpasity] = useState("0.5");
  const { copyClickText, btnCopyTextChange } = useContext(Context);

  const opasityHandler = (e) => {
    setOpasity(`${e.target.value / 100}`);
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
          <span className="titleSection">Opacity</span>
          <div className="topBox"></div>
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Radius</label>
                <input onChange={(e) => opasityHandler(e)} type="range" />
                <span>{opasity}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
