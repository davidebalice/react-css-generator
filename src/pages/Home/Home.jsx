import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "react-awesome-button/dist/themes/theme-blue.css";
import Card from "./Card";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <motion.div
          exit="exit"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="cardContainer"
        >
          <Link to="/backgroundcolor">
            <Card
              title="Box"
              description="border, background, radius, shadow, rotate..."
              delay="0.1"
              icon="css"
            />
          </Link>
          <Link to="/fontsize">
            <Card
              title="Text"
              description="font-size, font-family, text-style, text-shadow..."
              delay="0.2"
              icon="text"
            />
          </Link>
          <Link to="/brightness">
            <Card
              title="Image filter"
              description="brightness, blur, contrast, filter..."
              delay="0.3"
              icon="image"
            />
          </Link>

          <Link to="/flex">
            <Card
              title="Flex & Grid"
              description="display flex, display grid, direction, column..."
              delay="0.4"
              icon="flex"
            />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
