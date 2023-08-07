import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { motion } from "framer-motion";
import { Context } from "../Context/BoxContext";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);
  const {
    bgType,
    bgColor,
    gradientType,
    gradientAngle,
    gradientColorOne,
    gradientRateOne,
    gradientColorTwo,
    gradientRateTwo,
    borderActive,
    borderWidth,
    borderColor,
    borderType,
    borderRadius,
    boxShadowBlur,
    boxShadowColor,
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowSpread,
    boxShadowInset,
  } = state;

  const backgroundStyle =
    bgType === "linear"
      ? { backgroundColor: bgColor }
      : bgType === "gradient"
      ? {
          background: `${gradientType}(${gradientAngle} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo})`,
        }
      : { backgroundColor: "#d1d1d1" };

  const borderStyle = borderActive && {
    border: `${borderWidth} ${borderType} ${borderColor}`,
  };

  const borderRadiusStyle = borderRadius !== "0px" && {
    borderRadius: `${borderRadius}`,
  };

  const borderShadowStyle = (boxShadowVertical !== "0px" ||
    boxShadowHorizontal !== "0px") && {
    boxShadow: `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor} ${boxShadowInset}`,
  };

  const styles = {
    ...backgroundStyle,
    ...borderStyle,
    ...borderRadiusStyle,
    ...borderShadowStyle,
  };

  return (
    <div className="topBox">
      <div className="previewContainer">
        <div className="previewBox">
          <div className="previewDiv" style={styles}>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
