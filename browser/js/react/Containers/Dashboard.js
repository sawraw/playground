import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AddStyleguide from '../Components/AddStyleguide';
import Styleguides from '../Components/Styleguides';


/* -----------------    COMPONENT     ------------------ */

class Styleguide extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
  
    return (
      <div>
        <Styleguides />
        <AddStyleguide />
    


      </div>
    );
  }

}

/* -----------------    CONTAINER     ------------------ */


export default connect(null)(Styleguide);

