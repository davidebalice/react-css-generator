import React, { useContext } from "react";
import { Context } from "../../components/Context/BoxContext";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewBox";
import Code from "../../components/Code/CodeBox";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Border() {
  const { state, dispatch } = useContext(Context);
  const {
    borderWidth,
    borderColor,
    borderType,
    boxSizing,
    borderEdge,
    borderEdgeType,
    borderEdgeColor,
  } = state;

  const handleChange = (e) => {
    dispatch({ type: "SET_BORDER_COLOR", payload: e.target.value });
    borderActiveHandler();
  };

  const borderWidthHandler = (e) => {
    dispatch({ type: "SET_BORDER_WIDTH", payload: `${e.target.value}px` });
    borderActiveHandler();
  };

  const borderTypeHandler = (e) => {
    dispatch({ type: "SET_BORDER_TYPE", payload: e.target.value });
    borderActiveHandler();
  };

  const borderActiveHandler = () => {
    dispatch({ type: "SET_BORDER_ACTIVE", payload: true });
  };

  const boxSizingHandler = (e) => {
    dispatch({ type: "SET_BOX_SIZING", payload: e.target.value });
  };

  const activateEdge = (e) => {
    const allEdge = borderEdge[0] === 0 ? 1 : 0;
    dispatch({
      type: "SET_BORDER_EDGE",
      payload: [allEdge, "0", "0", "0", "0"],
    });
  };

  const borderEdgeHandler = (e, edge) => {
    if (edge === 1) {
      borderEdge[1] = e.target.value;
    } else if (edge === 2) {
      borderEdge[2] = e.target.value;
    } else if (edge === 3) {
      borderEdge[3] = e.target.value;
    } else if (edge === 4) {
      borderEdge[4] = e.target.value;
    }

    dispatch({
      type: "SET_BORDER_EDGE",
      payload: [
        0,
        `${borderEdge[1]}`,
        `${borderEdge[2]}`,
        `${borderEdge[3]}`,
        `${borderEdge[4]}`,
      ],
    });
  };

  const handleEdgeChange = (e, edge) => {
    if (edge === 1) {
      borderEdgeColor[1] = e.target.value;
    } else if (edge === 2) {
      borderEdgeColor[2] = e.target.value;
    } else if (edge === 3) {
      borderEdgeColor[3] = e.target.value;
    } else if (edge === 4) {
      borderEdgeColor[4] = e.target.value;
    }
    dispatch({
      type: "SET_BORDER_EDGE_COLOR",
      payload: [
        1,
        `${borderEdgeColor[1]}`,
        `${borderEdgeColor[2]}`,
        `${borderEdgeColor[3]}`,
        `${borderEdgeColor[4]}`,
      ],
    });
  };

  const borderEdgeTypeHandler = (e, edge) => {
    if (edge === 1) {
      borderEdgeType[1] = e.target.value;
    } else if (edge === 2) {
      borderEdgeType[2] = e.target.value;
    } else if (edge === 3) {
      borderEdgeType[3] = e.target.value;
    } else if (edge === 4) {
      borderEdgeType[4] = e.target.value;
    }
    dispatch({
      type: "SET_BORDER_EDGE_TYPE",
      payload: [
        1,
        `${borderEdgeType[1]}`,
        `${borderEdgeType[2]}`,
        `${borderEdgeType[3]}`,
        `${borderEdgeType[4]}`,
      ],
    });
  };

  const renderBorderEdges = () => {
    const blocks = [];
    if (borderEdge[0] === 0) {
      for (let i = 1; i <= 4; i++) {
        blocks.push(
          <>
            <div>
              {i === 1
                ? "top"
                : i === 2
                ? "bottom"
                : i === 3
                ? "left"
                : "right"}
            </div>
            <div>
              {" "}
              <input
                onChange={(e) => borderEdgeHandler(e, i)}
                type="range"
                step="1"
                value={borderEdge[i]}
              />
              <span>{borderEdge[i]}</span>
            </div>
            <div className="input_box">
              <label>Style</label>
              <select
                value={borderEdgeType[i]}
                onChange={(e) => borderEdgeTypeHandler(e, i)}
              >
                <option value="solid" selected={borderEdgeType[i] === "solid"}>
                  solid
                </option>
                <option
                  value="dashed"
                  selected={borderEdgeType[i] === "dashed"}
                >
                  dashed
                </option>
                <option
                  value="dotted"
                  selected={borderEdgeType[i] === "dotted"}
                >
                  dotted
                </option>
                <option
                  value="double"
                  selected={borderEdgeType[i] === "double"}
                >
                  double
                </option>
                <option
                  value="groove"
                  selected={borderEdgeType[i] === "groove"}
                >
                  groove
                </option>
                <option value="ridge" selected={borderEdgeType[i] === "ridge"}>
                  ridge
                </option>
                <option value="inset" selected={borderEdgeType[i] === "inset"}>
                  inset
                </option>
                <option
                  value="outset"
                  selected={borderEdgeType[i] === "outset"}
                >
                  outset
                </option>
              </select>
            </div>
            <div className="input_box">
              <label>color</label>
              <input
                onChange={(e) => handleEdgeChange(e, i)}
                type="color"
                value={borderEdgeColor[i]}
              />
            </div>
          </>
        );
      }
      return blocks;
    }
  };

  return (
    <>
      <div className="row">
        <Menu />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit="exit"
          className="cssContainer"
        >
          <TitleContainer title="Border" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>color</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="color"
                  value={borderColor}
                />
              </div>
              <div className="input_box">
                <label>Width</label>
                <input
                  onChange={(e) => borderWidthHandler(e)}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={borderWidth.replace("px", "")}
                />
                <span>{borderWidth}</span>
              </div>
              <div className="input_box">
                <label>Style</label>
                <select
                  value={borderType}
                  onChange={(e) => borderTypeHandler(e)}
                >
                  <option value="solid" selected={borderType === "solid"}>
                    solid
                  </option>
                  <option value="dashed" selected={borderType === "dashed"}>
                    dashed
                  </option>
                  <option value="dotted" selected={borderType === "dotted"}>
                    dotted
                  </option>
                  <option value="double" selected={borderType === "double"}>
                    double
                  </option>
                  <option value="groove" selected={borderType === "groove"}>
                    groove
                  </option>
                  <option value="ridge" selected={borderType === "ridge"}>
                    ridge
                  </option>
                  <option value="inset" selected={borderType === "inset"}>
                    inset
                  </option>
                  <option value="outset" selected={borderType === "outset"}>
                    outset
                  </option>
                </select>
              </div>
              <div className="input_box">
                <label>Box sizing</label>
                <select value={boxSizing} onChange={(e) => boxSizingHandler(e)}>
                  <option
                    value="content-box"
                    selected={boxSizing === "content-box"}
                  >
                    content-box
                  </option>
                  <option
                    value="border-box"
                    selected={boxSizing === "border-box"}
                  >
                    border-box
                  </option>
                </select>
              </div>
            </div>
            all edge
            <input
              type="checkbox"
              checked={borderEdge[0] === 1}
              onClick={activateEdge}
              style={{ width: "30px" }}
            />
            {renderBorderEdges()}
          </div>
          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
