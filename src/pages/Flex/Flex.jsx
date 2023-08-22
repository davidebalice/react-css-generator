import React, { useContext } from "react";
import { Context } from "../../components/Context/FlexContext";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewFlex";
import Code from "../../components/Code/CodeFlex";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function FlexBox() {
  const { state, dispatch } = useContext(Context);
  const { flexDirection, alignItems, justifyContent } = state;

  const directionHandler = (e) => {
    dispatch({ type: "SET_FLEX_DIRECTION", payload: e.target.value });
  };

  const alignItemsHandler = (e) => {
    dispatch({ type: "ALIGN_ITEMS", payload: e.target.value });
  };

  const justifyContentHandler = (e) => {
    dispatch({ type: "JUSTIFY_CONTENT", payload: e.target.value });
  };

  /*
  const flexBoxCopyHandler = async () => {
    let text = JSON.stringify(flex).replaceAll(",", ";").replaceAll('"', "");
    await copyed(text);
    btnCopyTextChange();
  };
*/

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
          <TitleContainer title="FlexBox" />
          <Preview />

          <div className="option_wraper">
            <div className="options">
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
                <select onChange={directionHandler}>
                  <option value="row">row</option>
                  <option value="column">column</option>
                  <option value="row-reverse">row reverse</option>
                  <option value="column-reverse">column reverse</option>
                </select>
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
