import React, { useContext } from "react";
import { Context } from "../Context/BoxContext";

const Preview = () => {
  const { state } = useContext(Context);
  const { flexDirection, alignItems, justifyContent } = state;

  const flexStyle = flexDirection && {
    flexDirection: `${flexDirection}`,
  };

  const styles = {
    ...flexStyle,
  };


  /*
  <div
            className="preview_box flex-preview-box"
            style={{
              flexDirection: flex["flex-direction"],
              justifyContent: flex["justify-content"],
              alignItems: flex["align-items"],
            }}
          >
  */

  return (
    <div className="topBox">
      <div className="previewContainer">
        <div className="previewBox">
          <div className="previewDiv" style={styles}>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
