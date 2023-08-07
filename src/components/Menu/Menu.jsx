import React, { useState, useEffect } from "react";
import DataCss from "../../data_css";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { AiOutlineBorder, AiOutlineRadiusUpleft } from "react-icons/ai";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function handleMediaQueryChange(event) {
      setIsMobile(event.matches);
      if (isMobile) {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
      }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  console.log("isMobile");
  console.log(isMobile);

  return (
    <>
      {isMobile && (
        <div className="mobileButtonContainer" onClick={toggleMenu}>
          Open Menu
        </div>
      )}

      {isMenuOpen && (
        <div className="columnMenu">
          {DataCss.map((data) => (
            <div style={{ height: "100%" }}>
              {data.routeAddress.map((routes) => (
                <Link key={routes.id} to={routes.route}>
                  <AwesomeButton
                    className="menuButton"
                    style={{ "::before": "justify-content: start;" }}
                  >
                    <div className="menuButtonInt">
                      {routes.icon === "border" && <AiOutlineBorder />}
                      {routes.icon === "radius" && <AiOutlineRadiusUpleft />}
                      <p>{routes.name}</p>
                    </div>
                  </AwesomeButton>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
