import React, { useContext, useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Css/Preview";
import Code from "../../components/Css/Code";
import { Context } from "../../components/Context/BoxContext";
import { PageContext } from "../../components/Context/PageContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

export default function Backgroundgradient() {
  const { state, dispatch } = useContext(Context);
  const { pageState, pageDispatch } = useContext(PageContext);

  const {
    bgType,
    gradientType,
    gradientAngle,
    gradientColorOne,
    gradientRateOne,
    gradientColorTwo,
    gradientRateTwo,
  } = state;

  useEffect(() => {
    pageDispatch({ type: "SET_TYPE", payload: "css" });
  }, []);

  const backgroundType = () => {
    dispatch({ type: "SET_BG_TYPE", payload: "gradient" });
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
          <span className="titleSection">Background gradient</span>

          <Preview />

          <div className="option_wraper">
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
