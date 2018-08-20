import React from "react";
import "./Navigation.css";
// do we get the results from here
// import API from "./../../utils/API";
//or do we import them from navbar?
// import Navbar from "./../Navbar";


// not sure about this either - took part from react bootstrap, part from bootstrap.

  let active = 7;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(

      //not sure about this
      <Navigation.Item active={number === active}>{number}</Navigation.Item>
    );
  }
  
  const Navigation = () => (

    <nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    // <div>
    //   <Navigation bsSize="large">{items}</Navigation>
    //   <br />
  
    //   <Navigation bsSize="medium">{items}</Navigation>
    //   <br />
  
    //   <Navigation bsSize="small">{items}</Navigation>
    // </div>
  );
  
  // render(Navigation);


export default Navigation;