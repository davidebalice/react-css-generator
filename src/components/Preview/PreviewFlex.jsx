import React, { useContext } from "react";
import { Context } from "../Context/FlexContext";
import Card from "../../pages/Flex/Card";

const Preview = () => {
  const { state } = useContext(Context);
  const { item, flexDirection, alignItems, justifyContent, gap } = state;

  const flexStyle = { display: "flex" };

  const directionStyle = flexDirection !== "" && {
    flexDirection: `${flexDirection}`,
  };

  const alignItemsStyle = alignItems !== "" && {
    alignItems: `${alignItems}`,
  };

  const justifyContentStyle = justifyContent !== "" && {
    justifyContent: `${justifyContent}`,
  };

  const gapStyle = gap !== "" && {
    gap: `${gap}`,
  };

  const styles = {
    ...flexStyle,
    ...directionStyle,
    ...alignItemsStyle,
    ...justifyContentStyle,
    ...gapStyle,
  };

  const cards = ["1", "2", "3", "4", "5"];

  return (
    <div className="topBox">
      <div className="previewContainer previewContainerGrid">
        <div className="previewBox previewBoxScroll">
          <div className="previewFlex" style={styles}>
            {cards.slice(0, item).map((card) => (
              <Card item={card} type="flex" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
