import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/BoxContext";
import { BiSolidCopy } from "react-icons/bi";

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
    boxShadowColorRgb,
    boxShadowHorizontal,
    boxShadowVertical,
    boxShadowSpread,
    boxShadowInset,
    opacity,
    skewX,
    skewY,
    rotate,
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

    text += opacity !== "1" && `opacity: ${opacity};`;

    text +=
      (skewX !== "0" || skewY !== "0") &&
      `transform: skew:(${skewX},${skewY});`;

    text += rotate !== "0" && `rotate: ${rotate};`;

    text +=
      (boxShadowVertical !== "0px" || boxShadowHorizontal !== "0px") &&
      `box-shadow: ${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur}
    ${boxShadowSpread} ${boxShadowColorRgb} ${boxShadowInset};`;

    text = text.replace(/false/g, "");

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
                  {boxShadowSpread} {boxShadowColorRgb} {boxShadowInset}
                </span>
                ;
                <br />
              </>
            )}
            {opacity !== "1" && (
              <>
                <span className="code_one">opacity</span>
                {": "}
                <span className="code_three">{opacity}</span>; <br />
              </>
            )}
            {(skewX !== "0" || skewY !== "0") && (
              <>
                <span className="code_one">transform</span>
                {": "}
                <span className="code_three">skew:({`${skewX},${skewY}`})</span>
                ; <br />
              </>
            )}
            {rotate !== "0" && (
              <>
                <span className="code_one">rotate</span>
                {": "}
                <span className="code_three">{rotate}</span>; <br />
              </>
            )}
          </pre>
        </div>
        <button onClick={copyHandler} className="copyBtn">
          <BiSolidCopy size={18} />
          {copyClickText ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Box;
