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
    dropShadowBlur,
    dropShadowColor,
    dropShadowHorizontal,
    dropShadowVertical,
    grayscale,
    heuRotate,
    invert,
    saturate,
    sepia,
  } = state;

  const copyHandler = async () => {
    let text = "";

    text +=
      selectedFilter === "brightness" &&
      brightness !== "" &&
      `filter: brightness(${brightness});`;

    text +=
      selectedFilter === "blur" && blur !== "" && `filter: blur(${blur});`;

    text +=
      selectedFilter === "contrast" &&
      contrast !== "" &&
      `filter: contrast(${contrast});`;

    text +=
      selectedFilter === "sepia" && sepia !== "" && `filter: sepia(${sepia});`;

    text += text +=
      selectedFilter === "grayscale" &&
      grayscale !== "" &&
      `filter: grayscale(${grayscale});`;

    text +=
      selectedFilter === "dropshadow" &&
      (dropShadowHorizontal !== "" || dropShadowVertical !== "") &&
      `filter: drop-shadow(${dropShadowHorizontal} ${dropShadowVertical} ${dropShadowBlur} ${dropShadowColor});`;

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
                <span className="code_three">
                  brightness({brightness})
                </span>; <br />
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
            {sepia !== "0%" && (
              <>
                <br />
                <span className="code_one">filter</span>
                {": "}
                <span className="code_three">sepia({sepia})</span>; <br />
              </>
            )}
            {grayscale !== "0%" && (
              <>
                <br />
                <span className="code_one">filter</span>
                {": "}
                <span className="code_three">grayscale({grayscale})</span>;{" "}
                <br />
              </>
            )}
            {(dropShadowHorizontal !== "" || dropShadowVertical !== "") && (
              <>
                <br />
                <span className="code_one">drop-shadow</span>
                {": "}
                <span className="code_three">{dropShadowHorizontal}</span>{" "}
                <span className="code_three">{dropShadowVertical}</span>{" "}
                <span className="code_three">{dropShadowBlur}</span>{" "}
                <span className="code_three">{dropShadowColor}</span> ;
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
