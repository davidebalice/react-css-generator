import React from "react";
import { motion } from "framer-motion";
import "react-awesome-button/dist/themes/theme-blue.css";
import { FaReact } from "react-icons/fa";

export default function Description({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay }}
      exit="exit"
      className="homeCard"
      style={{ minHeight: "180px" }}
    >
      <div className="descriptionContainer">
        <FaReact className="reactLogo" />
        <div>
          <div className="descriptionTitle">Css generator</div>
          <div className="descriptionText">
            Css generator developed in React.
            <br />
            Download project on GitHub
          </div>
        </div>
      </div>
    </motion.div>
  );
}
