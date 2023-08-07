import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";
import Datas from "../../Datas";
import Box from "../../components/Css/Preview";
import { motion } from "framer-motion";
import { Context } from "../../components/Context/BoxContext";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "./Button.css";
import GitHubLink from "../../components/GithubLink/GitHubLink";

export default function Filter() {
  const { mainVariant, closeMenu } = useContext(Context);

  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home_Container"
    >
      <div key={"home"} className="group_container">
        <div className="group_btn">
          <Link key="css_id" to="/">
            <AwesomeButton>home</AwesomeButton>
          </Link>
        </div>
      </div>

      {Datas.map((data) => (
        <div key={data.id} className="group_container">
          <span className="title_group">{data.title}</span>
          <div className="group_btn">
            {data.routeAddress.map((routes) => (
              <Link onClick={closeMenu} key={routes.id} to={routes.route}>
                <AwesomeButton>{routes.name}</AwesomeButton>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div>
        <Box />
      </div>
      <GitHubLink />
    </motion.div>
  );
}
