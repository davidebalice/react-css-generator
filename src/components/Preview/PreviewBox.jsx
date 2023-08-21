import React, { useContext } from "react";
import { Context } from "../Context/BoxContext";

const Preview = () => {
  const { state } = useContext(Context);
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

  const boxShadowStyle = (boxShadowVertical !== "0px" ||
    boxShadowHorizontal !== "0px") && {
    boxShadow: `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColorRgb} ${boxShadowInset}`,
  };

  const opacityStyle = opacity !== "1" && {
    opacity: `${opacity}`,
  };

  const skewStyle = skewX !== "0" && {
    transform: `skew(${skewX}, ${skewY})`,
  };

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
