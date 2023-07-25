import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { motion } from "framer-motion";
import { Context } from "../Context/ContextProvider";

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
  } = state;

  const bgColorCopyHandler = async () => {
    let text = "";

    text =
      text +
      (bgType === "linear"
        ? `background-color: ${bgColor};`
        : bgType === "gradient"
        ? `background: ${gradientType}(${gradientAngle} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo});`
        : "");

    text +=
      borderActive && `border: ${borderWidth} ${borderType} ${borderColor};`;

    await copyed(text);
    btnCopyTextChange();
  };

  const backgroundStyle =
    bgType === "linear"
      ? { backgroundColor: bgColor }
      : bgType === "gradient"
      ? {
          background: `${gradientType}(${gradientAngle} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo})`,
        }
      : { backgroundColor: "#f1f1f1" };

  const widthStyle = { width: "70%", height: "70%" };

  const borderStyle = borderActive && {
    border: `${borderWidth} ${borderType} ${borderColor}`,
  };

  const styles = { ...backgroundStyle, ...widthStyle, ...borderStyle };

  return (
    <div className="top_box">
      <div className="preview_wraper">
        <span>Preview</span>
        <div className="preview_box">
          <div className="preview_div" style={styles}>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
