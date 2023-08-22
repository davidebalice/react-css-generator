import React, { useContext } from "react";
import { Context } from "../Context/FlexContext";
import Card from "../../pages/Flex/Card";

const Preview = () => {
  const { state } = useContext(Context);
  const { gridItem, column, gridGap } = state;

  const gridStyle = { display: "grid" };

  const columnStyle = column !== "" && {
    gridTemplateColumns: `repeat(${column} ,1fr)`,
  };

  const gridGapStyle = gridGap !== "" && {
    gridGap: `${gridGap}`,
  };

  const styles = {
    ...gridStyle,
    ...columnStyle,
    ...gridGapStyle,
  };

  const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="topBox">
      <div className="previewContainer previewContainerGrid">
        <div className="previewBox previewBoxScroll">
          <div className="previewFlex" style={styles}>
            {cards.slice(0, gridItem).map((card) => (
              <Card item={card} type="grid" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
