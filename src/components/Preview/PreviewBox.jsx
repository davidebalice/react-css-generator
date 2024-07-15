import React, { useContext } from "react";
import { Context } from "../Context/BoxContext";

const Preview = () => {
  const { state } = useContext(Context);
  const {
    backgroundType,
    backgroundColor,
    backgroundOpacity,
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

  const hexToRgba = (hex, opacity) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  //background
  const backgroundStyle =
    backgroundType === "linear"
      ? {
          backgroundColor:
            backgroundOpacity < 1
              ? hexToRgba(backgroundColor, backgroundOpacity)
              : backgroundColor,
        }
      : backgroundType === "gradient"
      ? {
          background: `${gradientType}(${gradientAngle} ${gradientColorOne} ${gradientRateOne}, ${gradientColorTwo} ${gradientRateTwo})`,
        }
      : { backgroundColor: "#d1d1d1" };

  //border

  let borderStyle = null;

  if (borderStyle !== "0px" || borderEdge[0] === 0) {
    if (borderEdge[0] === 1) {
      borderStyle = borderActive && {
        border: `${borderWidth} ${borderType} ${borderColor}`,
        boxSizing: boxSizing,
      };
    }
    if (borderEdge[0] === 0) {
      let topBorder = null;
      let topBorderType = null;
      let topBorderColor = null;
      let bottomBorder = null;
      let bottomBorderType = null;
      let bottomBorderColor = null;
      let leftBorder = null;
      let leftBorderType = null;
      let leftBorderColor = null;
      let rightBorder = null;
      let rightBorderType = null;
      let rightBorderColor = null;

      if (borderEdge[1] >= 1) {
        topBorder = `${borderEdge[1]}px`;
        topBorderType = ` ${borderEdgeType[1]} `;
        topBorderColor = ` ${borderEdgeColor[1]} `;
      }
      if (borderEdge[2] >= 1) {
        bottomBorder = `${borderEdge[2]}px`;
        bottomBorderType = ` ${borderEdgeType[2]} `;
        bottomBorderColor = ` ${borderEdgeColor[2]} `;
      }
      if (borderEdge[3] >= 1) {
        leftBorder = `${borderEdge[3]}px`;
        leftBorderType = ` ${borderEdgeType[3]} `;
        leftBorderColor = ` ${borderEdgeColor[3]} `;
      }
      if (borderEdge[4] >= 1) {
        rightBorder = `${borderEdge[4]}px`;
        rightBorderType = ` ${borderEdgeType[4]} `;
        rightBorderColor = ` ${borderEdgeColor[4]} `;
      }

      if (topBorder || bottomBorder || leftBorder || rightBorder) {
        borderStyle = {
          ...(topBorder && {
            borderTop: `${topBorder} ${topBorderType} ${topBorderColor}`,
          }),
          ...(bottomBorder && {
            borderBottom: `${bottomBorder} ${bottomBorderType} ${bottomBorderColor}`,
          }),
          ...(leftBorder && {
            borderLeft: `${leftBorder} ${leftBorderType} ${leftBorderColor}`,
          }),
          ...(rightBorder && {
            borderRight: `${rightBorder} ${rightBorderType} ${rightBorderColor}`,
          }),
          boxSizing: boxSizing,
        };
      }
    }
  }

  console.log(borderStyle);

  //borderRadius
  let borderRadiusStyle = null;

  if (borderRadius !== "0px" || borderRadiusAngle[0] === 0) {
    if (borderRadiusAngle[0] === 1) {
      borderRadiusStyle = { borderRadius: `${borderRadius}` };
    }
    if (borderRadiusAngle[0] === 0) {
      let topLeftRadius = null;
      let topRightRadius = null;
      let bottomLeftRadius = null;
      let bottomRightRadius = null;

      if (borderRadiusAngle[1] >= 1) {
        topLeftRadius = `${borderRadiusAngle[1]}px`;
      }
      if (borderRadiusAngle[2] >= 1) {
        topRightRadius = `${borderRadiusAngle[2]}px`;
      }
      if (borderRadiusAngle[3] >= 1) {
        bottomLeftRadius = `${borderRadiusAngle[3]}px`;
      }
      if (borderRadiusAngle[4] >= 1) {
        bottomRightRadius = `${borderRadiusAngle[4]}px`;
      }

      if (
        topLeftRadius ||
        topRightRadius ||
        bottomLeftRadius ||
        bottomRightRadius
      ) {
        borderRadiusStyle = {
          ...(topLeftRadius && { borderTopLeftRadius: topLeftRadius }),
          ...(topRightRadius && { borderTopRightRadius: topRightRadius }),
          ...(bottomLeftRadius && { borderBottomLeftRadius: bottomLeftRadius }),
          ...(bottomRightRadius && {
            borderBottomRightRadius: bottomRightRadius,
          }),
        };
      }
    }
  }

  //shadow
  const boxShadowStyle = (boxShadowVertical !== "0px" ||
    boxShadowHorizontal !== "0px") && {
    boxShadow: `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColorRgb} ${boxShadowInset}`,
  };

  //opacity
  const opacityStyle = opacity !== "1" && {
    opacity: `${opacity}`,
  };

  //skew
  const skewStyle = (skewX !== "0" || skewY !== "0") && {
    transform: `skew(${skewX}, ${skewY})`,
  };

  //rotate
  const rotateStyle = rotate !== "0" && {
    rotate: `${rotate}deg`,
  };

  const styles = {
    ...backgroundStyle,
    ...borderStyle,
    ...borderRadiusStyle,
    ...boxShadowStyle,
    ...opacityStyle,
    ...skewStyle,
    ...rotateStyle,
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

export default Preview;
