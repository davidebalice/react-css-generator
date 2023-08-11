import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import PageContextProvider from "./components/Context/PageContext";
import BoxContextProvider from "./components/Context/BoxContext";
import TextContextProvider from "./components/Context/TextContext";
import Header from "./components/Header/Header";
import router from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  let routes = useRoutes(router);
  const location = useLocation();

  const [cssContext, setCssContext] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/backgroundcolor":
      case "/backgroundgradient":
      case "/border":
      case "/borderradius":
      case "/boxshadow":
      case "/opacity":
      case "/skew":
      case "/rotate":
        setCssContext("box");
        break;
      case "/fontsize":
      case "/fontcolor":
        setCssContext("text");
        break;
      default:
        setCssContext("box");
        break;
    }
  }, [location.pathname]);

  console.log(cssContext);

  return (
    <>
      <AnimatePresence>
        <PageContextProvider>
          <Header />
          {cssContext === "box" && (
            <BoxContextProvider>
              <div className="container_App">{routes}</div>
            </BoxContextProvider>
          )}
          {cssContext === "text" && (
            <TextContextProvider>
              <div className="container_App">{routes}</div>
            </TextContextProvider>
          )}
        </PageContextProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
