import React from "react";
import "./Jumbotron.css";
// import React from 'react';
// import { render } from 'react-dom';
// import {Image} from 'react-bootstrap';

const Jumbotron = () => (
  <div className="jumbotron">
    <h1><img src={require('../../public/img/finjobiotransparent.png')} className="img-fluid" alt="Responsive image"/></h1>
    
    <p>
      Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris
      magna exercitation. Aliquip reprehenderit magna elit cillum adipisicing
      dolore aliquip velit. Ipsum ullamco nostrud tempor eu deserunt ipsum
      incididunt fugiat esse ipsum. Exercitation nostrud exercitation sit ex
      nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non
      dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
    </p>
  </div>
);

export default Jumbotron;



