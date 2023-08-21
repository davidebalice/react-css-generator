import React, { useContext, useState, useEffect } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/FilterContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);

  const {
    selectedFilter,
    brightness,
    blur,
    contrast,
    dropshadowblur,
    dropShadowColor,
    dropShadowHorizontal,
    dropVertical,
    grayscale,
    heuRotate,
    invert,
    saturate,
    sepia,
  } = state;

  const copyHandler = async () => {
    let text = "";

    text +=
    brightness !== "" && `filter: brightness(${brightness});`; 

    text +=
    blur !== "" && `filter: blur(${blur});`; 

    text +=
    contrast !== "" && `filter: contrast(${contrast});`; 

    text = text.replace(/false/g, "");

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
          <pre>
            {brightness !== "1" && (
              <>
                <br />
                <span className="code_one">filter</span>
                {": "}
                <span className="code_three">brightness({brightness})</span>; <br />
              </>
            )}
            {blur !== "0px" && (
              <>
                <br />
                <span className="code_one">blur</span>
                {": "}
                <span className="code_three">blur({blur})</span>; <br />
              </>
            )}
            {contrast !== "100%" && (
              <>
                <br />
                <span className="code_one">filter</span>
                {": "}
                <span className="code_three">contrast({contrast})</span>; <br />
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