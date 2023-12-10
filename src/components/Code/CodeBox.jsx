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
    borderEdge,
    borderEdgeType,
    borderEdgeColor,
    boxSizing,
    borderRadius,
    borderRadiusAngle,
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

    //background
    text +=
      bgType === "linear"
        ? `background-color: ${bgColor};`
        : bgType === "gradient"
        ? `background: ${gradientType}(${gradientAngle} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo});`
        : "";

    //border
    if (borderActive && borderWidth >= 1) {
      if (borderEdge[0] === 1) {
        text += `border: ${borderWidth} ${borderType} ${borderColor};box-sizing: ${boxSizing}`;
      }
    }
    if (borderEdge[0] === 0 && borderEdge[1] >= 1) {
      text += `border-top: ${borderEdge[1]}px ${borderEdgeType[1]} ${borderEdgeColor[1]};`;
    }
    if (borderEdge[0] === 0 && borderEdge[2] >= 1) {
      text += `border-top: ${borderEdge[2]}px ${borderEdgeType[2]} ${borderEdgeColor[2]};`;
    }
    if (borderEdge[0] === 0 && borderEdge[3] >= 1) {
      text += `border-top: ${borderEdge[3]}px ${borderEdgeType[3]} ${borderEdgeColor[3]};`;
    }
    if (borderEdge[0] === 0 && borderEdge[4] >= 1) {
      text += `border-top: ${borderEdge[4]}px ${borderEdgeType[4]} ${borderEdgeColor[4]};`;
    }

    //borderRadius
    if (borderRadius !== "0px") {
      if (borderRadiusAngle[0] === 1) {
        text += `border-radius: ${borderRadius};`;
      }
    }

    if (borderRadiusAngle[0] === 0 && borderRadiusAngle[1] >= 1) {
      text += `border-top-left-radius: ${borderRadiusAngle[1]};px`;
    }
    if (borderRadiusAngle[0] === 0 && borderRadiusAngle[2] >= 1) {
      text += `border-top-right-radius: ${borderRadiusAngle[2]};px`;
    }
    if (borderRadiusAngle[0] === 0 && borderRadiusAngle[3] >= 1) {
      text += `border-bottom-left-radius: ${borderRadiusAngle[3]};px`;
    }
    if (borderRadiusAngle[0] === 0 && borderRadiusAngle[4] >= 1) {
      text += `border-bottom-right-radius: ${borderRadiusAngle[4]};px`;
    }

    //opacity
    text += opacity !== "1" && `opacity: ${opacity};`;

    //skew
    text +=
      (skewX !== "0" || skewY !== "0") &&
      `transform: skew:(${skewX},${skewY});`;

    //rotate
    text += rotate !== "0" && `rotate: ${rotate};`;

    //shadow
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
            {borderWidth !== "0px" && borderEdge[0] === 1 && (
              <>
                <span className="code_one">border</span>
                {": "}
                <span className="code_three">{borderWidth}</span>{" "}
                <span className="code_two">{borderType}</span>{" "}
                <span className="code_three">{borderColor}</span>;
                <br />
                <span className="code_one">box-sizing</span>
                {": "}
                <span className="code_three">{boxSizing}</span> <br />
              </>
            )}
            {borderEdge[0] === 0 && borderEdge[1] >= 1 && (
              <>
                <span className="code_one">border-top</span>
                {": "}
                <span className="code_three">
                  {borderEdge[1]}px {borderEdgeType[1]} {borderEdgeColor[1]}
                </span>
                ; <br />
              </>
            )}
            {borderEdge[0] === 0 && borderEdge[2] >= 1 && (
              <>
                <span className="code_one">border-bottom</span>
                {": "}
                <span className="code_three">
                  {borderEdge[2]}px {borderEdgeType[2]} {borderEdgeColor[2]}
                </span>
                ; <br />
              </>
            )}
            {borderEdge[0] === 0 && borderEdge[3] >= 1 && (
              <>
                <span className="code_one">border-left</span>
                {": "}
                <span className="code_three">
                  {borderEdge[3]}px {borderEdgeType[3]} {borderEdgeColor[3]}
                </span>
                ; <br />
              </>
            )}
            {borderEdge[0] === 0 && borderEdge[4] >= 1 && (
              <>
                <span className="code_one">border-right</span>
                {": "}
                <span className="code_three">
                  {borderEdge[4]}px {borderEdgeType[4]} {borderEdgeColor[4]}
                </span>
                ; <br />
              </>
            )}
            {borderRadius !== "0px" && borderRadiusAngle[0] === 1 && (
              <>
                <span className="code_one">border-radius</span>
                {": "}
                <span className="code_three">{borderRadius}</span>; <br />
              </>
            )}
            {borderRadiusAngle[0] === 0 && borderRadiusAngle[1] >= 1 && (
              <>
                <span className="code_one">border-top-left-radius</span>
                {": "}
                <span className="code_three">
                  {borderRadiusAngle[1]}px
                </span>; <br />
              </>
            )}
            {borderRadiusAngle[0] === 0 && borderRadiusAngle[2] >= 1 && (
              <>
                <span className="code_one">border-top-right-radius</span>
                {": "}
                <span className="code_three">
                  {borderRadiusAngle[2]}px
                </span>; <br />
              </>
            )}
            {borderRadiusAngle[0] === 0 && borderRadiusAngle[3] >= 1 && (
              <>
                <span className="code_one">border-bottom-left-radius</span>
                {": "}
                <span className="code_three">
                  {borderRadiusAngle[3]}px
                </span>; <br />
              </>
            )}
            {borderRadiusAngle[0] === 0 && borderRadiusAngle[4] >= 1 && (
              <>
                <span className="code_one">border-bottom-right-radius</span>
                {": "}
                <span className="code_three">
                  {borderRadiusAngle[4]}px
                </span>; <br />
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
