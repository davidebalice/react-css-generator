import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "react-awesome-button/dist/themes/theme-blue.css";
import Card from "./Card";
import "./Button.css";

export default function Home() {

  return (
    <motion.div
      exit="exit"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="cardContainer"
    >
      <Link to="/backgroundcolor">
        <Card
          title="Css"
          description="border, background, radius, shadow, rotate..."
          delay="0.1"
          icon="css"
        />
      </Link>
      <Card
        title="Text"
        description="font-size, font-family, text-style, text-shadow..."
        delay="0.2"
        icon="text"
      />
      <Card title="Image filter" description="brightness, blur, contrast, filter..." delay="0.3" icon="image" />
      <Card title="Flex box" description="display flex, direction, justify content..." delay="0.4" icon="flex" />
    </motion.div>
  );
}
