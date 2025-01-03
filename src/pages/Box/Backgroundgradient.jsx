import { motion } from "framer-motion";
import React, { useContext } from "react";
import Code from "../../components/Code/CodeBox";
import { Context } from "../../components/Context/BoxContext";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Backgroundgradient() {
  const { state, dispatch } = useContext(Context);

  const {
    gradientType,
    gradientAngle,
    gradientColorOne,
    gradientRateOne,
    gradientColorTwo,
    gradientRateTwo,
  } = state;

  const backgroundType = () => {
    dispatch({ type: "SET_BACKGROUND_TYPE", payload: "gradient" });
  };

  const gradientColorOneChange = (e) => {
    dispatch({ type: "SET_GRADIENT_COLOR_ONE", payload: e.target.value });
    backgroundType();
  };

  const gradientColorTowChange = (e) => {
    dispatch({ type: "SET_GRADIENT_COLOR_TWO", payload: e.target.value });
    backgroundType();
  };

  const gradientAngleChange = (e) => {
    dispatch({ type: "SET_GRADIENT_ANGLE", payload: `${e.target.value}deg,` });
    backgroundType();
  };

  const gradientRateOneChange = (e) => {
    dispatch({ type: "SET_GRADIENT_RATE_ONE", payload: `${e.target.value}%` });
    backgroundType();
  };

  const gradientRateTwoChange = (e) => {
    dispatch({ type: "SET_GRADIENT_RATE_TWO", payload: `${e.target.value}%` });
    backgroundType();
  };

  const gradientTypeChange = (e) => {
    dispatch({ type: "SET_GRADIENT_TYPE", payload: e.target.value });
    backgroundType();
    if (e.target.value === "radial-gradient") {
      dispatch({ type: "SET_GRADIENT_ANGLE", payload: `` });
    } else {
      dispatch({ type: "SET_GRADIENT_ANGLE", payload: `90deg,` });
    }
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
          <TitleContainer title="Background gradient" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box color_Grid">
                <div className="col_color">
                  <label>color</label>
                  <input
                    onChange={(e) => gradientColorOneChange(e)}
                    type="color"
                    value={gradientColorOne}
                  />
                </div>
                <dir>
                  <label>%</label>
                  <input
                    onChange={(e) => gradientRateOneChange(e)}
                    type="number"
                    value={gradientRateOne.replace("%", "")}
                  />
                </dir>
              </div>
              <div className="input_box color_Grid">
                <div className="col_color">
                  <label>color</label>
                  <input
                    onChange={(e) => gradientColorTowChange(e)}
                    type="color"
                    value={gradientColorTwo}
                  />
                </div>
                <div>
                  <label>%</label>
                  <input
                    onChange={(e) => gradientRateTwoChange(e)}
                    type="number"
                    value={gradientRateTwo.replace("%", "")}
                  />
                </div>
              </div>
              {gradientType === "linear-gradient" && (
                <div className="input_box">
                  <label>Angle</label>
                  <input
                    onChange={(e) => gradientAngleChange(e)}
                    type="range"
                    max={360}
                  />
                  <span>{gradientAngle}</span>
                </div>
              )}
              <div className="input_box">
                <label>Type</label>
                <select onChange={(e) => gradientTypeChange(e)} name="" id="">
                  <option value="linear-gradient">linear-gradient</option>
                  <option value="radial-gradient">radial-gradient</option>
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
