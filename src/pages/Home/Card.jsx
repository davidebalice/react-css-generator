import React from "react";
import { motion } from "framer-motion";
import "react-awesome-button/dist/themes/theme-blue.css";
import { MdOutlineBorderOuter, MdTextFields } from "react-icons/md";
import { FaRegImage, FaColumns } from "react-icons/fa";

export default function Card({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay }}
      exit="exit"
      className="homeCard"
    >
      <div className="cardIcon">
        {icon === "css" && <MdOutlineBorderOuter />}
        {icon === "text" && <MdTextFields />}
        {icon === "image" && <FaRegImage />}
        {icon === "flex" && <FaColumns />}
      </div>
      <div className="cardTitle"> {title}</div>
      <div className="cardText"> {description}</div>
    </motion.div>
  );
}
