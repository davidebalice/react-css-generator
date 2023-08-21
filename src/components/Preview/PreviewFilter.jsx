import React, { useContext } from "react";
import { Context } from "../Context/FilterContext";

const Preview = () => {
  const { state } = useContext(Context);
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

  let selectedStyle = {};

  switch (selectedFilter) {
    case "brightness":
      selectedStyle = {
        filter: `brightness(${brightness})`,
      };
      break;
    case "blur":
      selectedStyle = {
        filter: `blur(${blur})`,
      };
      break;
    case "contrast":
      selectedStyle = {
        filter: `contrast(${contrast})`,
      };
      break;
    case "sepia":
      selectedStyle = {
        filter: `sepia(${sepia})`,
      };
      break;
    case "grayscale":
      selectedStyle = {
        filter: `grayscale(${grayscale})`,
      };
      break;
    case "dropshadow":
      selectedStyle = {
        filter: `drop-shadow(${dropShadowHorizontal} ${dropShadowVertical} ${dropShadowBlur} ${dropShadowColor})`,
      };
      break;
    case "heurotate":
      selectedStyle = {
        filter: `hue-rotate(${heuRotate})`,
      };
      break;
    case "invert":
      selectedStyle = {
        filter: `invert(${invert})`,
      };
      break;
    case "saturate":
      selectedStyle = {
        filter: `saturate(${saturate})`,
      };
      break;
    default:
      break;
  }

  console.log(selectedStyle);

  const styles = {
    ...selectedStyle,
  };

  return (
    <div className="topBox">
      <div className="previewContainer previewContainerFilter">
        <div className="previewBox">
          <div className="previewFilter" style={styles}></div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
