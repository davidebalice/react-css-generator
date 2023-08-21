import React, { useContext, useState, useEffect } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/FilterContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);

  const {
    brightness,
    blur,
    contrast,
    grayscale,
    heuRotate,
    invert,
    saturate,
    sepia,
  } = state;

  const copyHandler = async () => {
    let text = "";

    (brightness !== "1" ||
      blur !== "0px" ||
      contrast !== "100%" ||
      sepia !== "0%" ||
      grayscale !== "0%" ||
      invert !== "0%" ||
      heuRotate !== "" ||
      saturate !== "100%") &&
      (text += `filter: `);

    text += brightness !== "1" && ` brightness(${brightness})`;

    text += blur !== "0px" && ` blur(${blur})`;

    text += contrast !== "100%" && ` contrast(${contrast})`;

    text += grayscale !== "0%" && ` grayscale(${grayscale})`;

    text += invert !== "0%" && ` invert(${invert})`;

    text += heuRotate !== "" && ` heu-rotate(${heuRotate})`;

    text += sepia !== "" && ` sepia(${sepia})`;

    text += saturate !== "" && ` saturate(${saturate})`;

    text += text += grayscale !== "" && ` grayscale(${grayscale})`;

    text = text.replace(/false/g, "");

    (brightness !== "1" ||
      blur !== "0px" ||
      contrast !== "100%" ||
      sepia !== "0%" ||
      grayscale !== "0%" ||
      invert !== "0%" ||
      heuRotate !== "" ||
      saturate !== "100%") &&
      (text += `;`);

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
          <pre>
            {(brightness !== "1" ||
              blur !== "0px" ||
              contrast !== "100%" ||
              sepia !== "0%" ||
              grayscale !== "0%" ||
              invert !== "0%" ||
              heuRotate !== "" ||
              saturate !== "100%") && (
              <>
                <br />
                <span className="code_one">filter</span>
                {": "}
              </>
            )}

            {brightness !== "1" && (
              <>
                {" "}
                <span className="code_three">brightness({brightness})</span>
              </>
            )}
            {blur !== "0px" && (
              <>
                {" "}
                <span className="code_three">blur({blur})</span>
              </>
            )}
            {contrast !== "100%" && (
              <>
                {" "}
                <span className="code_three">contrast({contrast})</span>
              </>
            )}
            {sepia !== "0%" && (
              <>
                {" "}
                <span className="code_three">sepia({sepia})</span>
              </>
            )}
            {grayscale !== "0%" && (
              <>
                {" "}
                <span className="code_three">grayscale({grayscale})</span>
              </>
            )}
            {heuRotate !== "" && (
              <>
                {" "}
                <span className="code_three">heu-rotate({heuRotate})</span>
              </>
            )}
            {invert !== "0%" && (
              <>
                {" "}
                <span className="code_three">invert({invert})</span>
              </>
            )}
            {saturate !== "100%" && (
              <>
                {" "}
                <span className="code_three">saturate({saturate})</span>
              </>
            )}
            {(brightness !== "1" ||
              blur !== "0px" ||
              contrast !== "100%" ||
              sepia !== "0%" ||
              grayscale !== "0%" ||
              invert !== "0%" ||
              heuRotate !== "" ||
              saturate !== "100%") && <>{";"}</>}
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
