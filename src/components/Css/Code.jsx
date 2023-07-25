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
      <div className="copy_code_wraper">
        <span>Code</span>
        <div className="code_box">
          <pre>
            {bgType === "linear" ? (
              <>
                <span className="code_one">background-color</span>:{" "}
                <span className="code_three">{bgColor}</span>;
                <br />
              </>
            ) : null}

            {bgType === "gradient" ? (
              <>
                <span className="code_one">background</span>
                {": "}
                <span className="code_two">{gradientType}</span>
                {"("}
                <span className="code_three">{gradientAngle}</span>
                <span className="code_two">{gradientColorOne}</span>{" "}
                <span className="code_three">{gradientRateOne}</span>
                {", "}
                <span className="code_two">{gradientColorTwo}</span>{" "}
                <span className="code_three">{gradientRateTwo}</span>
                {");"}
                <br />
              </>
            ) : null}

            {borderActive && (
              <>
                <span className="code_one">border</span>
                {": "}
                <span className="code_three">{borderWidth}</span>{" "}
                <span className="code_two">{borderType}</span>{" "}
                <span className="code_three">{borderColor}</span>;
                <br />
              </>
            )}
          </pre>
        </div>
        <button onClick={bgColorCopyHandler} className="copyBtn">
          {copyClickText ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Box;
