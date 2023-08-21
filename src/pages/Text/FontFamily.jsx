import React, { useContext } from "react";
import Menu from "../../components/Menu/Menu";
import Preview from "../../components/Preview/PreviewText";
import Code from "../../components/Code/CodeText";
import { Context } from "../../components/Context/TextContext";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import TitleContainer from "../../components/TitleContainer/TitleContainer";

export default function FontFamily() {
  const { state, dispatch } = useContext(Context);
  const { fontfamily } = state;

  const fontfamilyHandler = (e) => {
    dispatch({ type: "SET_FONT_FAMILY", payload: e.target.value });
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
         
          <TitleContainer title="Font family" />
          <Preview />
          
          <div className="option_wraper">
            <div className="options">
              <div className="input_box">
                <select onChange={(e) => fontfamilyHandler(e)}>
                  <option value="Abel">Abel</option>
                  <option value="Bebas Neue">Bebas Neue</option>
                  <option value="Dancing Script">Dancing Script</option>
                  <option value="Josefin Sans">Josefin Sans</option>
                  <option value="Mukta">Mukta</option>
                  <option value="Oswald">Oswald</option>
                  <option value="Pacifico">Pacifico</option>
                  <option value="Playfair Display">Playfair Display</option>
                  <option value="PT Serif">PT Serif</option>
                  <option value="Quicksand">Quicksand</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Titillium Web">Titillium Web</option>
                  <option value="Ubuntu">Ubuntu</option>
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
