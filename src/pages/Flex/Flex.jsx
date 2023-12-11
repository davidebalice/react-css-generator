import React, { useContext } from "react";
import { Context } from "../../components/Context/FlexContext";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFlex";
import Code from "../../components/Code/CodeFlex";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function Flex() {
  const { state, dispatch } = useContext(Context);
  const { item, flexDirection, alignItems, justifyContent, gap } = state;

  const itemHandler = (e) => {
    dispatch({ type: "SET_ITEM", payload: e.target.value });
  };

  const directionHandler = (e) => {
    dispatch({ type: "SET_FLEX_DIRECTION", payload: e.target.value });
  };

  const alignItemsHandler = (e) => {
    dispatch({ type: "SET_ALIGN_ITEMS", payload: e.target.value });
  };

  const justifyContentHandler = (e) => {
    dispatch({ type: "SET_JUSTIFY_CONTENT", payload: e.target.value });
  };

  const gapHandler = (e) => {
    dispatch({ type: "SET_GAP", payload: `${e.target.value}px` });
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
          <TitleContainer title="Flex" />
          <Preview />

          <div className="optionWrapper">
            <div className="options">
              <div className="input_box">
                <label>Item</label>
                <select onChange={itemHandler} value={item}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="input_box">
                <label>Justify Content</label>
                <select onChange={justifyContentHandler}>
                  <option value="center">center</option>
                  <option value="flex-start">flex start</option>
                  <option value="flex-end">flex end</option>
                  <option value="baseline">baseline</option>
                  <option value="space-around">space around</option>
                  <option value="space-between">space between</option>
                  <option value="space-evenly">space evenly</option>
                </select>
              </div>
              <div className="input_box">
                <label>Align Items</label>
                <select onChange={alignItemsHandler}>
                  <option value="center">center</option>
                  <option value="flex-start">flex start</option>
                  <option value="flex-end">flex end</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>
              <div className="input_box">
                <label>Direction</label>
                <select onChange={directionHandler} value={flexDirection}>
                  <option value="row">row</option>
                  <option value="column">column</option>
                  <option value="row-reverse">row reverse</option>
                  <option value="column-reverse">column reverse</option>
                </select>
              </div>
              <div className="input_box">
                <label>Gap</label>
                <input
                  onChange={(e) => gapHandler(e)}
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={gap.replace("px", "")}
                />
                <span>{gap}</span>
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
