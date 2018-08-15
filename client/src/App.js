import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";


const App = () => (
  <div>
  <Navbar />
  <div className="container">
    <Jumbotron />
    <Table />
  </div>
  <Footer />
  </div>
);

export default App;
