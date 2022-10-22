import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Ads from "./component/Ads";
import Cards from "./component/Cards";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <Ads />
      <Cards />
      <h1
        style={{
          textAlign: "center",
          color: "grey",
          fontWeight: "400",
          margin: "1rem",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          padding:"1rem"
        }}
      >
        Copyright © 2022 Aryatech Platforms Private Limited. All Rights
        Reserved.
      </h1>
    </>
  );
}

export default App;
