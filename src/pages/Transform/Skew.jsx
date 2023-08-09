import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";

export default function SkewX() {
  const [skewX, setSkewX] = useState("0");
  const { copyClickText, btnCopyTextChange } = useContext(Context);

  const skewXYHandler = (e) => {
    setSkewX(`${e.target.value}deg`);
  };

  return (
    <div className="row">
      <Menu />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        exit="exit"
        className="cssContainer"
      >
        <span className="titleSection">SkewX</span>
        <div className="topBox"></div>
        <div className="option_wraper">
          <div className="options">
            <div className="input_box">
              <label>Size</label>
              <input
                onChange={(e) => skewXYHandler(e)}
                type="range"
                min={-60}
                max={60}
              />
              <span>{skewX}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
