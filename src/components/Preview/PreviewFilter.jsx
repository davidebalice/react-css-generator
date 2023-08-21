import React, { useContext } from "react";
import { Context } from "../Context/FilterContext";

const Preview = () => {
  const { state } = useContext(Context);
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

  let selectedStyle = {};

  switch (selectedFilter) {
    case 'brightness':
      selectedStyle = {
        filter: `brightness(${brightness})`,
      };
      break;
    case 'blur':
      selectedStyle = {
        filter: `blur(${blur})`,
      };
      break;
    case 'contrast':
      selectedStyle = {
        filter: `contrast(${contrast})`,
      };
      break;
    default:
      break;
  }
/*
  const brightnessStyle = {
    filter: `brightness(${brightness})`,
  };

  const blurStyle = {
    filter: `blur(${blur})`,
  };

  const contrastStyle = {
    filter: `contrast(${contrast})`,
  };
*/
  const styles = {
    ...selectedStyle,
  };
  
  return (
    <div className="topBox">
      <div className="previewContainer">
        <div className="previewBox">
          <div className="previewFilter" style={styles}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
