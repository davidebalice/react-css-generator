import React, { useState, useEffect, useContext } from "react";
import { PageContext } from "../../components/Context/PageContext";
import DataCss from "../../data_css";
import DataText from "../../data_text";
import DataFilter from "../../data_filter";
import DataFlex from "../../data_flex";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseSquare } from 'react-icons/ai';


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [Data, setData] = useState(DataCss);
  const { pageState } = useContext(PageContext);
  const { pageType } = pageState;

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

  useEffect(() => {
    if (pageType === "css") {
      setData(DataCss);
    } else if (pageType === "text") {
      setData(DataText);
    } else if (pageType === "filter") {
      setData(DataFilter);
    } else if (pageType === "flex") {
      setData(DataFlex);
    }
  }, [pageType]);

  return (
    <>
      {isMobile && (
        <div className="mobileButtonContainer" onClick={toggleMenu}>
          {isMenuOpen ?  <AiFillCloseSquare/> :  <GiHamburgerMenu/>}
        </div>
      )}

      {isMenuOpen && (
        <div className="columnMenu">
          {Data.map((data) => (
            <div style={{ height: "100%" }}>
              <Link key="home" to="/">
                <AwesomeButton
                  className="menuButton"
                  style={{ "::before": "justify-content: start;" }}
                >
                  <div className="menuButtonInt">
                    <p>Home</p>
                  </div>
                </AwesomeButton>
              </Link>
              {data.routeAddress.map((routes) => (
                <Link key={routes.id} to={routes.route}>
                  <AwesomeButton
                    className="menuButton"
                    style={{ "::before": "justify-content: start;" }}
                  >
                    <div className="menuButtonInt">
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
