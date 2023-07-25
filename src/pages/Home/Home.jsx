import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Datas from "../../Datas";
import { motion } from "framer-motion";
import { Context } from "../../components/Context/ContextProvider";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "./Button.css";
import GitHubLink from "../../components/GithubLink/GitHubLink";

export default function Home() {
  const { mainVariant } = useContext(Context);

  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home_Container"
    >
      <div key={"css"} className="group_container">
        <div className="group_btn">
          <Link key="css_id" to="/backgroundcolor">
            <AwesomeButton>css</AwesomeButton>
          </Link>
        </div>
      </div>

      <div key={"css"} className="group_container">
        <div className="group_btn">
          <Link key="css_id" to="/filter">
            <AwesomeButton>filter</AwesomeButton>
          </Link>
        </div>
      </div>

      <div key={"css"} className="group_container">
        <div className="group_btn">
          <Link key="css_id" to="/flex">
            <AwesomeButton>flex box</AwesomeButton>
          </Link>
        </div>
      </div>

      <GitHubLink />
    </motion.div>
  );
}
