import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">content here</div>
      <Footer />
    </div>
  );
};

export default App;
