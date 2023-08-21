import React, { useContext } from "react";
import { Context } from "../Context/FilterContext";

const Preview = () => {
  const { state } = useContext(Context);
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

  const filterValues = {
    brightness: brightness,
    blur: blur,
    contrast: contrast,
    sepia: sepia,
    grayscale: grayscale,
    "hue-rotate": heuRotate,
    invert: invert,
    saturate: saturate,
  };

  const activeFilters = Object.keys(filterValues).filter(
    (filter) =>
      filterValues[filter] !== undefined && filterValues[filter] !== ""
  );

  let filtersApplied = "";

  for (const filter of activeFilters) {
    filtersApplied += `${filter}(${filterValues[filter]}) `;
  }

  console.log(filtersApplied);

  const styles = {
    filter: filtersApplied,
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
