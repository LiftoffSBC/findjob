import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Searchbar from "./components/Search/Searchbar";
//We will import the navigation when it is complete:
// import Navigation from "./components/Navigation/Navigation";
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
      <div>
        <Navbar />
          <Jumbotron />
          </div>
        <Searchbar updateSearchResults={this.updateSearchResults}/>
        <div className="container">
          <Table searchResults={this.state.searchResults}/>
        </div>
        <Footer />
      </div>

    )}

}

export default App;
