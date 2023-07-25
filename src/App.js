import React from "react";
import { useRoutes } from "react-router-dom";
import ContextProvider from "./components/Context/ContextProvider";
import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import router from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  let routes = useRoutes(router);

  return (
    <>
      <ContextProvider>
        <AnimatePresence>
          <Header />
          <div className="container_App">{routes}</div>
          <Footer />
        </AnimatePresence>
      </ContextProvider>
    </>
  );
}

export default App;
