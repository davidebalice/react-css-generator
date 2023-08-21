import React, { useContext } from "react";
import { Context } from "../Context/TextContext";

const Preview = () => {
  const { state } = useContext(Context);
  const {
    fontsize,
    fontfamily,
    textcolor,
    fontweight,
    textdecoration,
    textdecorationstyle,
    textdecorationcolor,
    texttransform,
    letterspacing,
    lineheight,
    textalign,
  } = state;

  const fontsizeStyle = {
    fontSize: `${fontsize}px`,
  };

  const fontfamilyStyle = {
    fontFamily: `${fontfamily}`,
  };

  const textcolorStyle = {
    color: `${textcolor}`,
  };

  const fontweightStyle = {
    fontWeight: `${fontweight}`,
  };

  const textdecorationStyle = textdecoration !== "" && {
    textDecoration: `${textdecoration} ${textdecorationstyle} ${textdecorationcolor}`,
  };

  const texttransformStyle = texttransform !== "" && {
    textTransform: `${texttransform}`,
  };

  const letterspacingStyle = letterspacing !== "0" && {
    letterSpacing: `${letterspacing}px`,
  };

  const lineheightStyle = lineheight !== "0" && {
    lineHeight: `${lineheight}px`,
  };

  const textalignStyle = textalign !== "" && {
    textAlign: `${textalign}`,
  };

  const styles = {
    ...fontsizeStyle,
    ...fontfamilyStyle,
    ...textcolorStyle,
    ...fontweightStyle,
    ...textdecorationStyle,
    ...texttransformStyle,
    ...letterspacingStyle,
    ...lineheightStyle,
    ...textalignStyle,
  };
  
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
