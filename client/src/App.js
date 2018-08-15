import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  state={
    searchResults: []
  }

  updateSearchResults = (results) => {
    this.setState({
      searchResults: results
    })
  }

  render() {
    return (
      <div>
        <Navbar updateSearchResults={this.updateSearchResults}/>
        <div className="container">
          <Jumbotron />
          <Table searchResults={this.state.searchResults}/>
        </div>
        <Footer />
      </div>

    )}

}

export default App;
