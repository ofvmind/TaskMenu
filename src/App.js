import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/App_Router/App_Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Context } from "./Context/Context";

function App() {
  const [isBarHidden, setIsBarHidden] = useState(true);

  return (
    <Context.Provider value={{isBarHidden, setIsBarHidden}}>
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
