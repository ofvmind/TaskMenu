import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/App_Router/App_Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
