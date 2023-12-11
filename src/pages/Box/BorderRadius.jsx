import React, { useContext } from "react";
import { Context } from "../../components/Context/BoxContext";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import Code from "../../components/Code/CodeBox";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function BorderRadius() {
  const { state, dispatch } = useContext(Context);
  const { borderRadius, borderRadiusAngle } = state;

  const borderRadiusHandler = (e) => {
    dispatch({ type: "SET_BORDER_RADIUS", payload: `${e.target.value}px` });
  };

  const activateAngle = (e) => {
    const allAngle = borderRadiusAngle[0] === 0 ? 1 : 0;
    dispatch({
      type: "SET_BORDER_RADIUS_ANGLE",
      payload: [allAngle, "0", "0", "0", "0"],
    });
  };

  const borderRadiusAngleHandler = (e, angle) => {
    if (angle === "topleft") {
      borderRadiusAngle[1] = e.target.value;
    } else if (angle === "topright") {
      borderRadiusAngle[2] = e.target.value;
    } else if (angle === "bottomleft") {
      borderRadiusAngle[3] = e.target.value;
    } else if (angle === "bottomright") {
      borderRadiusAngle[4] = e.target.value;
    }

    dispatch({
      type: "SET_BORDER_RADIUS_ANGLE",
      payload: [
        0,
        `${borderRadiusAngle[1]}`,
        `${borderRadiusAngle[2]}`,
        `${borderRadiusAngle[3]}`,
        `${borderRadiusAngle[4]}`,
      ],
    });
  };

  return (
    <>
      <div className="row">
        {" "}
        <Menu />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit="exit"
          className="cssContainer"
        >
          <TitleContainer title="Border radius" />
          <Preview />

          <div className="optionWrapper">
            <div className="checkboxWrapper">
              <input
                type="checkbox"
                checked={borderRadiusAngle[0] === 1}
                onClick={activateAngle}
                className="checkboxInput"
              />
              All angles
            </div>

            <div className="options">
              {borderRadiusAngle[0] === 1 && (
                <div className="input_box">
                  <label>Radius</label>
                  <input
                    onChange={(e) => borderRadiusHandler(e)}
                    type="range"
                    step="1"
                    value={borderRadius.replace("px", "")}
                  />
                  <span>{borderRadius}</span>
                </div>
              )}

              {borderRadiusAngle[0] === 0 && (
                <div className="radiusRow">
                  Top left
                  <input
                    onChange={(e) => borderRadiusAngleHandler(e, "topleft")}
                    type="range"
                    step="1"
                    value={borderRadiusAngle[1]}
                  />
                  <span>{borderRadiusAngle[1]}px</span>
                </div>
              )}
              {borderRadiusAngle[0] === 0 && (
                <div className="radiusRow">
                  Top right
                  <input
                    onChange={(e) => borderRadiusAngleHandler(e, "topright")}
                    type="range"
                    step="1"
                    value={borderRadiusAngle[2]}
                  />
                  <span>{borderRadiusAngle[2]}px</span>
                </div>
              )}
              {borderRadiusAngle[0] === 0 && (
                <div className="radiusRow">
                  Bottom left
                  <input
                    onChange={(e) => borderRadiusAngleHandler(e, "bottomleft")}
                    type="range"
                    step="1"
                    value={borderRadiusAngle[3]}
                  />
                  <span>{borderRadiusAngle[3]}px</span>
                </div>
              )}
              {borderRadiusAngle[0] === 0 && (
                <div className="radiusRow">
                  Bottom right
                  <input
                    onChange={(e) => borderRadiusAngleHandler(e, "bottomright")}
                    type="range"
                    step="1"
                    value={borderRadiusAngle[4]}
                  />
                  <span>{borderRadiusAngle[4]}px</span>
                </div>
              )}
            </div>
          </div>
          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
