import React from "react";
import { useRoutes } from "react-router-dom";
import BoxContextProvider from "./components/Context/BoxContext";
import TextContextProvider from "./components/Context/TextContext";
import Header from "./components/Header/Header";
import router from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  let routes = useRoutes(router);

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