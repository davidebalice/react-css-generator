import React, { useContext } from "react";
import { PageContext } from "../../components/Context/PageContext";

const TitleContainer = ({ title }) => {
  const { pageState } = useContext(PageContext);

  let Context;
  if (pageState.pageType === "box") {
    Context = require("../../components/Context/BoxContext").Context;
  } else if (pageState.pageType === "text") {
    Context = require("../../components/Context/TextContext").Context;
  } else if (pageState.pageType === "filter") {
    Context = require("../../components/Context/FilterContext").Context;
  }

  const { handleReset } = useContext(Context);

  return (
    <div className="titleContainer">
      <span className="titleSection">{title}</span>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TitleContainer;
