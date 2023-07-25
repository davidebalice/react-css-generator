import React from "react";
import DataCss from "../../data_css";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="columnMenu">
      {DataCss.map((data) => (
        <div style={{ height: "100%" }}>
          {data.routeAddress.map((routes) => (
            <Link key={routes.id} to={routes.route} key={data.id}>
              <AwesomeButton className="menuButton">
                {routes.name}
              </AwesomeButton>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
