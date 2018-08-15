import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Table from "./components/Table/Table";

const App = () => (
  <div>
  <Navbar />
  <div className="container">
    <Jumbotron />
    <Table />
  </div>
  </div>
);

}
  export default App;
