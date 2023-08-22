import React, { useContext } from "react";
import { Context } from "../../components/Context/FlexContext";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewGrid";
import Code from "../../components/Code/CodeGrid";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Grid() {
  const { state, dispatch } = useContext(Context);
  const { gridItem, column, gridGap } = state;

  const columnHandler = (e) => {
    dispatch({ type: "SET_COLUMN", payload: e.target.value });
  };

  const gridGapHandler = (e) => {
    dispatch({ type: "SET_GRID_GAP", payload: `${e.target.value}px` });
  };

  const itemHandler = (e) => {
    dispatch({ type: "SET_GRID_ITEM", payload: e.target.value });
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
          <TitleContainer title="Grid" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <label>Item</label>
                <select onChange={itemHandler} value={gridItem}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div className="input_box">
                <label>Column</label>
                <select onChange={columnHandler} value={column}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="input_box">
                <label>Gap</label>
                <input
                  onChange={(e) => gridGapHandler(e)}
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={gridGap.replace("px", "")}
                />
                <span>{gridGap}</span>
              </div>
            </div>
          </div>
          <Code />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
