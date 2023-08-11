import React, { useContext } from "react";
import { useRoutes } from "react-router-dom";
//import { PageContext } from "./components/Context/PageContext";

import BoxContextProvider from "./components/Context/BoxContext";
import TextContextProvider from "./components/Context/TextContext";
import Header from "./components/Header/Header";
import router from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  let routes = useRoutes(router);
  //const { state, dispatch } = useContext(PageContext);
  // const { pageState } = useContext(PageContext);
  // const { pageType } = state;

  return (
    <>
      <AnimatePresence>
        <Header />
        <BoxContextProvider>
          <TextContextProvider>
            <div className="container_App">{routes}</div>
          </TextContextProvider>
        </BoxContextProvider>
      </AnimatePresence>
    </>
  );
}

export default App;

/*
     {pageType === "css" && (
          <BoxContextProvider>
            <div className="container_App">{routes}</div>
          </BoxContextProvider>
        )}
        {pageType === "text" && (
          <TextContextProvider>
            <div className="container_App">{routes}</div>
          </TextContextProvider>
        )}

*/
