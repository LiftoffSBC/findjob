import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Table from "./components/Table/Table";

const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Table />
  </div>
);

export default App;
