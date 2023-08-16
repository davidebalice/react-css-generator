import React, { useContext } from "react";
import "../../style.css";
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

  const styles = {
    ...fontsizeStyle,
    ...fontfamilyStyle,
    ...textcolorStyle,
    ...fontweightStyle,
    ...textdecorationStyle,
  };
  //console.log(styles);
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
