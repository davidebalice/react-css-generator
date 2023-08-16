import React, { useContext, useState, useEffect } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/TextContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);
  const [fontfamilyStyle, setFontfamilyStyle] = useState(
    "https://fonts.googleapis.com/css2?family=Abel&display=swap"
  );
  const {
    textcolor,
    fontfamily,
    fontsize,
    fontweight,
    textdecoration,
    textdecorationstyle,
    textdecorationcolor,
  } = state;

  useEffect(() => {
    switch (fontfamily) {
      case "Roboto":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');`
        );
        break;
      case "Oswald":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');`
        );
        break;
      case "Ubuntu":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');`
        );
        break;
      case "Playfair Display":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');`
        );
        break;
      case "Abel":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');`
        );
        break;
      case "Bebas Neue":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`
        );
        break;
      case "Dancing Script":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');`
        );
        break;
      case "Josefin Sans":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');`
        );
        break;
      case "Titillium Web":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');`
        );
        break;
      case "PT Serif":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');`
        );
        break;
      case "Quicksand":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');`
        );
        break;
      case "Mukta":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap');`
        );
        break;
      case "Pacifico":
        setFontfamilyStyle(
          `@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`
        );
        break;
      default:
        break;
    }
  }, [fontfamily]);

  const copyHandler = async () => {
    let text = "";

    text +=
      fontfamily !== "" && `${fontfamilyStyle} font-family: ${fontfamily};`;

    text += fontsize !== "0px" && `font-size: ${fontsize}px;`;

    text += textcolor !== "" && `color: ${textcolor};`;

    text += fontweight !== "" && `font-weight: ${fontweight};`;

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
          <pre>
            {fontfamily !== "" && (
              <>
                {fontfamilyStyle}
                <br />
                <span className="code_one">font-family</span>
                {": "}
                <span className="code_three">{fontfamily}</span>; <br />
              </>
            )}

            {fontsize !== "0" && (
              <>
                <span className="code_one">font-size</span>
                {": "}
                <span className="code_three">{fontsize}px</span>; <br />
              </>
            )}

            {textcolor !== "0" && (
              <>
                <span className="code_one">color</span>
                {": "}
                <span className="code_three">{textcolor}</span>; <br />
              </>
            )}

            {fontweight !== "" && (
              <>
                <span className="code_one">font-weight</span>
                {": "}
                <span className="code_three">{fontweight}</span>; <br />
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
