import React, { useContext } from "react";
import "../../style.css";
import { Context } from "../Context/TextContext";

const Preview = () => {
  const { state } = useContext(Context);
  const { fontsize } = state;

  console.log(fontsize);

  const fontsizeStyle = {
    fontSize: `${fontsize}px`,
  };

  /*
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

  const opacityStyle = opacity !== "1" && {
    opacity: `${opacity}`,
  };

  const skewStyle = skewX !== "0" && {
    transform: `skew(${skewX}, ${skewY})`,
  };

  const rotateStyle = rotate !== "0" && {
    rotate: `${rotate}deg`,
  };
*/
  const styles = {
    ...fontsizeStyle,
  };
  console.log(styles);
  return (
    <div className="topBox">
      <div className="previewContainer">
        <div className="previewBox">
          <div className="previewText">
            <p style={styles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
