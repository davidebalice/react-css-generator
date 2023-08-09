import React, { useContext, useState } from "react";
import { Context } from "../../components/Context/BoxContext";
import "../../style.css";
import { motion } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";

export default function Rotate() {
  const [rotate, setRotate] = useState("0");
  const { copyClickText, btnCopyTextChange } = useContext(Context);

  const rotateYHandler = (e) => {
    setRotate(`${e.target.value}deg`);
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
        <span className="titleSection">Rotate</span>
        <div className="topBox"></div>
        <div className="option_wraper">
          <div className="options">
            <div className="input_box">
              <label>Size</label>
              <input
                onChange={(e) => rotateYHandler(e)}
                type="range"
                min={-360}
                max={360}
              />
              <span>{rotate}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
