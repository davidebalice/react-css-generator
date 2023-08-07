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

  const copyHandler = async () => {
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

    text += borderRadius !== "0px" && `border-radius: ${borderRadius};`;

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
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
            {borderRadius !== "0px" && (
              <>
                <span className="code_one">border-radius</span>
                {": "}
                <span className="code_three">{borderRadius}</span>; <br />
              </>
            )}

            {(boxShadowVertical !== "0px" || boxShadowHorizontal !== "0px") && (
              <>
                <span className="code_one">box-shadow</span>
                {": "}
                <span className="code_three">
                  {boxShadowHorizontal} {boxShadowVertical} {boxShadowBlur}{" "}
                  {boxShadowSpread} {boxShadowColor} {boxShadowInset}
                </span>
                ;
                <br />
              </>
            )}
          </pre>
        </div>
        <button onClick={copyHandler} className="copyBtn">
          {copyClickText ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Box;
